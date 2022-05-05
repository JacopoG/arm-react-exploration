import { Trait } from './trait'

export class Ability extends Trait {
  // For now Ability and Trait are practically the same

  static parse(x:any):Ability {
    let t = Trait.parse(x);
    return t as Ability;
  }

}
