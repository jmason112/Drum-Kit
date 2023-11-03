 for(var i=0;i<document.querySelectorAll("button").length;i++)
 {
     document.querySelectorAll("button")[i].addEventListener("click",function() 
     {
         var buttonInnerText=this.innerHTML;
         switch(buttonInnerText)
         {
             case "w":
                 changeBackgroundAndPlaySound("crash", "crash", ".w")
                 break;
             case "a":
                 changeBackgroundAndPlaySound("kick", "kick-bass", ".a");
                 break;
             case "s":
                 changeBackgroundAndPlaySound("snare", "snare", ".s");
                 break;
             case "d":
                 changeBackgroundAndPlaySound("tom1", "tom-1", ".d");
                 break;
             case "j":
                 changeBackgroundAndPlaySound("tom2", "tom-2", ".j");
                 break;
             case "k":
                 changeBackgroundAndPlaySound("tom3", "tom-3", ".k");
                 break;
             case "l":
                 changeBackgroundAndPlaySound("tom4", "tom-4", ".l");
                 break;
             default:
                 console.log("default");

         }

     });
 }

function changeBackgroundAndPlaySound(image, sound, tag) {
    // Change the background image
    document.querySelector(tag).style.backgroundImage = "url('images/" + image + ".png')";

    // Play the sound
    var audio = new Audio('sounds/' + sound + ".mp3");
    audio.play();

    setTimeout(function() {
        document.querySelector(tag).style.backgroundImage = "url('')";
    }, 300);
}





for(var i=0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener('keypress',function(event){
        if(event.key === 'w' || event.key === 'W') {
            changeBackgroundAndPlaySound("crash", "crash", ".w");
          }
        else if(event.key === 'a' || event.key === 'A'){
            changeBackgroundAndPlaySound("kick", "kick-bass", ".a");
        }
        else if (event.key === 's' || event.key === 'S'){
            changeBackgroundAndPlaySound("snare", "snare", ".s");
        }
        else if (event.key === 'd' || event.key === 'D'){
            changeBackgroundAndPlaySound("tom1", "tom-1", ".d");
        }
        else if (event.key === 'j' || event.key === 'J'){
            changeBackgroundAndPlaySound("tom2", "tom-2", ".j");
        }
        else if (event.key === 'k' || event.key === 'K'){
            changeBackgroundAndPlaySound("tom3", "tom-3", ".k");
        }
        else if (event.key === 'l' || event.key === 'L'){
            changeBackgroundAndPlaySound("tom4", "tom-4", ".l");
        }

    })

}
