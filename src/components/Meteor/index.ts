import GameObject from "../GameObject";
import Master from "../Master";
import { Color, Position, Size, Angle, Radius, Sign } from "../types/generals";


/**
 * TODO: 
 * Someone may declare a master that wants somehow to listen to user input
 * such as cursor movement
 * 
 */

class Meteor extends GameObject {
  /* static  */
  static counter: number = 0;


  /* private  */
  private masterRef: Master = null;
  private theta: Angle = 0.0;
  private radius: Radius = 0.0;
  private ratio: number = 0.0;
  private beta: number = 0.0;
  private sign: Sign = -1;
  private xTransformation: number = 0;
  private yTransformation: number = 0;


  /* public  */
  public canvas: HTMLCanvasElement = null;

  constructor(
    canvas: HTMLCanvasElement,
    p: Position,
    s: Size,
    c: string,
    radius: Radius,
    theta: Angle,
    master: Master,
    ratio: number,
    beta: number,
    sign: Sign
  ) {
    super(p, s, c);
    this.radius = radius;
    this.masterRef = master;
    this.theta = theta;
    this.ratio = ratio;
    this.beta = beta;
    this.sign = sign;
  }



  /* update the current meteor position */
  update(elapsed: number) {
    const aRatio = 1 * this.ratio;
    const bRation = 1 / this.ratio;

    // color of the meteor ( maybe this should me generated randomically ?? )
    
    let xPosition = (this.radius * Math.cos(this.theta)) / aRatio;
    let yPosition = (this.radius * Math.sin(this.theta)) / bRation;

    // applying a rotation to the plane with a linear tranformation 

    /*
      [
        cos β -sin β
        sin β cos β
      ]
    */


    // can we make better ?? 
    this.xTransformation =
      this.masterRef.position.x +
      (xPosition * Math.cos(this.beta) + yPosition * Math.sin(this.beta));

    this.yTransformation =
      this.masterRef.position.y +
      -1 * xPosition * Math.sin(this.beta) +
      yPosition * Math.cos(this.beta);
    
    // update theta 
    this.theta += this.sign * (0.0002 * this.radius);
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.xTransformation, this.yTransformation, this.size.w, this.size.h);
  }
}

export default Meteor;
