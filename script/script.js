/* =========================================
JS to handle Modal. START
============================================*/
var modal = document.getElementById('myModal');
var close = document.getElementById("remove");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
['get-started', 'myBtn'].forEach(function (item) {
  if (document.getElementById(item)) {
    document.getElementById(item).onclick = function() {
      modal.style.display = "block";
    }
  }
});

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// Handle form options.
var choices = document.getElementsByClassName('signup-choice__item');

var form = {
  category: choices[0].getAttribute('data-value'),
}

// remove active class in all options.
function removeActiveClass() {
  for (var opt in choices) {
    choices[opt].className = 'signup-choice__item';
  }
}

// loop through all choices and add an event handler.
for (var opt in choices) {
  choices[opt].onclick = function (e) {
    removeActiveClass();
    e.currentTarget.className += ' active';
    form.category = e.currentTarget.getAttribute('data-value');
  }
}

function submitForm(e) {
  // body...
  form.name = document.getElementById('form-name').value;
  form.email = document.getElementById('form-email').value;
  form.optional_input = document.getElementById('form-optional').value;

  if (!form.name || !form.email || !form.category) {
    return false;
  } else {
    var url = 'http://ms-backend.mammoth.io/connect/';
    var req = new Request(url, { method: 'POST', body: JSON.stringify(form) });

    fetch(req, {mode: 'cors'}).then(function (res) {
      console.log(res, 'res');
      document.getElementById('form-wrapper').innerHTML = "<h4 className='success-msg'>Success</h4>";
    }).catch(function (error) {
      console.log(error, 'error');
      document.getElementById('form-wrapper').innerHTML = "<h4 className='error-msg'>error</h4>";
    })

    // var xmlHttp = new XMLHttpRequest();

    // xmlHttp.onreadystatechange = function() {
    //   if (xmlHttp.readyState == XMLHttpRequest.DONE ) {
    //      if (xmlHttp.status == 200) {
    //         console.log('okkk')
    //          document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
    //      }
    //      else if (xmlHttp.status == 400) {
    //         alert('There was an error 400');
    //      }
    //      else {
    //          alert('something else other than 200 was returned');
    //      }
    //   }
    // };

    // xmlHttp.open("POST", "http://ms-backend.mammoth.io/connect/");
    // xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // xmlHttp.send(JSON.stringify(form));
  }
  return false;
}

// document.getElementById('submit-form').onclick = function (e) {

//   // e.preventDefault();
//   var name = document.getElementById('form-name').value;
//   var email = document.getElementById('form-email').value;
//   var optional = document.getElementById('form-optional').value;
//   console.log(name, email, optional, form.selectedValue); 
//   e.preventDefault();
//   if (!name || !email) {
//     //send error
//     return;
//   }
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

/* ******** JS to handle Modal. END ************  */

/* =========================================
JS For Products Page
============================================*/

/* clearLines -
  Clears all displayed lines
*/
function clearLines() {
  var items = document.getElementsByClassName('curve-line')
  for (var i = items.length; i--;) {
    items[i].style.display = 'none';
  }
}

/* clearInfo -
  Clears all displayed info
*/
function clearInfo() {
  var items = document.getElementsByClassName('curve-item')
  for (var i = items.length; i--;) {
    items[i].style.display = 'none';
  }
}

/* showInfo -
  Takes in a id and clears corresponding info.
*/
function showInfo(id) {
  clearInfo();
  var infoId = id.replace('btn', 'info');
  infoId = infoId.replace('-mobile', '');

  document.getElementById(infoId).style.display = 'block';
}

/* showLine- Takes in an id e.g. 'store-btn',
  clears all the existing lines,
  shows corresponding info,
  sets lines for web and mobile view to display block,
  reason to change both (web, mobile) is that the line is not lost when browser is resized.
*/
function showLine(id) {
  clearLines();
  showInfo(id);
  var lineId = id.replace('btn', 'line');
  lineId = lineId.replace('-mobile', '');

  //make both mobile and web display block;
  document.getElementById(lineId).style.display = 'block';
  document.getElementById(lineId+'-mobile').style.display = 'block';
}

// bind all clickable buttons to show corresponding line and info.
['store-btn', 'retrieve-btn', 'prepare-btn', 'discover-btn', 'prepare-btn', 'analyze-btn', 'discover-btn', 'visualize-btn', 'communication-btn', 'store-btn-mobile', 'retrieve-btn-mobile', 'prepare-btn-mobile', 'discover-btn-mobile', 'prepare-btn-mobile', 'analyze-btn-mobile', 'discover-btn-mobile', 'visualize-btn-mobile', 'communication-btn-mobile',].forEach(function (item, i) {
  if(document.getElementById(item)) {
    document.getElementById(item).onclick = function (e) {
      e.preventDefault();
      showLine(item);       
    }
  }
});

/* ******** JS for Product Page. END ************  */
