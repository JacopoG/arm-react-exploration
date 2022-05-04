import { Trait } from './trait'

export class Virtue extends Trait {
  // For now Virtue and Trait are practically the same

  static parse(x:any):Virtue {
    let t = Trait.parse(x);
    return t as Virtue;
  }

}
