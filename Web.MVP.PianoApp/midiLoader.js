// 🎼 MIDI Loader: Parses MIDI files and maps notes to full note names
// Requires Tone.js MIDI parser to be loaded in index.html

// ─────────────────────────────────────────────────────────────
export const midiTrackInfo = []; // New export

// 🧠 Convert MIDI note number to a full note name (e.g., "C4", "D#4")
function getNoteName(midiNote) {
  const noteNames = [
    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
  ];
  const octave = Math.floor(midiNote / 12) - 1;
  const pitchClass = midiNote % 12;
  return noteNames[pitchClass] + octave;
}

const enharmonicMap = {
  "Db": "C#",
  "Eb": "D#",
  "Gb": "F#",
  "Ab": "G#",
  "Bb": "A#",
  "db": "C#",
  "eb": "D#",
  "gb": "F#",
  "ab": "G#",
  "bb": "A#"
};

function normalizeNoteName(name) {
  const match = name.match(/^([A-Ga-g])([b#]?)(\d)$/);
  if (!match) return name;

  let [_, base, accidental, octave] = match;
  base = base.toUpperCase();
  const raw = base + accidental;
  const normalized = enharmonicMap[raw] || raw.toUpperCase();
  return normalized + octave;
}

// ─────────────────────────────────────────────────────────────
// 🎹 Parse a MIDI file and return full range note data
export function parseMidiFile(arrayBuffer, trackIndex = 0) {
  const startTime = performance.now();

  try {
    const midi = new Midi(arrayBuffer);
    
    midiTrackInfo.length = 0; // Clear previous track info
    midi.tracks.forEach((track, index) => {
      const instrument = track.instrument.name || "Unknown";
      const noteCount = track.notes.length;
      const controlChanges = Object.keys(track.controlChanges || {}).length;
      let maxEndTime = 0;

      track.notes.forEach(note => {
        const noteEnd = note.time + note.duration;
        if (noteEnd > maxEndTime) maxEndTime = noteEnd;
      });

      midiTrackInfo.push({
        index,
        instrument,
        noteCount,
        controlChanges,
        duration: parseFloat(maxEndTime.toFixed(2))
      });
    });

    console.log("🧪 Track Summaries:");
    midiTrackInfo.forEach(summary => {
      console.log(`🧾 Track ${summary.index}: Instrument: ${summary.instrument}, Notes: ${summary.noteCount}, CCs: ${summary.controlChanges}, Duration: ${summary.duration}s`);
    });

    const notes = [];

    let debugCount = 0;
    let skippedNotes = 0;
    let controlChangeCount = 0;
    let totalTracks = midi.tracks.length;

    console.log(`🎛 MIDI file contains ${totalTracks} track(s).`);

    const track = midi.tracks[trackIndex];
    if (!track || !track.notes) {
      console.warn(`⚠️ Track ${trackIndex} is invalid or contains no notes.`);
      return [];
    }
    
    console.log(`🎷 Track ${trackIndex} instrument: ${track.instrument.name || "Unknown"}`);
    console.log(`▶️ Processing track ${trackIndex} with ${track.notes.length} notes...`);
    track.notes.forEach(note => {
      const fullNoteName = getNoteName(note.midi);
      const normalizedNote = normalizeNoteName(fullNoteName);

      if (!normalizedNote) {
        skippedNotes++;
        return;
      }

      if (debugCount < 100) {
        console.log(`🎹 MIDI: ${note.midi}, Note: ${normalizedNote}, Start: ${note.time.toFixed(3)}, End: ${(note.time + note.duration).toFixed(3)}`);
        debugCount++;
      }

      notes.push({
        midi: note.midi,
        note: normalizedNote,
        start: note.time,
        duration: note.duration
      });
    });

    const unsupportedTypes = track.controlChanges;
    if (unsupportedTypes && Object.keys(unsupportedTypes).length > 0) {
      console.log(`ℹ️ Track ${trackIndex} contains control changes:`, Object.keys(unsupportedTypes));
      controlChangeCount += Object.keys(unsupportedTypes).length;
    }

    const durationMs = performance.now() - startTime;

    console.log(`✅ Parsed ${notes.length} notes for runway.`);
    console.log(`📦 Skipped notes: ${skippedNotes}`);
    console.log(`🎚 Total unsupported control changes: ${controlChangeCount}`);
    console.log(`⏱ Parsing completed in ${durationMs.toFixed(2)} ms.`);
    console.log("🎧 Notes parsed from MIDI file:", notes);
    
    console.log("🧮 Track processing complete. Track selected:", trackIndex);

    return notes; // Re-enable playback rendering

  } catch (error) {
    console.error("❌ Failed to parse MIDI file:", error);
    return [];
  }
}
