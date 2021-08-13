window.onload = function(){
    a()
}
function a(){
var radio = document.getElementById("Question");
var radio1 = document.getElementById("Comment");
var radio2 = document.getElementById("Hiring");
var parentdiv = document.getElementById('dynamo')
var text;
var label = document.createElement('label')
label.htmlFor = "further"
label.className = "col-sm-2 col-form-label col-form-label-lg"

radio.onclick = function(){
    text = document.createTextNode("Question")
   var textarea = document.createElement("textarea")
   textarea.className = "form-control form-control-lg"
   textarea.name = "further"
   textarea.id = "further"
   textarea.rows = "3"
   textarea.value = ""
   textarea.required = true;
   textarea.placeholder = "Type your question here"
   var div = document.getElementById("dynamic")
   div.innerHTML = ""
   label.innerHTML = ""
   label.appendChild(text)
   parentdiv.insertBefore(label,parentdiv.firstChild)
   div.appendChild(textarea)
}
radio1.onclick = function(){
    text = document.createTextNode("Comment")
   var textarea = document.createElement("textarea")
   textarea.className = "form-control form-control-lg"
   textarea.name = "further"
   textarea.rows = "3"
   textarea.id = "further"
   textarea.value = ""
   textarea.required = true;
   textarea.placeholder = "Type your comment here"
   var div = document.getElementById("dynamic")
   div.innerHTML = ""
   label.innerHTML = ""
   label.appendChild(text)
   parentdiv.insertBefore(label,parentdiv.firstChild)
   div.appendChild(textarea)
 }
 radio2.onclick = function(){
   text = document.createTextNode("Hiring")   
   var input = document.createElement('input');
   input.type = "text";
   input.name = "Hiring"
   input.id = "further"
   input.className = "form-control form-control-lg"
   input.required = true
   input.value = ""
   input.placeholder = "Type your hiring rate per hour"
   input.type = "number"
   input.step = "0.01"
   var div = document.getElementById("dynamic")
   div.innerHTML = ""
   label.innerHTML = ""
   label.appendChild(text)
   parentdiv.insertBefore(label,parentdiv.firstChild)
   div.appendChild(input)
 }
 

}