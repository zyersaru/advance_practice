var salesTaxRates = {
 AB: 0.05,
 BC: 0.12,
 SK: 0.10
};

var companySalesData = [
 {
   name: "Telus",
   province: "BC",
   sales: [ 100, 200, 400 ]
 },
 {
   name: "Bombardier",
   province: "AB",
   sales: [ 80, 20, 10, 100, 90, 500 ]
 },
 {
   name: "Telus",
   province: "SK",
   sales: [ 500, 100 ]
 }
];

function add(a, b) {
 return a + b;
}


function calculateSalesTax(salesData, taxRates) {
 var results = {}
 for (var i in companySalesData) {
   var currentRecord = companySalesData[i];
     if (results[currentRecord.name] === undefined) {
       results[currentRecord.name] = {
         totalSales: 0,
         totalTaxes: 0
     };
   }
   var currentSales = currentRecord.sales.reduce(add, 0);
   var currentTaxRate = salesTaxRates[currentRecord.province]

   results[currentRecord.name].totalSales += currentSales;
   results[currentRecord.name].totalTaxes += (currentTaxRate * currentSales)
 }
 return results;
}
console.log(calculateSalesTax(companySalesData, salesTaxRates));


/* Expected Results:
{
 Telus: {
   totalSales: 1300
   totalTaxes: 144
 },
 Bombardier: {
   totalSales: 800,
   totalTaxes: 40
 }
}
*/