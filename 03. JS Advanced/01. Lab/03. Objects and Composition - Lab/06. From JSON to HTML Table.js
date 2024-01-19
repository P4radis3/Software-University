function fromJSONToHTMLTable(input) {

    let array = JSON.parse(input);
    let outputArray = ["<table>"];
    
    console.log("<table>");
    
    header = Object.keys(array[0]);
    outputArray.push(makeKeyRow(header));
    array.forEach((obj) => outputArray.push(makeValueRow(obj)));
    
    outputArray.push("</table>");
    console.log("</table>");
    
    function makeKeyRow(header) {
        
        let rowString = "   <tr>";
        for (let index = 0; index < header.length; index++) {
        
            rowString += "<th>";
            rowString += header[index];
            rowString += "</th>";
        
        }
        
        rowString += "</tr>"
        outputArray.push(rowString);
        console.log(rowString);

    }

    function makeValueRow(obj) {

        let rowString = "   <tr>";
        for (let index = 0; index < header.length; index++) {

            rowString += "<td>";
            rowString += escapeHtml(obj[header[index]]);
            rowString += "</td>";

        }

        rowString += "</tr>";
        outputArray.push(rowString);
        console.log(rowString);

    };

    function escapeHtml(value) {
        
        let entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            ' ': '&nbsp;',
        
        };

        return value.toString().replace(/[&<> "]/g, (value) => entityMap[value]);
      
    };
}