let d;
function dateInfo()
{
    d=new Date();
    const newDate=d.getDate();
    return newDate;
}
console.log(dateInfo());

function month(){
    const currentMonth=d.getMonth();
    return currentMonth;
}
console.log(month());
 
function batchInfo()
{
    var batchname="Thorium";
    var week="W3";
    var day="D1";
    var infobatch=""+batchname+"  #"+week+day+"the topic for today is node.js module system";
    return infobatch;
}
console.log(batchInfo());

module.exports.varNew=d;
module.exports.dateInfo=dateInfo;
module.exports.month=month;
module.exports.batchInfo=batchInfo;