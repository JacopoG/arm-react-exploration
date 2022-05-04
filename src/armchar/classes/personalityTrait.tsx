import { Trait } from './trait'

export class PersonalityTrait extends Trait {
  // For now PersonalityTrait and Trait are practically the same

  static parse(x:any):PersonalityTrait {
    let t = Trait.parse(x);
    return t as PersonalityTrait;
  }

}
