var mainDiv = document.createElement("div");
mainDiv.setAttribute("style","display:flex;flex-direction:column;text-align:center")

var inputDiv = document.createElement("div")
inputDiv.setAttribute("style","text-align:center")

var input = document.createElement("input");
input.setAttribute("type","date");
input.setAttribute("id","dob");
input.setAttribute("style","width:120px;height:22px");
input.value = "1989-09-02"

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("style","color:white;background-color:blue;width:120px;height:22px;margin-left:20px")
button.textContent = "Display Data"
inputDiv.append(input);
inputDiv.append(button);
mainDiv.append(inputDiv)
document.body.append(mainDiv);


button.addEventListener("click",function(){

const spanElement = document.querySelectorAll("span");
if(spanElement.length>0) {
    for(let i=0;i<spanElement.length;i++) {
        spanElement[i].remove();
    }
}

if(document.getElementById("result")) {
    document.getElementById("result").remove();
}
var dob = document.getElementById("dob").value;
var curDt = new Date();
var dobDt = new Date(dob);
var milSeconds = -dobDt.getTime()+curDt.getTime(); 



var seconds = Math.floor(milSeconds/(1000));
console.log(seconds)
var minutes = Math.floor(seconds/60);
console.log(minutes)
var hours = Math.floor(minutes/60);
console.log(hours)
var days = Math.floor(hours/24);
console.log(days);

var year = curDt.getFullYear()-dobDt.getFullYear();
console.log(year)
var month = year*12+ ((curDt.getMonth()+1)-(dobDt.getMonth()+1));




console.log(milSeconds)

var resultDiv = document.createElement("div");
resultDiv.id = "result";
resultDiv.setAttribute("style","margin-top:20px;display:flex;flex-direction:column")
var span = document.createElement("span");
span.textContent = "Entered date of birth is : - " + curDt;
var yrField = document.createElement("span");
yrField.textContent = "year : "+year;
var mthField = document.createElement("span");
mthField.textContent = "month : "+month;
var dayField = document.createElement("span");
dayField.textContent = "days :"+days;
var hrField = document.createElement("span");
hrField.textContent = "hours :"+hours;
var minField = document.createElement("span");
minField.textContent = "minutes :"+minutes;
var secField = document.createElement("span");
secField.textContent = "seconds :"+seconds;
var milField = document.createElement("span");
milField.textContent = "milli-seconds :"+milSeconds;
resultDiv.append(span)
resultDiv.append(yrField);
resultDiv.append(mthField);
resultDiv.append(dayField);
resultDiv.append(hrField);
resultDiv.append(minField)
resultDiv.append(secField);
resultDiv.append(milField)
mainDiv.append(resultDiv)

})
