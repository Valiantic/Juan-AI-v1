//main brain of juan
const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

function speak(text){
    //variable speechsynthesis
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak) //passing the speechsynthesis
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Magandang Umaga sainyo!")
    }
    if(hour>=0 && hour<12){                 // greetings 
        speak("Magandang Tanghali sainyo!")
    }
    if(hour>=0 && hour<12){
        speak("Magandang Gabi sainyo!")
    }
}

window.addEventListener('load', ()=>{
    speak("System booting complete. Juan is now online.");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;  //speech engine

const recongition = new SpeechRecognition();    //speech engine initialization

recongition.onresult = (event)=>{
    const currentIndex = event.resultIndex;     //passing of functions
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=> {            //click method
    content.textContent = "Listening..."
    recongition.start();
})

function takeCommand(message){  // conversational modules
    if(message.includes('hello') || message.includes('hi')){
        speak("Kumusta! I'm juan, An artificial intelligence virtual assistant. How can i help you?")
    }
    if(message.includes('who created you')){
        speak("I was created by an inspiring computer scientist. steven madali, a student taking a bachelors degree in information technology currently on cavite state university carmona campus")
    }
    else{
        speak("I didn't quite hear that, could you please repeat it?")
    }
}
