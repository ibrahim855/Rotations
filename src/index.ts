import Factory from "./components/Factory";
import Master from "./components/Master";
import Meteor from "./components/Meteor";
import ObjectFactory from "./components/utils";

import "./style/App.css";

class Game {
  private canvas: HTMLCanvasElement = null;
  private ctx: CanvasRenderingContext2D = null;
  private master: Master = null;
  private meteors: Meteor[] = [];

  constructor() {
    console.log("Program Initialized...");
  }

  Mount() {
    const Container = Factory.createElement("div", null, "canvasContainer");
    this.canvas = <HTMLCanvasElement>(
      Factory.createElement("canvas", null, "canvas")
    );
    this.canvas.height = window.innerHeight!;
    this.canvas.width = window.innerWidth!;
    this.canvas.classList.add("game-container");
    // this.canvas.classList.add("canvas");
    this.canvas.height = innerHeight;
    this.canvas.width = innerWidth;
    this.ctx = this.canvas.getContext("2d");
    Factory.mountElement(Container, this.canvas);
    Factory.mountElement(document.body, Container);
  }

  Init() {
    this.Mount();
    this.master = new Master(this.canvas, { w: 10, h: 10 }, "#e63946");
    for (let i = 0; i < 5000; i++) {
      const meteor = ObjectFactory.GetMeteor(this.canvas, this.master);

      this.meteors.push(meteor);
    }

    this.gameLoop();
  }

  gameLoop() {
    const step = () => {
      this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
      this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
      this.update();
      this.render();

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  update() {}

  render() {
    this.master.render(this.ctx);
    this.meteors.forEach(meteor => meteor.render(this.ctx));
  }
}

new Game().Init();
