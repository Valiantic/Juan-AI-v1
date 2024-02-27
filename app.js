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
        speak("Kumusta! ")
    }
    else if(message.includes('who created you')){
        speak("I was created by an inspiring computer scientist. steven madali, a student taking a bachelors degree in information technology currently on cavite state university carmona campus")
    }
    else if(message.includes("open google")){
        window.open("https://google.com", " blank");
        speak("Opening Google...")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", " blank");
        speak("Opening Facebook...")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", " blank");
        speak("Opening Youtube...")
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }
    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I didn't quite understand or my knowledge about what you said is limited. but i try looking for" + message + "on google";
        speak(finalText);
    }
}
