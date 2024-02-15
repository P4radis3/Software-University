class FlightBookingSystem {
  constructor(agencyName) {
  
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  
  }

  addFlight(flightNumber, destination, departureTime, price) {
    let existingFlight = this.flights.find(flight => flight.flightNumber === flightNumber);
    if (existingFlight) {
    
      return (`Flight ${flightNumber} to ${destination} is already available.`);
    
    }

    let newFlight = {

      flightNumber,
      destination,
      departureTime,
      price

    };

    this.flights.push(newFlight);
    return `Flight ${flightNumber} to ${destination} has been added to the system.`;

  }

  bookFlight(passengerName, flightNumber) {

    let flight = this.flights.find(f => f.flightNumber === flightNumber);
    if (!flight) {

      return (`Flight ${flightNumber} is not available for booking.`);

    }

    this.bookings.push({ passengerName, flightNumber });
    this.bookingsCount++;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;

  }

  cancelBooking(passengerName, flightNumber) {

    let bookingIndex = this.bookings.findIndex(booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber);
    if (bookingIndex === -1) {

      throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);

    }

    this.bookings.splice(bookingIndex, 1);
    this.bookingsCount--;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;

  }

  showBookings(criteria) {
    if (this.bookings.length === 0) {

      throw new Error("No bookings have been made yet.");

    }

    if (criteria === "all") {

      let bookingList = this.bookings.map(booking => {
        return `${booking.passengerName} booked for flight ${booking.flightNumber}.`;

      });

      return [`All bookings(${this.bookingsCount}):`, ...bookingList].join('\n').trim();

    }

    let priceThreshold = criteria === "cheap" ? 100 : criteria === "expensive" ? 100 : null;
    if (priceThreshold === null) {

      throw new Error("Invalid criteria.");

    }

    let filteredBookings = this.bookings.filter(booking => {
      let flight = this.flights.find(f => f.flightNumber === booking.flightNumber);
      return criteria === "cheap" ? flight.price <= priceThreshold : flight.price > priceThreshold;

    });

    if (filteredBookings.length === 0) {

      return `No ${criteria} bookings found.`;

    }

    let bookingList = filteredBookings.map(booking => {
      return `${booking.passengerName} booked for flight ${booking.flightNumber}.`;
    });

    return [`${criteria.charAt(0).toUpperCase() + criteria.slice(1)} bookings:`, ...bookingList].join('\n').trim();

  }
}
