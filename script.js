var button = document.getElementsByClassName("question");
var i;

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    


    /* Toggle between hiding and showing the active panel */
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
        // this.style.fontWeight = "none";
        
    
    } else {
        answer.style.display = "block";
        // this.style.fontWeight = "700";
        
       
    }

  });
}


let buttons = document.getElementsByTagName('button')

for (button in buttons) {
    buttons[button].onclick = function() {
        console.log(this.style.color)
        
      
        

        
        // var yellowButton = document.querySelectorAll(".yellow")[0];
        // if (this.className == "green") {
        //     if (yellowButton) yellowButton.className = "green";
        //     this.className = "yellow";
        // }
    }
}