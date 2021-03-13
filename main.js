// Web speech API is developed for chrome, doesn't work in others yet
// check mozilla dev for more info
// it has to be a contious action to listen or speak for privacy issues
// not perfect and experimental technology
// can use IPA(library of speech sounds) to make sounds:
// instead of innerHTML you write a string "" -> find it on dictionary.com


// Create variables for HTML elements
// connect the js with HTML
var voice = document.getElementById("voice");
var placeholder = document.getElementById("placeholder");
var cake = document.getElementById("cake");
var pie = document.getElementById("pie");
var icecream = document.getElementById("icecream");

// Declare speech synthesis variable 
var synth = window.speechSynthesis;

// Given a word, speech synthesis will speak it 
function speak(word) {
    utterance = new SpeechSynthesisUtterance(word);
    utterance.pitch = 1.0; //voice tone
    utterance.rate = 1.1; //how fast it speaks
    synth.speak(utterance); //calling the build in function
}

// Speak cake and display it on page 
cake.onclick = function() {
    speak(cake.innerHTML);
    placeholder.innerHTML = "My favorite is: " + cake.innerHTML;
}

// Speak pie and display it on page 
pie.onclick = function() {
    speak(pie.innerHTML);
    placeholder.innerHTML = "My favorite is: " + pie.innerHTML;
}

// Speak ice cream and display it on page 
icecream.onclick = function() {
    speak(icecream.innerHTML);
    placeholder.innerHTML = "My favorite is: " + icecream.innerHTML;
}

// Declare recognition object 
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition();

// Adjust settings to recognize single English word
recognition.continuous = false; //takes in only one word
//to listen a whole sentence check it to true
recognition.interimResults = false; //doesn't take in half the word before finishing: butter vs butterfly
recognition.lang = 'en-US'; //for English, can choose others
recognition.maxAlternatives = 1; //if it was unclear, it will come up with an altenative

// Start recognition when you click on the "tell us your favorite" button
voice.onclick = function() {
    recognition.start(); //start voice recognition
}

// When word is recognized, speak it and display it on page
recognition.onresult = function(event) { //event: the result is received
    var favorite = event.results[0][0].transcript; 
    //results[0][0]: array of results that recognition returns [0] is the word we said, [0][0] is the alternative
    speak(favorite); //calling our speak function
    placeholder.innerHTML = "My favorite is: " + favorite; //update the placeholder text
}