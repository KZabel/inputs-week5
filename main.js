/*function displayInput() {
  var userInput = document.getElementById("formInput").value;
  document.getElementById('showInput').innerHTML = userInput;
}*/

$("#showInput").on("click", processForm);

function processForm(evt) {
  var val = $("#formInput").val();
}

/*$('#showInput').submit(function(event){
  var val = $("formInput").val();
  
  }
})*/