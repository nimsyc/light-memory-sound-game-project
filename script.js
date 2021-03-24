// Global Constants
const clueHoldTime = 550; // how long to hold each clue's light/sound
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback

// Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0;

function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  // start main game functions
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  
  // show the Start button and hide the Stop button
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Congratulations, You won! Your memory is amazing.");
  
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");  // +btn adds number
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0; // resets counter after each turn
  
  let delay = nextClueWaitTime; //set delay to initial wait time
  
  for(let i=0;i<=progress;i++) { // for each clue that is revealed so far, for each turn
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  } // if
  
  if (btn == pattern[guessCounter]) { // if guess is correct
    if (progress == guessCounter) { // if guesses == game progress or turn
      progress++; // progress goes up
      
      if (progress == pattern.length) { // if the game is done
        winGame(); 
      } else { // guess correct and there are more turns left
        playClueSequence();
      } // if
    } else { // if there's more than one guess needed
      guessCounter++;
    } // if
  } else { // if guess is incorrect
      loseGame();  
  } // if
} // guess

// Sound Synthesis Functions Provided
const freqMap = {
  1: 200.0,
  2: 300.0,
  3: 400.0,
  4: 500.0
}

function playTone(btn,len) {        // takes in button number and length (ms)
  o.frequency.value = freqMap[btn]  // plays tone for the time specified
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  
  setTimeout(function() { 
    stopTone()
  },len)
}

function startTone(btn) { // tone keeps playing until stopTone()
  if(!tonePlaying) {
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone() { // stops the tone
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()

g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)