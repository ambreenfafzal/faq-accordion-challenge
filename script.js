
var button = document.getElementsByClassName("question");
var i;

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    console.log(this)

   
    /* Toggle between hiding and showing the active panel */
    var answer = this.nextElementSibling;
    var arrow = this.childNodes[1];



        if (answer.style.display === "block") {
            answer.style.display = "none";
            this.style.fontWeight = "100";
            arrow.style.transform ="rotate(360deg)";
        
        } else {
            answer.style.display = "block";
            this.style.fontWeight = "700";
            arrow.style.transform ="rotate(180deg)";
        
        }
    
    
    
  });
}




/* #main-div {
      width: 20%;
        height: 100px;
       
        text-align: center;
        margin-top: 200px;
        border-radius: 25px;
        background-color: white;
    
    }
    #questions {
        
         width: 90%;
         text-align: left;
         margin-right: 10px;
         margin-top: -15%;
         height: 300px;
         overflow: auto; 
    
    }
    
    #answers {
        display: none;
        font-family: 'Kumbh Sans', sans-serif;
        font-size: 12px;
        color:hsl(240, 6%, 50%);
      width: 80%;
      
      
        
    }
    button {
        outline: none;
        cursor: pointer;
        text-align: left;
        padding: 0px;
        width: 90%;
        border: none;
        background-color: white;
        /* color:hsl(237, 33%, 13%); */
        font-size: 13px;
        transition: 0.4s;
        font-family: 'Kumbh Sans', sans-serif;
        
        }
    
        button:hover{
            color: black;
        }
    
    #arrow {
           width: 8px;
           
        }
    
    /* h1 {
            font-size: px;
            text-align: center;
            
        }
    hr {
            /* float: center; */
            /* text-align: center; */
            /* width: 95%; */
            /* border: solid 1px hsl(240, 15%, 94%); */
           
        } 
    /* #img-div{
            
            width: 80%;
            margin-left: 10%;
            height: 30%;
            overflow: hidden;
            
       } */
       /* #line-shadow {
        
        /* transform: scale(1, 1); */
        /* width:63%;
        height: 25%;
        position: absolute; */
        /* margin-right: 70%; */
        /* margin-left:-34%;
        margin-top: -28%; */
    
        /* margin-top: 50%;  */
    
    }  
    /* #woman {
        width: 50%;
         margin-left: -27%;
         margin-top: -22%;
         margin-bottom: -4%;
        position: absolute;
        /* z-index: 1; */
     
     }  
      
     /* #box {  
      
       margin-left: -37%;
       margin-top: -15%;
       margin-bottom: -10%;
       width: 30%;
       position: absolute;
       z-index: 1;
      
     } */
    
    footer {
        display: none;
       
        
    } 