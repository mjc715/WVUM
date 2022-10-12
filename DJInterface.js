$(document).ready(function(){

    console.log("ready")
  
  
  //showing current DJ
  
    $.getJSON("https://us-central1-wvum-d6fb8.cloudfunctions.net/getDJ", function(result){
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
  
        $.post("https://us-central1-wvum-d6fb8.cloudfunctions.net/setDJ", obj)
          .done(function(msg){
            console.log(msg);
            $.getJSON("https://us-central1-wvum-d6fb8.cloudfunctions.net/getDJ", function(result){
            $("#currentDJ").html(result.currentDJ)
          })
          .fail(function(){
            console.log("failed");
          });
        
        var snack = document.getElementById("snackbar");
        snack.className = "show";
        setTimeout(function(){
          snack.className = snack.className.replace("show", "");
        }, 3000);
  
        
        });
      };
    });
  
  
      
  
    
  
  });
  