function preload(){

}

function setup(){

canvas = createCanvas(400 ,380);
video = createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video , 0 , 0 , 400 ,380);
}

function next_quote()
{
 var myArray =  ["Learn to be strong then you'll never be wrong" , "Be the light of your lamp, because none will be there to light it up when it blows" , "Burn your ego before it burns you" , "Be yourself , Think wisely , Make the right decision" , "If opportunity does'nt knock, build a door","Silence is golden" , "Life is a melodious song, sing it" , "Life is a adventure, seek it" , "Make it simple but significant" , "You are the artist of you life, dont give the paintbrush to someone else" , "Make failure key to success" , "Always be the key to open the door of success"];
 document.getElementById("quote_ar").innerHTML = random(myArray);
  
}

