export let canvas: HTMLCanvasElement;
export let ctx: CanvasRenderingContext2D;

/** The game loop. */
function gameLoop() {
  // Resize the canvas when we resize the canvas.
  window.addEventListener('resize', () => {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  });

  // Draw Stuff
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Take it back now y'all.
  window.requestAnimationFrame(gameLoop);
}

/** Setups the canvas render cycle. */
export function doCanvas() {
  canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if(!canvas) {
    throw new Error('No canvas.');
  }
  ctx = canvas.getContext('2d') as any;
  if(!ctx) {
    throw new Error('No context.');
  }
  
  // Set the canvas to the whole screen.
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  
  // Start the game loop.
  window.requestAnimationFrame(gameLoop);
}
