const FADE_IN_DUR = 2000;
const VERITAS_START_DELAY = 4000;
const VERITAS_START_TS = FADE_IN_DUR + VERITAS_START_DELAY;
const FLIP_DUR = 2500;
const FLIP_DELAY = 200;
const VERITAS_START_TO_FLIP_S_START_DUR = 6 * FLIP_DELAY;
const FLIP_S_START_TS = VERITAS_START_TS + VERITAS_START_TO_FLIP_S_START_DUR;
const END_DELAY = 1250;
const FADE_S_DUR = 10;
const FLIP_EASING = "cubicBezier(.75,.25,.25,.75)";

const fadeIn = {
  targets: `.mirrored-container`,
  opacity: [0, 1],
  duration: FADE_IN_DUR,
};

const moveV = {
  targets: `.mirrored-container span.vMover`,
  translateX: [0, "-.4em"],
  duration: FLIP_DUR, // so will finish as V finished flipping
  easing: FLIP_EASING,
};

const flipLetters = {
  targets: `.mirrored-container span:not(.space):not(.scale):not(.vMover)`,
  scaleX: -1,
  delay(el, i, l) {
    let fIndex = l - 1 - i;
    if (fIndex === l - 1) {
      fIndex -= 1;
    }
    return fIndex * FLIP_DELAY;
  },
  duration: FLIP_DUR,
  direction: "reverse",
  easing: FLIP_EASING,
};

const fadeOutUppercaseS = {
  targets: `.mirrored-container span.uppercase.scale`,
  opacity: [1, 0],
  duration: FADE_S_DUR,
};

const fadeInLowercaseS = {
  targets: `.mirrored-container span.lowercase.scale`,
  opacity: [0, 1],
  duration: FADE_S_DUR,
};

const timelineInit = (timeline: any) =>
  timeline
    .add(fadeIn)
    .add(moveV, VERITAS_START_TS)
    .add(flipLetters, VERITAS_START_TS)
    .add(fadeOutUppercaseS, FLIP_S_START_TS + FLIP_DUR / 2 - FADE_S_DUR)
    .add(fadeInLowercaseS, FLIP_S_START_TS + FLIP_DUR / 2)
    .add({
      targets: `.mirrored-container`,
      opacity: [1, 1],
      endDelay: END_DELAY,
    });

export default timelineInit;
