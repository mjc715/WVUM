$(document).ready(function(){

    console.log("ready")
  
  
  //showing current DJ
  
    $.getJSON("currentDJs.js", function(result){
      $("#currentDJ").html(result.currentDJ);
    });
    
  
  //creating the menu with the library
    var select = new SlimSelect({
      select: '#single',
      placeholder: 'Select show'
    });
  
    var obj = { "currentDJ":"" };
  
  //sending the selection after clicking submit
    $("#submit").click(function(){
      if (select.selected() === ""){
        alert("Please select the current show.")
      }
      else {
        obj.currentDJ = select.selected();
  
        $.post("https://us-central1-wvum-d6fb8.cloudfunctions.net/setDJ", obj, function(){
          $.getJSON("https://us-central1-wvum-d6fb8.cloudfunctions.net/getDJ", function(result){
            $("#currentDJ").html(result.currentDJ)
          });
        })
          .done(function(){
            console.log("success")
            var snack = document.getElementById("snackbar")
            snack.className = "show"
            setTimeout(function(){
              snack.className = snack.className.replace("show", "")
            }, 3000);
          })
          .fail(function(){
            var snack = document.getElementById("failbar")
            snack.className = "show"
            setTimeout(function(){
              snack.className = snack.className.replace("show", "")
            }, 3000);
          });
        
  
  
        
      };
    });
  
  //warning before closing (almost all browsers have removed support for a custom message)
    window.onbeforeunload = function() {
      return "DON'T CLOSE THIS PAGE!"
  }
  
  });
  