/********************************************************
 * 1. SETUP & CONSTANTS
 ********************************************************/
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// We'll leave the total canvas at 800x400.
// Reserve the bottom 100px for the piano keys.
const RUNWAY_HEIGHT = canvas.height - 100;

// Speed of notes moving down (px/sec)
const SPEED = 80;

// We'll define a start time when we begin animating
let startTimestamp = null;

/********************************************************
 * 2. LOAD PIANO IMAGE
 ********************************************************/
const pianoImg = new Image();
pianoImg.src = 'assets/1_oct_keys.png';

/********************************************************
 * 3. NOTE DATA
 *    (Multiple notes at once to prove concurrency)
 *    lanes = 0..6 => white keys (C, D, E, F, G, A, B)
 ********************************************************/
const notes = [
  // Two notes at once: C & E
  { lane: 0, start: 0.0, duration: 2.0 },  // C
  { lane: 2, start: 0.0, duration: 2.0 },  // E

  // Another pair: D & F
  { lane: 1, start: 2.0, duration: 2.5 },  // D
  { lane: 3, start: 2.0, duration: 1.5 },  // F

  // A chord of G, A, B
  { lane: 4, start: 4.0, duration: 1.5 },  // G
  { lane: 5, start: 4.0, duration: 2.0 },  // A
  { lane: 6, start: 4.0, duration: 2.5 },  // B

  // Another chord with offset starts
  { lane: 0, start: 6.0, duration: 1.0 },  // C
  { lane: 3, start: 6.2, duration: 1.6 },  // F
  { lane: 4, start: 6.5, duration: 2.0 },  // G
];

/********************************************************
 * 4. DRAWING THE NOTES
 ********************************************************/
function drawNote(note, currentTimeSec) {
  const laneWidth = canvas.width / 7;

  // How long since note started?
  const elapsed = currentTimeSec - note.start;

  // Skip if note not yet started or fully ended
  if (elapsed < 0 || elapsed > note.duration) return;

  // The top edge of the note moves downward from 0
  const noteTop = elapsed * SPEED;

  // The note’s height is proportional to its duration
  const noteHeight = note.duration * SPEED;

  // If the note is moving beyond the runway, clamp or skip
  // If the top is below the runway, it's no longer visible
  if (noteTop > RUNWAY_HEIGHT) return;

  // Possibly clamp the bottom if it extends into the keys
  const visibleHeight = Math.min(noteHeight, RUNWAY_HEIGHT - noteTop);
  if (visibleHeight <= 0) return;

  // Horizontal position
  const noteX = note.lane * laneWidth + 5;
  const noteWidth = laneWidth - 10;

  // Draw a black rectangle for the note
  ctx.fillStyle = 'black';
  ctx.fillRect(noteX, noteTop, noteWidth, visibleHeight);
}

/********************************************************
 * 5. MAIN ANIMATION LOOP
 ********************************************************/
function animate(timestamp) {
  if (!startTimestamp) startTimestamp = timestamp;

  const currentTimeSec = (timestamp - startTimestamp) / 1000;

  // Clear entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the runway background (gray or empty)
  // If you want a custom runway color, do so here:
  ctx.fillStyle = '#ddd';
  ctx.fillRect(0, 0, canvas.width, RUNWAY_HEIGHT);

  // Draw each note
  for (let i = 0; i < notes.length; i++) {
    drawNote(notes[i], currentTimeSec);
  }

  // Finally, draw the piano keys at the bottom
  // to cover anything that might spill over
  ctx.drawImage(pianoImg, 0, RUNWAY_HEIGHT, canvas.width, 100);

  requestAnimationFrame(animate);
}

// Start when the image loads
pianoImg.onload = () => {
  requestAnimationFrame(animate);
};