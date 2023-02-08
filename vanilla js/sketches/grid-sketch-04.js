const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')
const math = require('canvas-sketch-util/math')
const Tweakpane = require('tweakpane')

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

const sketch = () => {
  return ({ context, width, height, frame}) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cols = 10;
    const rows = 10;

    const numCells = cols * rows;

    const gridWidth = width * 0.8;
    const gridHeight = height * 0.8;

    const cellWidth = gridWidth / cols;
    const cellHeight = gridHeight / rows;

    const margx = (width -  gridWidth) * 0.5; 
    const margy = (height - gridHeight) * 0.5;

    for (let i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i/cols);

      const x = col * cellWidth;
      const y = row * cellHeight;
      const w = cellWidth * 0.8;
      const h = cellHeight * 0.8;

      const n = random.noise2D(x+frame*10,y, 0.001);
      const angle = n * Math.PI * 0.2;
      const scale = math.mapRange(n, -1,1,1,30);

      context.save();
      context.translate(x,y);
      context.translate(margx, margy);
      context.translate(cellWidth*0.5, cellHeight*0.5);
      context.rotate(angle);

      context.lineWidth = scale;

      context.beginPath();
      context.moveTo(w*-0.5,0);
      context.lineTo(w * 0.5,0);
      context.stroke();

      context.restore();
    }

  };
};

const createPane = () => {
  const pane = new Tweakpane.Pane();
};

createPane()

canvasSketch(sketch, settings);
