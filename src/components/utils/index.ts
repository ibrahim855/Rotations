import Master from "../Master";
import Meteor from "../Meteor";

type Random = {
  (min: number, max: number): number;
  (max: number): number;
};

const randomize: Random = (min: number, max?: number) => {
  let maxx = min;

  if (max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return Math.floor(Math.random() * maxx);
};

type Sign = -1 | 1;

const CoinFlip = () => {
  const number = randomize(-1000.0, 1000.0);
  const sign: Sign = <Sign>(number / Math.abs(number));
  return sign;
};

class ObjectFactory {
  static GetMeteor(canvas: HTMLCanvasElement, master: Master) {
    CoinFlip();
    return new Meteor(
      canvas /* canvas ref */,
      {
        x: randomize(10, 20),
        y: randomize(10, 20),
      } /* position of the  */,
      {
        w: 1,
        h: 1,
      }, /* size of meteor */
      "#ffcdb2", // color
      randomize(20, 80), // radius between x and y
      randomize(0.0, 60.28), // initial angle theta between α and β
      master, // master ref since all meteors position is relative to this super massive meteor
      0.3, // ratio of the circonference
      randomize(0.0, 100.28), // angle by which each individual meteor plane is rotated (θ)
      CoinFlip(), // direction of the rotation 
    );
  }
}

export default ObjectFactory;
