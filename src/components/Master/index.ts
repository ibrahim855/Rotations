import GameObject from "../GameObject";
import { Color, Size } from "../types/generals";

class Master extends GameObject {
  constructor(canvas: HTMLCanvasElement, s: Size, c: Color) {
    super(
      {
        x: (canvas.width - s.w) / 2,
        y: (canvas.height - s.h) / 2,
      },
      s,
      c
    );
  }
}

export default Master;
