import { parseMidiFile } from './midiLoader.js';

export const appState = {
  currentMidiData: [],
  isPlaying: false,
  currentTime: 0,
  startTimestamp: null,
  midiDuration: 0,
  availableTracks: [],
  selectedTrackIndex: null
};

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const playPauseBtn = document.getElementById('playPauseBtn');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const trackSelector = document.getElementById('trackSelector');
const trackInfo = document.getElementById('trackInfo');

if (!playPauseBtn || !rewindBtn || !forwardBtn || !progressText || !progressBar) {
  console.error("🚨 One or more UI elements are missing from the DOM.");
}
if (!trackSelector) {
  console.error("🚨 Track selector dropdown is missing from the DOM.");
}
if (!trackInfo) {
  console.error("🚨 Track info element is missing from the DOM.");
}

document.getElementById('midiFileInput').addEventListener('change', handleFileInput);
playPauseBtn.addEventListener('click', togglePlayback);
rewindBtn.addEventListener('click', rewindPlayback);
forwardBtn.addEventListener('click', forwardPlayback);
trackSelector.addEventListener('change', handleTrackSelection);

function animate(timestamp) {
  if (!appState.startTimestamp) appState.startTimestamp = timestamp;
  appState.currentTime = (timestamp - appState.startTimestamp) / 1000;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const note of appState.currentMidiData) {
    console.log(`🎹 MIDI: ${note.midi} | Note: ${note.note} | Start: ${note.start} | End: ${note.start + note.duration}`);
  }

  updateProgressUI();

  if (appState.currentTime >= appState.midiDuration) {
    appState.isPlaying = false;
    updatePlayButton();
    return;
  }

  if (appState.isPlaying) {
    requestAnimationFrame(animate);
  }
}

function updateProgressUI() {
  if (!progressText || !progressBar) return;

  const current = formatTime(appState.currentTime);
  const total = formatTime(appState.midiDuration);
  progressText.textContent = `${current} / ${total}`;

  const progressPercent = Math.min(appState.currentTime / appState.midiDuration, 1);
  progressBar.style.width = `${progressPercent * 100}%`;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${secs}`;
}

function handleTrackSelection(event) {
  const index = parseInt(event.target.value, 10);
  if (isNaN(index) || !appState.availableTracks[index]) return;
  if (appState.selectedTrackIndex === index) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  progressText.textContent = '0:00 / 0:00';
  progressBar.style.width = '0%';

  const selectedTrack = appState.availableTracks[index];
  appState.selectedTrackIndex = index;
  playPauseBtn.disabled = false;
  rewindBtn.disabled = false;
  forwardBtn.disabled = false;
  appState.currentMidiData = selectedTrack.notes;

  const midiValues = selectedTrack.notes.map(note => note.midi);
  const minMidi = Math.min(...midiValues);
  const maxMidi = Math.max(...midiValues);
  appState.midiDuration = Math.max(...selectedTrack.notes.map(n => n.start + n.duration));

  console.log(`🎷 Track ${index} instrument: ${selectedTrack.instrument}`);
  console.log(`▶️ Processing track ${index} with ${selectedTrack.notes.length} notes...`);
  console.log(`📊 MIDI Range → Min: ${minMidi}, Max: ${maxMidi}`);
  console.log(`⏱️ Duration: ${appState.midiDuration.toFixed(2)} seconds`);

  if (trackInfo) {
    trackInfo.innerText = `🎼 Track ${index}: ${selectedTrack.instrument} (${selectedTrack.notes.length} notes)`;
  }

  startPlayback();
}

function startPlayback() {
  if (!appState.currentMidiData.length) return;
  appState.isPlaying = true;
  appState.startTimestamp = performance.now() - appState.currentTime * 1000;
  updatePlayButton();
  requestAnimationFrame(animate);
}

function pausePlayback() {
  appState.isPlaying = false;
  updatePlayButton();
}

function togglePlayback() {
  if (appState.isPlaying) {
    pausePlayback();
  } else {
    startPlayback();
  }
}

function rewindPlayback() {
  appState.currentTime = Math.max(appState.currentTime - 10, 0);
  appState.startTimestamp = performance.now() - appState.currentTime * 1000;
  updateProgressUI();
}

function forwardPlayback() {
  appState.currentTime = Math.min(appState.currentTime + 10, appState.midiDuration);
  appState.startTimestamp = performance.now() - appState.currentTime * 1000;
  updateProgressUI();
}

function updatePlayButton() {
  playPauseBtn.textContent = appState.isPlaying ? 'Pause' : 'Play';
}

function handleFileInput(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const midiArrayBuffer = reader.result;
    try {
      const { tracks, duration } = parseMidiFile(midiArrayBuffer);
      if (!tracks || !Array.isArray(tracks)) {
        console.error("❌ Invalid MIDI data: tracks missing or not an array.");
        return;
      }

      appState.availableTracks = tracks;
      appState.midiDuration = duration;
      appState.startTimestamp = null;
      appState.currentTime = 0;
      appState.currentMidiData = [];
      appState.selectedTrackIndex = null;

      if (!trackSelector) {
        console.error("❌ Track selector not found in DOM.");
        return;
      }

      // Populate track selector
      trackSelector.innerHTML = '<option value="">-- Select a Track --</option>';
      if (Array.isArray(tracks)) {
        tracks.forEach((track, index) => {
          const option = document.createElement('option');
          option.value = index;
          option.textContent = `Track ${index} – ${track.instrument} (${track.notes.length} notes)`;
          trackSelector.appendChild(option);
        });
      }
      console.log("🎚 Track selector populated with options.");

      if (tracks.length === 1) {
        trackSelector.selectedIndex = 1;
        const changeEvent = new Event('change');
        trackSelector.dispatchEvent(changeEvent);
        console.log("✅ Only one track detected. Auto-selected.");
      }

      console.log(`🎛 MIDI file contains ${tracks.length} track(s).`);
    } catch (error) {
      console.error("❌ Error parsing MIDI file:", error);
    }
  };
  reader.readAsArrayBuffer(file);
}
