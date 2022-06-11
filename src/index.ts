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
    // const Container = Factory.createElement("div", null, "canvasContainer");
    this.canvas = <HTMLCanvasElement>(
      Factory.createElement("canvas", null, "canvas")
    );
    // this.canvas.height = 800;
    // this.canvas.width = 800;
    this.canvas.classList.add("game-container");
    // this.canvas.classList.add("canvas");
    this.canvas.height = innerHeight;
    this.canvas.width = innerWidth;

    this.ctx = this.canvas.getContext("2d");
    // Factory.mountElement(Container, this.canvas);
    // Factory.mountElement(document.body, Container);
    Factory.mountElement(document.body, this.canvas);
  }

  Init() {
    this.Mount();
    this.master = new Master(this.canvas, { w: 10, h: 10 }, "#e63946");
    for (let i = 0; i < 5000; i++) {
      const meteor = ObjectFactory.GetMeteor(this.canvas, this.master);

      this.meteors.push(meteor);
    }
    this.report();
    this.gameLoop();
  }

  gameLoop() {
    const step = () => {
      this.ctx.fillStyle = "rgba(0,0,0,0.04)";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.update();
      this.render();

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  update() {}

  render() {
    this.master.render(this.ctx);
    this.meteors.forEach((meteor) => meteor.render(this.ctx));
  }

  report() {
    // if ("serviceWorker" in navigator) {
    //   navigator.serviceWorker.register("/service-worker.js").then((registration) => {
    //     console.log(registration.scope);
    //   });
    // }

    console.log(
      "%cgithub: https://github.com/ibrahim855",
      "color: whitesmoke; background-color:#e76f51; padding: 2em 1em;"
    );
    console.log(
      "%cCurrently working at: Inceptium SRLS",
      "color: whitesmoke; background-color:#e76f51; padding: 1em 1em;"
    );
  }
}

new Game().Init();
