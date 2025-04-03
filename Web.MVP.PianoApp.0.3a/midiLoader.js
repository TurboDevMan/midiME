export function parseMidiFile(arrayBuffer) {
    console.log("Pretending to parse MIDI file...");
  
    // Dummy fallback note data
    return [
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
    ];
  }
  