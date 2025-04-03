// Canvas runway layout constants
const RUNWAY_HEIGHT = 300;
const KEYBOARD_HEIGHT = 100;
const SPEED = 80; // px/sec

const pianoImg = new Image();
pianoImg.src = 'assets/1_oct_keys.png';

export function resizeCanvas(canvas) {
  canvas.width = 800;
  canvas.height = RUNWAY_HEIGHT + KEYBOARD_HEIGHT;
}

export function drawRunway(ctx, canvas) {
  ctx.fillStyle = '#ddd';
  ctx.fillRect(0, 0, canvas.width, RUNWAY_HEIGHT);

  if (pianoImg.complete) {
    ctx.drawImage(pianoImg, 0, RUNWAY_HEIGHT, canvas.width, KEYBOARD_HEIGHT);
  } else {
    pianoImg.onload = () => {
      ctx.drawImage(pianoImg, 0, RUNWAY_HEIGHT, canvas.width, KEYBOARD_HEIGHT);
    };
  }
}

export function drawNotes(ctx, canvas, notes, currentTime) {
  const laneWidth = canvas.width / 7;

  for (let note of notes) {
    const elapsed = currentTime - note.start;
    if (elapsed < 0 || elapsed > note.duration) continue;

    const top = elapsed * SPEED;
    const height = note.duration * SPEED;
    if (top > RUNWAY_HEIGHT) continue;

    const visibleHeight = Math.min(height, RUNWAY_HEIGHT - top);
    const x = note.lane * laneWidth + 5;
    const width = laneWidth - 10;

    ctx.fillStyle = 'black';
    ctx.fillRect(x, top, width, visibleHeight);
  }
}