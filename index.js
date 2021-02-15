

var but= document.querySelectorAll("button");

for(var i=0; i<but.length; i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function (){
      let buttonInnerHTML= this.innerHTML;
      console.log(buttonInnerHTML);

        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
          
              case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
          
              case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
          
              case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
          
              case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
          
              case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
          
              case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;

            default:
                break;
        }
    }
    );

};


// object practise

// var obj={
//     name:"vinay",
//     class:"btech",
//     age:26,
//     stream:"mechnical",
//     height:"173cm",
// };
// consturction function
// fucntion BellBoy (name,class,age)
// {
//     this.name=name;
//     this.class=class;
//     this.age=age;
// }
// var BellBoy1=newBellBoy(vinay,btech,26);