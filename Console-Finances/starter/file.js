//global variables
 var total=0
 var greatestIncrease = 0
 var greatestDescrease = 0 

 
 var netChange=0
 var change =0 

 var totalMonths


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
