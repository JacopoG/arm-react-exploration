import { Trait } from './trait'

export class Flaw extends Trait {
  // For now Flaw and Trait are practically the same

  static parse(x:any):Flaw {
    let t = Trait.parse(x);
    return t as Flaw;
  }

}
