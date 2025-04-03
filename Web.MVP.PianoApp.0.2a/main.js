import { drawRunway, drawNotes, resizeCanvas } from './runway.js';

// ✅ STEP 2 — App-wide shared state
export const appState = {
  currentMidiData: [ // dummy data for now — replace later with real MIDI
    { lane: 0, start: 0.0, duration: 2.0 },
    { lane: 2, start: 0.0, duration: 2.0 },
    { lane: 1, start: 2.0, duration: 2.5 },
    { lane: 3, start: 2.0, duration: 1.5 },
    { lane: 4, start: 4.0, duration: 1.5 },
    { lane: 5, start: 4.0, duration: 2.0 },
    { lane: 6, start: 4.0, duration: 2.5 },
    { lane: 0, start: 6.0, duration: 1.0 },
    { lane: 3, start: 6.2, duration: 1.6 },
    { lane: 4, start: 6.5, duration: 2.0 }
  ],
  isPlaying: true,
  currentTime: 0,
  startTimestamp: null
};

// ✅ STEP 2 — Setup canvas references
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// ✅ STEP 2 — Animation loop
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

// ✅ STEP 2 — Init on page load
window.addEventListener('load', () => {
  resizeCanvas(canvas);
  requestAnimationFrame(animate);
});
