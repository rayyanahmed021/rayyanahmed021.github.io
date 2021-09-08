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
 var h1 = document.getElementById("tic-tac-toe")
 var h2 = document.getElementById("customer")
 var h3 = document.getElementById("Hospital")
 var h4 = document.getElementById("learning")

 var para1 = document.getElementById("tic")
 var para2 = document.getElementById("cust")
 var para3 = document.getElementById("hos")
 var para4 = document.getElementById("learn")

 var arr1 = document.getElementById("1")
 var arr2 = document.getElementById("2")
 var arr3 = document.getElementById("3")
 var arr4 = document.getElementById("4")

 para1.className = "unslide"
 para2.className = "unslide"
 para3.className = "unslide"
 para4.className = "unslide"
 
 h1.onclick = function () {slide(para1,arr1)};
 h2.onclick = function () {slide(para2,arr2)};
 h3.onclick = function () {slide(para3,arr3)};
 h4.onclick = function () {slide(para4,arr4)};
 
 function slide(para,arrow){  
   if (para.className === "unslide"){
    // para.style.display = "block"
    para.className = "slide"
    // para.style.animationName = "slide"
    arrow.className = "arrow down"
   }
   else if(para.className !== "unslide"){
    para.className = "unslide"
    // para.style.animationName = "slide"
    arrow.className = "arrow up"
           }
 }

}