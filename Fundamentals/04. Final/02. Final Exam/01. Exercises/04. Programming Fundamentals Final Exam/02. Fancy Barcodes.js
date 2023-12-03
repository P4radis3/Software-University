function fancyBarcodes(input) {

    let count = Number(input.shift());
    let rgx = /@#+(?<barcode>[A-Z][A-Za-z\d]{4,}[A-Z])@#+/

    for (let line of input) {

        let code = '';
        let match = rgx.exec(line);

        if (match) {
            
            for (let elements of match.groups.barcode) {
                if (elements.charCodeAt() >= 48 && elements.charCodeAt() <= 57) {
                    code += elements;
                }
            }


            if (code == '') {
            
                console.log(`Product group: 00`);
            
            } else {

                console.log(`Product group: ${code}`);

            }
        } else {

            console.log(`Invalid barcode`);

        }
    }

}