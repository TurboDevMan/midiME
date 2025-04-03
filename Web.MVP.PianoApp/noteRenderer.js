const DEFAULT_KEYBOARD_HEIGHT_RATIO = 0.3;
const DEBUG_FLAT_RENDER = true; // Toggle this to false to go back to animated mode

function generateKeyLayoutMap(canvasWidth) {
  const midiStart = 21; // A0
  const midiEnd = 108;  // C8
  const totalKeys = midiEnd - midiStart + 1;
  const laneWidth = canvasWidth / totalKeys;

  const layout = [];
  const keyMap = {};

  for (let midi = midiStart; midi <= midiEnd; midi++) {
    const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const note = noteNames[midi % 12];
    const octave = Math.floor(midi / 12) - 1;
    const fullNote = `${note}${octave}`;

    const x = (midi - midiStart) * laneWidth;
    const width = laneWidth;

    const keyObj = { note: fullNote, x, width };
    layout.push(keyObj);
    keyMap[fullNote] = keyObj;
  }

  return { layout, keyMap };
}

let keyLayout = [];
let keyMap = {};

export function initNoteRenderer(canvas) {
  const { layout, keyMap: generatedMap } = generateKeyLayoutMap(canvas.width);
  keyLayout = layout;
  keyMap = generatedMap;
  console.log("nR.js: 🎹 Key layout initialized with", layout.length, "keys.");
}

export function drawNotes(ctx, canvas, notes, currentTime) {
  console.log("nR.js: 🎯 drawNotes called at time:", currentTime.toFixed(3));
  console.log("nR.js: 🎼 Total notes to process:", notes.length);

  const KEYBOARD_HEIGHT = canvas.height * DEFAULT_KEYBOARD_HEIGHT_RATIO;
  const RUNWAY_HEIGHT = canvas.height - KEYBOARD_HEIGHT;

  for (const note of notes) {
    console.log("nR.js: 🧬 MIDI value:", note.midi);
    console.log("nR.js: 🎼 Attempting to draw note:", note.note);
    if (!note.note) {
      console.warn("nR.js: ⚠️ Skipping note with missing 'note' property:", note);
      continue;
    }

    if (note.start > currentTime + 5) continue;
    if (note.start + note.duration < currentTime) continue;

    const key = keyMap[note.note];
    if (!key) {
      console.warn("nR.js: ⚠️ No key found for note:", note.note);
      continue;
    }

    let y, height;
    if (DEBUG_FLAT_RENDER) {
      y = canvas.height * 0.7;
      height = 20;
    } else {
      const progress = (note.start - currentTime) * 100;
      y = progress + 10;
      height = note.duration * 100;
    }

    ctx.fillStyle = 'rgba(30, 144, 255, 0.8)';
    ctx.fillRect(key.x, y, key.width, height);

    console.log(`nR.js: 🎹 Drawing note: ${note.note} at x=${key.x.toFixed(1)}, y=${y.toFixed(1)}, height=${height.toFixed(1)}`);
  }
}
