var xlsx= require("xlsx");
var wb = xlsx.readFile("data.xlsx",{cellDates:true});

var ws = wb.Sheets["Data"];

var d = xlsx.utils.sheet_to_json(ws);


console.log(d);
