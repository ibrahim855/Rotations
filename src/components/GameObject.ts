import { Color, Position, Size } from "./types/generals";

class GameObject {
  public position: Position;
  protected size: Size;
  protected color: Color;

  constructor(p: Position, s: Size, c: Color) {
    this.position = p;
    this.size = s;
    this.color = c;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
  }

  update() {}
}

export default GameObject;
