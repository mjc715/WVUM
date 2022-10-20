
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
  
        $.post("currentDJS.js", obj)
          .done(function(msg){
            console.log(msg);
            $.getJSON("currentDJs.js", function(result){
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

// document.addEventListener('load', () => {
//     const params = (new URL(document.location)).searchParams;
//     const djName = params.get('submit');
//     document.getElementById('currentDJ').innerHTML = djName;
//     window.setInterval(function () {
//         const params = (new URL("https://www.wvum.org/djs")).searchParams;
//         const djName = params.get('submit');
//         document.getElementById('demo').innerHTML = djName;
//     }, refreshMins * msPerMin);
    
//   });
  