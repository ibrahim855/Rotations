import Master from "../Master";
import Meteor from "../Meteor";

/**
 * simple procedure for pseudo random color generator
 * took in the CSS Tricks website :)
 */

 function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


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
        w: 2,
        h: 2,
      }, /* size of meteor */
      getRandomColor(), // color
      randomize(20, 50), // radius between x and y
      randomize(0.0, 60.28), // initial angle theta between α and β
      master, // master ref since all meteors position is relative to this super massive meteor
      0.3, // ratio of the circonference
      randomize(0.0, 1000.28), // angle by which each individual meteor plane is rotated (θ)
      CoinFlip(), // direction of the rotation 
    );
  }
}

export default ObjectFactory;
