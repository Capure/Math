import React, {useState} from 'react';
import { ButtonHolder } from './Components/ButtonHolder';
import { CanvasHolder } from './Components/CanvasHolder';

function App() {
  const [iCounter, setICounter] = useState(0);
  const [canvasController, setCanvasController] = useState<any>();
  const [drawingInterval, setDrawingInterval] = useState<NodeJS.Timeout>();

  const draw = (canvasController: any) => {
    let angle = 0;
    let R = 150;
    let r = 51;
    let i = 0;
    let ii = 0;

    let xPrevious = (R-r)*Math.cos(angle) + r*Math.cos((R-r)/r*angle) + window.innerWidth/2;
    let yPrevious = (R-r)*Math.sin(angle) + r*Math.sin((R-r)/r*angle) + (window.innerHeight - 150)/2;

    let xNext;
    let yNext;

    let hsl = 0;
    let hslIsGrowing = true;

    const getNextHslValue = (previousValue: number, isGrowing: boolean): [number, boolean] => {
      if (!(previousValue < 360)) {
        isGrowing = false;
      }
      if (previousValue === 1) {
        isGrowing = true;
      }
      previousValue = isGrowing ? previousValue + 1 : previousValue - 1;
      return [previousValue, isGrowing];
    }

    const localInterval = setInterval(() => {
      i++;
      setICounter(i);
      ii += 0.0005;
      [hsl, hslIsGrowing] = getNextHslValue(hsl, hslIsGrowing);
      angle = i*Math.PI/(180+ii);
      xNext = (R-r)*Math.cos(angle) + r*Math.cos((R-r)/r*angle) + window.innerWidth/2;
      yNext = (R-r)*Math.sin(angle) + r*Math.sin((R-r)/r*angle) + (window.innerHeight - 150)/2;
      canvasController.drawLine(xPrevious, yPrevious, xNext, yNext, `hsl(${hsl}, 90%, 61%)`);
      xPrevious = xNext;
      yPrevious = yNext;
    }, 0.1);

    setDrawingInterval(localInterval);
  }

  const setup = (canvasController: any) => {
    setCanvasController(canvasController);
    draw(canvasController);
  }

  return (
    <>
    <CanvasHolder onCanvasReady={setup} />
    <ButtonHolder i={iCounter} onRefresh={() => {
      if (canvasController && drawingInterval) {
        canvasController?.clearCanvas();
        clearInterval(drawingInterval);
        draw(canvasController);
      }
    }}/>
    </>
  );
}

export default App;
