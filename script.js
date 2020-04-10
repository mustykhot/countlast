//set variable
let number=0;

function addFunc() {
              //add one
              const final = ++number;

              //display result
              document.getElementById("count").innerHTML= final;

              //add colors
              if (final>0){
                document.getElementById("count").style.color = "green";
                
                
               }
               else if (final<0){
                 document.getElementById("count").style.color = "red";
                
               }
               else if (final==0){
                 document.getElementById("count").style.color = "black";
                
               }

                
        
}

function subFunc() {
                // subtract one
                const final = --number;

                //display result
                document.getElementById("count").innerHTML= final;

                //add colors
                if (final>0){
                document.getElementById("count").style.color = "green";
                
                
               }
               else if (final<0){
                 document.getElementById("count").style.color = "red";
                 
               }
               else if (final==0){
                 document.getElementById("count").style.color = "black";
                
               }

                
                

}
