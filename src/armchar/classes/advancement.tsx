import { Season } from '../utils/enums'
import { Trait } from './trait'
import { Mapping, Parser } from './parser'

export enum AdvancementType {
  Reading,
}

export class Advancement {
  year?: number;
  season?: Season;
  awardXP?: number;
  description?: string;
  index?: 100;
  type?: AdvancementType; // maybe adv_type?
  traits?: Trait[];
  id?: string;

  static parse(x:any):Advancement {
    let m:Mapping = {
        'season'      : ['advancementcontents', 'arm:atSeason'],
        'awardXP'     : ['advancementcontents', 'arm:awardsXP'],
        'description' : ['advancementcontents', 'arm:hasAdvancementDescription'],
        'index'       : ['advancementcontents', 'arm:hasAdvancementIndex'],
        //'type'      : ['advancementcontents', 'prefixedid', 'arm:hasAdvancementType'] // necessary?
        'type'        : ['advancementcontents', 'arm:hasAdvancementTypeString'],
        'year'        : ['advancementcontents', 'arm:inYear'],

        'id'        : ['advancementid', 'prefixedid'],
        // traits as a list // TODO
    }
    let tmp:Advancement = Parser.parseWithMapping(x,m);

    if (x['advancementtraits']) {
      if (! tmp.traits) tmp.traits = [];
      for (let y of x['advancementtraits']) {
        tmp.traits.push(Trait.parse(y));
      }
    }

    //console.log("tmp", tmp);
    
    return tmp;
  }

}
