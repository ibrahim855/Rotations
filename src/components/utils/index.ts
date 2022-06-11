import Master from "../Master";
import Meteor from "../Meteor";

type Random = {
  (min: number, max: number): number
  (max: number): number
};

const randomize: Random = (min:number, max?:number) => {
  let maxx = min;

  if (max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return Math.floor(Math.random() * maxx);
};

class ObjectFactory {
  static GetMeteor(canvas: HTMLCanvasElement, master: Master) {
    return new Meteor(
      canvas,
      {
        x: randomize(10, 20),
        y: randomize(10, 20),
      },
      {
        w: 1,
        h: 1
      },
      "#ffcdb2",
      randomize(40, 80),
      randomize(0.0, 6.28),
      master,
      0.3,
      randomize(0.0, 100000.28)
    );
  }
}

export default ObjectFactory;
