window.onload = function(){
    a()
}
function a(){
var radio = document.getElementById("customRadioInline1");
var radio1 = document.getElementById("customRadioInline2");
var radio2 = document.getElementById("customRadioInline3");
var parentdiv = document.getElementById('dynamo')
var text;
/* <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-lg">Name</label> */
var label = document.createElement('label')
label.htmlFor = "optional"
label.className = "col-sm-2 col-form-label col-form-label-lg"

radio.onclick = function(){
   // <textarea class="form-control form-control-lg"  name = "optional" id="exampleFormControlTextarea1" rows="3" ></textarea>
    text = document.createTextNode("Question")
   var textarea = document.createElement("textarea")
   textarea.className = "form-control form-control-lg"
   textarea.name = "optional"
   textarea.id = "optional"
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
   // var rad = document.getElementById("exampleFormControlTextarea1")
   // document.getElementById("inputEmail4").style.display = "none"
   // document.getElementById("inputEmail4").required = false
   // rad.style.display = "block"
   // rad.value = ""
   // rad.required = true;
   // rad.placeholder = "Type your question here"
}
radio1.onclick = function(){
    text = document.createTextNode("Comment")
   var textarea = document.createElement("textarea")
   textarea.className = "form-control form-control-lg"
   textarea.name = "optional"
   textarea.rows = "3"
   textarea.id = "optional"
   textarea.value = ""
   textarea.required = true;
   textarea.placeholder = "Type your comment here"
   var div = document.getElementById("dynamic")
   div.innerHTML = ""
   label.innerHTML = ""
   label.appendChild(text)
   parentdiv.insertBefore(label,parentdiv.firstChild)
   div.appendChild(textarea)
   //  var rad = document.getElementById("exampleFormControlTextarea1")
   //  document.getElementById("inputEmail4").style.display = "none"
   //  document.getElementById("inputEmail4").required = false
   //  rad.style.display = "block"
   //  rad.value = ""
   //  rad.required = true;
   //  rad.placeholder = "Type your comment here"
 }
 radio2.onclick = function(){
   // <input type="text"  name = "optional" class="form-control form-control-lg" id="inputEmail4">
   text = document.createTextNode("Hiring")
   
   var input = document.createElement('input');
   input.type = "text";
   input.name = "Hiring"
   input.id = "optional"
   input.className = "form-control form-control-lg"
   input.required = true
   input.value = ""
   input.placeholder = "Type your hiring rate"
   var div = document.getElementById("dynamic")
   div.innerHTML = ""
   label.innerHTML = ""
   label.appendChild(text)
   parentdiv.insertBefore(label,parentdiv.firstChild)
   //parentdiv.appendChild(label)
   div.appendChild(input)
   console.log("hi") 
   // var rad = document.getElementById("inputEmail4")
   //  document.getElementById("exampleFormControlTextarea1").style.display = "none"
   //  document.getElementById("exampleFormControlTextarea1").required = false;
   //  rad.style.display = "block"
   //  rad.required = true;
   //  rad.value = ""
   //  rad.placeholder = "Type your hiring rate"
 }
 

}