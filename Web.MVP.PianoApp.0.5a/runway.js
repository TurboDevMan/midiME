// Canvas runway layout constants
const KEYBOARD_HEIGHT = 100;


export function resizeCanvas(canvas) {
  canvas.width = 800;
  canvas.height = KEYBOARD_HEIGHT + canvas.height - KEYBOARD_HEIGHT;
}

export function drawRunway(ctx, canvas) {
  const KEYBOARD_HEIGHT = canvas.height * 0.45; // was 0.25
  const RUNWAY_HEIGHT = canvas.height - KEYBOARD_HEIGHT;
  const TOTAL_WHITE_KEYS = 7;
  const laneWidth = canvas.width / TOTAL_WHITE_KEYS;
  const keyboardY = RUNWAY_HEIGHT;

  // Grey runway background
  ctx.fillStyle = '#ddd';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw white keys
  for (let i = 0; i < TOTAL_WHITE_KEYS; i++) {
    const x = i * laneWidth;
    ctx.fillStyle = 'white';
    ctx.fillRect(x, keyboardY, laneWidth, KEYBOARD_HEIGHT);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x, keyboardY, laneWidth, KEYBOARD_HEIGHT);
  }

  // Draw black keys (relative to white key index positions)
  const blackKeyOffsets = [0.65, 1.65, 3.65, 4.65, 5.65];
  const blackKeyWidth = laneWidth * 0.6;
  const blackKeyHeight = KEYBOARD_HEIGHT * 0.65;

  for (let offset of blackKeyOffsets) {
    const x = offset * laneWidth - blackKeyWidth / 2;
    ctx.fillStyle = 'black';
    ctx.fillRect(x, keyboardY, blackKeyWidth, blackKeyHeight);
  }
}


const TOTAL_LANES = 12;
const SPEED = 100; // pixels per second

export function drawNotes(ctx, canvas, notes, currentTime) {
  const laneWidth = canvas.width / TOTAL_LANES;
  const runwayHeight = canvas.height;

  for (let note of notes) {
    const elapsed = currentTime - note.start;
    if (elapsed < 0 || elapsed > note.duration) continue;

    let progress = elapsed / note.duration;
    progress = Math.min(Math.max(progress, 0), 1);
    const top = progress * runwayHeight;
    const noteHeight = note.duration * SPEED;

    const renderBuffer = 10;
    if (top + noteHeight < -renderBuffer || top > runwayHeight + renderBuffer) return;

    const visibleHeight = Math.min(noteHeight, runwayHeight - top);
    const x = note.lane * laneWidth + laneWidth * 0.1;
    const width = laneWidth * 0.8;

    ctx.fillStyle = 'black';
    ctx.fillRect(x, top, width, visibleHeight);
  }
}
