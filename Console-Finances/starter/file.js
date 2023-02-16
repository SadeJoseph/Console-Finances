//global variables
 var total=0
 var greatestIncrease = 0;
 var greatestDescrease = 0 ;

 
 var netChange=0;
 var change =0 ;

 var analysis= ''


 for (var main_index =0; main_index <finances.length;main_index ++) {
    
    var netProfitLoss = finances[main_index] [1]
// find greatest profit decrease 
    if (netProfitLoss <greatestDescrease) {
        greatestDescrease =netProfitLoss;
        var greatestMonthDec = finances [main_index][0]
    }
    // to find highest prof increase 
    if (netProfitLoss> greatestIncrease) {
        greatestIncrease =netProfitLoss;
        var greatestMonthInc =finances [main_index][0]
    }

    var previousdifference =0
    var change = netProfitLoss - previousdifference
    previousdifference =change
    netChange +=change 
    total+=netProfitLoss
 }

var allMonths = finances.length;
var avgChange = netChange /allMonths


var avgChangeRounded = Math.round(avgChange)

analysis = `Financial Analysis
------------------------
Total Months: ${allMonths}
Total: $${total}
Average Change: $${avgChangeRounded}
Greatest Increase in profits : ${greatestMonthInc} ($${greatestIncrease})
Greatest Decrease in profits:  ${greatestMonthDec} ($${greatestDescrease})` ;

console.log(analysis);
