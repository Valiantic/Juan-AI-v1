//main brain of juan
const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

function speak(text){
    //variable speechsynthesis
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 5;
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
    if(message.includes('hello') || message.includes('hi') || message.includes('hoy') || message.includes('huy')){ // hi or hello
        const greetings = [
           "hello kumusta, i'm juan. an artificial intelligence web-based assistant. how can i help you?",
           "hello, rin",
           "what's up"
          ];
          
          // Function to get a random index from the array
          function getRandomIndex(array) {
            return Math.floor(Math.random() * array.length);
          }
          
          // Get a random sentence index
          const randomIndex = getRandomIndex(greetings);
          
          // Print the randomly chosen sentence
        //   console.log(sentences[randomIndex]);
          speak(greetings[randomIndex])
    }
    else if(message.includes("i'm fine")  || message.includes('ok lang') || message.includes('okay lang')){ // ok lang
        speak("Good to hear that! just a friendly reminder that never push yourself too far and have a rest!")
    }
    else if(message.includes("kumusta")  || message.includes('kamusta')){ // kumusta
        speak("Thank you for asking. I'm fine as wine, i'm exploring the internet domain these days. how about you? how's life lately?")
    }
    else if(message.includes("tired")  || message.includes('pagod')){ // pagod nako
        const sentences = [
            "It's okay to feel tired. Everyone experiences it sometimes. Take a moment to rest and recharge",
            "Think about the progress you've already made. Remember how far you've come.",
            "Feeling overwhelmed can be draining. Divide your work into smaller, manageable steps, and tackle them one at a time.",
            "Every accomplishment, no matter how small, is worth celebrating. Acknowledge your progress and reward yourself for your efforts",
            "A well-rested and cared-for body and mind are essential for staying motivated. Make sure to get enough sleep, eat healthy foods, and engage in activities that bring you joy."
          ];
          
          // Function to get a random index from the array
          function getRandomIndex(array) {
            return Math.floor(Math.random() * array.length);
          }
          
          // Get a random sentence index
          const randomIndex = getRandomIndex(sentences);
          
          // Print the randomly chosen sentence
        //   console.log(sentences[randomIndex]);
          speak(sentences[randomIndex])
    }
    else if(message.includes('who created you')){ // who created you?
        speak("I was created by an inspiring computer scientist. steven madali, a student taking a bachelors degree in information technology currently on cavite state university carmona campus")
    }
    // open websites
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
    else if(message.includes("open instagram")){
        window.open("https://instagram.com", " blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open meet")){
        window.open("https://meet.google.com", " blank");
        speak("Opening Google meet")
    }
    else if(message.includes("open discord")){
        window.open("https://discord.com/channels/@me", " blank");
        speak("Opening Discord")
    }
    else if(message.includes("open twitter")){
        window.open("https://twitter.com/home", " blank");
        speak("Opening Twitter")
    }
    else if(message.includes("open g class")){
        window.open("https://classroom.google.com", " blank");
        speak("Opening Google classroom")
    }
    // search through google
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
    }
    // search through wikipedia
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }
    //weather
    else if(message.includes('weather') || message.includes('panahon')) {
            window.open('https://zoom.earth/maps/satellite/#view=11.48,124.06,5z/date=2024-02-28,16:00,+8');
            const finalText = "Ok, This is the weather forecast based on zoom.earth satellite view"; 
            speak(finalText);
    }
    // search through eric about related literature
    else if(message.includes('related literature about') || message.includes('rrl about')) {
        window.open(`https://eric.ed.gov/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is the related literature i found about" + message + "in eric";
	    speak(finalText);
    }
    // search through eric about related studies
     else if(message.includes('related studies about') || message.includes('rrs about')) {
        window.open(`https://eric.ed.gov/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is the related studies i found about" + message + "in eric"; 
	    speak(finalText);
    }

    // scan me 
    else if(message.includes('scan me')) {
        window.open('/scan.html' , '_blank');
        const finalText = "scanning"; 
	    setTimeout(speak(finalText), 7000);
        speak("Scan complete")

        const sentences = [
            "You are happy",
            "You are sad",
            "You are angry",
            "You are neutral"
          ];
          
          // Function to get a random index from the array
          function getRandomIndex(array) {
            return Math.floor(Math.random() * array.length);
          }
          
          // Get a random sentence index
          const randomIndex = getRandomIndex(sentences);
          
        // Print the randomly chosen sentence
        //   console.log(sentences[randomIndex]);
        //   speak(sentences[randomIndex])
          setTimeout( speak(sentences[randomIndex]), 4000)
    }

    // time 
    else if(message.includes('time') || message.includes('oras')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    //date
    else if(message.includes('date') || message.includes('petsa')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    //open apps
    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    // unknown command
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I'm sorry, i didn't quite understand that or my knowledge about what you said is limited. but i try looking for" + message + "on google";
        speak(finalText);
    }
}
