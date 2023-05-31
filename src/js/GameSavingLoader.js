// export default class GameSavingLoader {
//   static load() {
//     const data = read(); // возвращается Promise!
//     const value = json(data); // возвращается Promise!
//     return value;
//   }
// }
import GameSaving from './GameSaving';
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      return new GameSaving(JSON.parse(value));
    } catch (e) {
      throw new Error(e);
    }
  }
}
