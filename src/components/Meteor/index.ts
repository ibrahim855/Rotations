import GameObject from "../GameObject";
import Master from "../Master";
import { Color, Position, Size } from "../types/generals";

// interface MeteorInterface {
//   canvas: HTMLCanvasElement;
//   size: Size;
//   position: Position;
//   radius: number;
//   color: Color;
// }

type Angle = number;
type Radius = number;

class Meteor extends GameObject {
  public canvas: HTMLCanvasElement = null;
  private radius: Radius = 0.0;
  private theta: Angle = 0.0;
  static counter: number = 0;
  private masterRef: Master = null;
  private ratio: number = 0.0;
  private beta: number = 0.0;

  constructor(
    canvas: HTMLCanvasElement,
    p: Position,
    s: Size,
    c: Color,
    radius: Radius,
    theta: Angle,
    master: Master,
    ratio: number,
    beta: number
  ) {
    super(p, s, c);
    this.radius = radius;
    this.masterRef = master;
    this.theta = theta;
    this.ratio = ratio;
    this.beta = beta;
  }

  render(ctx: CanvasRenderingContext2D) {

    // ratios
    const aRatio = 1 * this.ratio;
    const bRation = 1 / this.ratio;

    ctx.fillStyle = this.color;
    let xPosition = +((this.radius * Math.cos(this.theta)) / aRatio);
    let yPosition = +((this.radius * Math.sin(this.theta)) / bRation);

    // apply a linear Transformation by multiplying to a rotation matrix

    const xTransformation =
      this.masterRef.position.x +
      (xPosition * Math.cos(this.beta) + yPosition * Math.sin(this.beta));
    const yTransformation =
      this.masterRef.position.y +
      -1 * xPosition * Math.sin(this.beta) +
      yPosition * Math.cos(this.beta);


    ctx.fillRect(xTransformation, yTransformation, this.size.w, this.size.h);

    this.theta += 0.0001 * this.radius;
  }
}

export default Meteor;
