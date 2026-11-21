// Shared between the DOM scroll driver and the WebGL scene, read every frame without React re-renders.
export const lens = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  r: 64,
  // 0 = hidden, 1 = fully shown
  presence: 0,
};
