/** Setups the canvas render cycle. */
export function doCanvas() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if(!canvas) {
    throw new Error('No canvas.');
  }
  const ctx = canvas.getContext('2d');
  if(!ctx) {
    throw new Error('No context.');
  }
  
  // Set the canvas to the whole screen.
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  
  // Resize the canvas when we resize the canvas.
  window.addEventListener('resize', () => {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  });

  // Draw Stuff
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Take it back now tall y'all.
  window.requestAnimationFrame(doCanvas);
}
