const mediaElement = document.getElementById('#audio');

const context = new AudioContext();
const gainNode = new GainNode(context);
const delayNode = new DelayNode(context);
const audioSource = new MediaElementAudioSourceNode(context, {
   mediaElement,
});

