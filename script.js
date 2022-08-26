function opendetails(evt, location) {
    var i, details, headline;
  
    details = document.getElementsByClassName("details");
    for (i = 0; i < details.length; i++) {
      details[i].style.display = "none";
    }
  
    headline = document.getElementsByClassName("headline");
    for (i = 0; i < headline.length; i++) {
      headline[i].className = headline[i].className.replace(" active", "");
    }
  
    document.getElementById(location).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // to do list script
var to_do_list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < to_do_list.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  to_do_list[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("list_input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list_ul").appendChild(li);
  }
  document.getElementById("list_input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}