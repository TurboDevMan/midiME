import { drawRunway, drawNotes, resizeCanvas } from './runway.js';
import { parseMidiFile } from './midiLoader.js';


export const appState = {
    currentMidiData: [],
    isPlaying: false,
    currentTime: 0,
    startTimestamp: null
  };

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function animate(timestamp) {
    if (!appState.startTimestamp) appState.startTimestamp = timestamp;
    appState.currentTime = (timestamp - appState.startTimestamp) / 1000;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRunway(ctx, canvas);
  drawNotes(ctx, canvas, appState.currentMidiData, appState.currentTime);

  // ✅ Optional debug panel (remove when not needed)
  const debug = document.getElementById('debugOutput');
  if (debug) {
    debug.textContent = JSON.stringify(appState, null, 2);
  }

  if (appState.isPlaying) {
    requestAnimationFrame(animate);
  }
}

function startPlayback() {
    appState.isPlaying = true;
    appState.startTimestamp = null; // reset timing
    requestAnimationFrame(animate);
  }
  
  function pausePlayback() {
    appState.isPlaying = false;
  }
  
  function handleFileInput(event) {
    const file = event.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = () => {
      const midiArrayBuffer = reader.result;
      const parsedNotes = parseMidiFile(midiArrayBuffer); // for now: dummy data
      appState.currentMidiData = parsedNotes;
      appState.startTimestamp = null;
      appState.currentTime = 0;
      startPlayback();
    };
    reader.readAsArrayBuffer(file);
  }
  
  window.addEventListener('load', () => {
    resizeCanvas(canvas);
  
    document.getElementById('midiFileInput').addEventListener('change', handleFileInput);
    document.getElementById('playBtn').addEventListener('click', startPlayback);
    document.getElementById('pauseBtn').addEventListener('click', pausePlayback);
  });
