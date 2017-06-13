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
