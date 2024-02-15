describe('petAdoptionAgency', () => {
    describe('isPetAvailable', () => {
      it('should return a message when pet is not available', () => {
        const result = petAdoptionAgency.isPetAvailable('Dog', 0, true);
        expect(result).to.equal('Sorry, there are no Dog(s) available for adoption at the agency.');
      });
  
      it('should return a message for vaccinated pet', () => {
        const result = petAdoptionAgency.isPetAvailable('Cat', 3, true);
        expect(result).to.equal('Great! We have 3 vaccinated Cat(s) available for adoption at the agency.');
      });
  
      it('should return a message for non-vaccinated pet', () => {
        const result = petAdoptionAgency.isPetAvailable('Bird', 2, false);
        expect(result).to.equal('Great! We have 2 Bird(s) available for adoption, but they need vaccination.');
      });
  
      it('should throw an error for invalid input', () => {
        expect(() => petAdoptionAgency.isPetAvailable(123, 2, true)).to.throw('Invalid input');
        expect(() => petAdoptionAgency.isPetAvailable('Dog', 'invalid', true)).to.throw('Invalid input');
        expect(() => petAdoptionAgency.isPetAvailable('Cat', 3, 'invalid')).to.throw('Invalid input');
      });
    });
  
    describe('getRecommendedPets', () => {
      it('should return recommended pets', () => {
        const petList = [
          { name: 'Fluffy', traits: 'Friendly' },
          { name: 'Buddy', traits: 'Playful' },
          { name: 'Max', traits: 'Energetic' }
        ];
        const result = petAdoptionAgency.getRecommendedPets(petList, 'Friendly');
        expect(result).to.equal('Recommended pets with the desired traits (Friendly): Fluffy');
      });
  
      it('should return no recommended pets message', () => {
        const petList = [
          { name: 'Fluffy', traits: 'Friendly' },
          { name: 'Buddy', traits: 'Playful' },
          { name: 'Max', traits: 'Energetic' }
        ];
        const result = petAdoptionAgency.getRecommendedPets(petList, 'Lazy');
        expect(result).to.equal('Sorry, we currently have no recommended pets with the desired traits: Lazy.');
      });
  
      it('should throw an error for invalid input', () => {
        expect(() => petAdoptionAgency.getRecommendedPets('invalid', 'Friendly')).to.throw('Invalid input');
        expect(() => petAdoptionAgency.getRecommendedPets([], 'Friendly')).to.throw('Invalid input');
        expect(() => petAdoptionAgency.getRecommendedPets([], 123)).to.throw('Invalid input');
      });
    });
  
    describe('adoptPet', () => {
      it('should return adoption success message', () => {
        const result = petAdoptionAgency.adoptPet('Fluffy', 'John');
        expect(result).to.equal('Congratulations, John! You have adopted Fluffy from the agency. Enjoy your time with your new furry friend!');
      });
  
      it('should throw an error for invalid input', () => {
        expect(() => petAdoptionAgency.adoptPet(123, 'John')).to.throw('Invalid input');
        expect(() => petAdoptionAgency.adoptPet('Fluffy', 456)).to.throw('Invalid input');
      });
    });
  });