// This expects Tone.js MIDI parser to already be loaded in index.html
// via: <script src="https://cdn.jsdelivr.net/npm/@tonejs/midi@2.0.27/build/Midi.min.js"></script>

// MIDI note numbers for white keys in one octave (C4 to B4)
const whiteKeyMap = [60, 62, 64, 65, 67, 69, 71]; // C D E F G A B

// If needed, you can extend this to support multiple octaves later
function pitchToLane(midiNote) {
  const pitchClass = midiNote % 12;
  const laneMap = {
    0: 0,  // C
    2: 1,  // D
    4: 2,  // E
    5: 3,  // F
    7: 4,  // G
    9: 5,  // A
    11: 6  // B
  };
  return laneMap.hasOwnProperty(pitchClass) ? laneMap[pitchClass] : -1;
}

export function parseMidiFile(arrayBuffer) {
  try {
    const midi = new Midi(arrayBuffer);

    const notes = [];

    midi.tracks.forEach((track, index) => {
      track.notes.forEach(note => {
        const lane = pitchToLane(note.midi);
        if (lane === -1) {
          console.log(`Skipping non-white-key note: ${note.name} (MIDI ${note.midi})`);
          return;
        }

        notes.push({
          lane: lane,
          start: note.time,
          duration: note.duration
        });
      });

      // Ignore modifiers (sustain, vibrato, modulation, etc.)
      const unsupportedTypes = track.controlChanges;
      if (unsupportedTypes && Object.keys(unsupportedTypes).length > 0) {
        console.log(`Track ${index} has unsupported control changes:`, Object.keys(unsupportedTypes));
      }
    });

    console.log(`✅ Parsed ${notes.length} notes for runway rendering.`);
    return notes;

  } catch (error) {
    console.error("❌ Error parsing MIDI file:", error);
    return [];
  }
}
