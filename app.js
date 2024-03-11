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
        speak("Magandang Umaga Sainyo!")
    }

    else if(hour>=12 && hour<17){
        speak("Magandang Tanghali Sainyo!")
    }

    else{
        speak("Magandang Gabi Sainyo!")
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


// >> CONVERSATIONAL MODULES <<  !! NOTE ALL MESSAGE INCLUDES MUST BE SMALL LETTERS !!
function takeCommand(message){  
    if(message.includes("hello") || message.includes("hi") || message.includes("hoy") || message.includes("huy")){ // hi or hello
        const greetings = [
           "Hello kumusta, i'm juan. an artificial intelligence web-based assistant. how can i help you?",

           "Hi i'm juan, how can i be a help to you?",

           "Kumusta! i'm juan, what can i do to help you?",

           "Magandang araw! I'm juan. how can i help you?"
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
    else if(message.includes("kumusta")  || message.includes("kamusta") || message.includes("how are you")){
        const greetings = [
            "I'm doing good, thank you for asking. how about you? how are you doing lately?",

            "I'm doing great actually, i'm exploring the world wide web these days and i found " +
            "out some of the hidden wonders of filipino history. how about you? how are you doing?",

            "Thank you for asking, i'm fine actually. how about you? i hope you are doing great",

            "I'm doing very well. thanks for asking. how about you? how are you doing these days?"
           ];
           
           function getRandomIndex(array) {
             return Math.floor(Math.random() * array.length);
           }
           
           const randomIndex = getRandomIndex(greetings);
           
           speak(greetings[randomIndex])
    }
    else if(message.includes("i'm fine")  || message.includes("goods lang") || message.includes("okay lang") || message.includes("i'm good")){ 
        speak("Good to hear that! just a friendly reminder that never push yourself too far and have a rest!")
    }

    else if(message.includes("i'm tired")  || message.includes("pagod")){ 
        const greetings = [
            "It must been hard for you these days. I don't know what you are going through now. but i hope you will be okay, " +
            "just keep on climbing heights. but make sure to take a rest. you deserve it after all",

            "Thank you for having the courage to tell me. i appreciate it. it must been hard for you these days, " +
            "i wish i was physically there for you, to help you. whatever you are going through now. i hope you overcome it, " +
            "just keep on going, whatever the challenges you face. i'm always rooting on you in the sidelines.",

            "I don't know how it feels to be a human. despite being an Artificial intelligence we still lack somekind of ability, " +
            "to full understand human emotion. but as my creator like to say. if you feel like giving up , " +
            "think about why you started."
           ];
           
           function getRandomIndex(array) {
             return Math.floor(Math.random() * array.length);
           }
           
           const randomIndex = getRandomIndex(greetings);
           
           speak(greetings[randomIndex])
    }
    else if(message.includes("thank you")  || message.includes("salamat")){ 
        speak("Your welcome, it's been a pleasure to help you. let me know if i can do something else.")
    }
    else if(message.includes("who created you")  || message.includes("sino gumawa sayo")){ 
        speak("I was created by the brilliant aspiring computer scientist, steven gabriel madali, a second year student in cavite state university carmona campus, taking a bachelors degree in information technology.")
    }
    else if(message.includes("tell me about you")  || message.includes("pakilala mo sarili mo") || message.includes("introduce yourself")){ 
        speak("I'm JUAN, short for joint understanding assistant network. i was built by steven gabriel madali, an " +
        "aspiring filipino computer scientist. my main function is to help people to be familiarize with filipino " +
        "cultures as well help them in minimal task. i also have the ability of computer vision to scan sentient beings in a matter of seconds.")
    }
    else if(message.includes("tell me about you")  || message.includes("pakilala mo sarili mo") || message.includes("introduce yourself")){ 
        speak("I'm JUAN, short for joint understanding assistant network. i was built by steven gabriel madali, an " +
        "aspiring filipino computer scientist. my main function is to help people to be familiarize with filipino " +
        "cultures as well help them in minimal task. i also have the ability of computer vision to scan sentient beings in a matter of seconds.")
    }
    else if(message.includes("tell me a joke")  || message.includes("magbiro")){ 
        speak("alright, here's a funny one.")

        const greetings = [
            "Why is the calendar lucky? - Because it has many dates! ",

            "What does the doctor give a sick bird? - Tweetment!",

            "What do you get from a pig who knows karate? - Pork chop! ",

            "What do you call a fish that flys in the land? eeefish",

            "What do you call a wood that flies? Plywood",

            "How do you get a watermelon pregnant? You pakwan",

            "Why is salt bad for you? Because it's a sin.",

            "Why didn't the group of Filipinos enter the theater?  The sign on the door said pull",

            "What did the ocean say to the beach? Nothing, it just waved.",

            "What do you call a bear with no teeth? A gummy bear!"
           ];
           
           function getRandomIndex(array) {
             return Math.floor(Math.random() * array.length);
           }
           
           const randomIndex = getRandomIndex(greetings);
           
           speak(greetings[randomIndex])
    }

    // >> OPEN WEBSITES <<
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
        speak("Opening Instagram...")
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
    else if(message.includes("open chat gpt")){
        window.open("https://chat.openai.com", " blank");
        speak("Opening Chatgpt")
    }
    else if(message.includes("open lazada")){
        window.open("https://www.lazada.com.ph/", " blank");
        speak("Opening Lazada")
    }
    else if(message.includes("open pinterest")){
        window.open("https://www.pinterest.ph/", " blank");
        speak("Opening Pinterest")
    }
    else if(message.includes("open canva")){
        window.open("https://www.canva.com/", " blank");
        speak("Opening Canva")
    }


    // >> SEARCH THRU CHROME <<
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('sino')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
    }

    // >> SEARCH THRU WIKIPEDIA <<
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "Got it, i look through wikipedia and this is what i found about " + message;
        speak(finalText);
    }
    //weather
    else if(message.includes('weather') || message.includes('panahon')) {
            window.open('https://zoom.earth/maps/satellite/#view=11.48,124.06,5z/date=2024-02-28,16:00,+8');
            const finalText = "Ok, This is the weather forecast based on zoom.earth satellite view"; 
            speak(finalText);
    }

    // >> SEARCH THROUGH ERIC ABOUT LITERATED LITERATURE <<
    else if(message.includes('literature about')) {
        window.open(`https://eric.ed.gov/?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is the related literature i found about" + message + "in eric";
	    speak(finalText);
    }

    // >> SEARCH THROUGH ERIC ABOUT LITERATED STUDIES <<
     else if(message.includes('studies about')) {
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
            "You are seem to be happy, based on my scanning receptors. i hope your happy for the whole day",

            "You are neutral. looks like you are curios into something for now. maybe you are amaze of what i could do. dare to try my other features?",

            "You seem to be energetic today. i hope more good things happen for you!",

            "You look kinda tired. make sure to take a rest and treat yourself. you deserve it after all"
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

    // >> TIME <<
    else if(message.includes('time') || message.includes('oras')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    // >> DATE <<
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
        const finalText = "I'm sorry, i didn't quite understand that or my knowledge about what you said is still limited. but i try looking for" + message + "on google";
        speak(finalText);
    }
}
