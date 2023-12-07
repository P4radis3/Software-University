function addressBook(input) {
    
    let addressBook = {};
    for (let item of input) {

        let [name, address] = item.split(':');
        addressBook[name] = address;

    }

    let entries = Object.entries(addressBook);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    let sorted = {};
    for (let [name, address] of entries) {

        sorted[name] = address;
        
    }


    for (let [name, address] of Object.entries(sorted)) {

        console.log(name, '->', address);

    }
}