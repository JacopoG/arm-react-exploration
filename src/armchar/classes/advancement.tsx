import { Season } from '../utils/enums'
import { Trait } from './trait'

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

  parse(x:any):void {
    // ugly thing // refactor
    if (x['advancementcontents']) {
      let xac = x['advancementcontents'];
      let fields = {
        'season'      : 'arm:atSeason', // TODO convert to enum Season
        'awardXP'     : 'arm:awardsXP',
        'description' : 'arm:hasAdvancementDescription',
        'index'       : 'arm:hasAdvancementIndex',
        //             ['advtype']['prefixedid']
        'type'        :'arm:hasAdvancementTypeString',
        'year'        :'arm:inYear',
      }
      for (let l of Object.keys(fields)) {
        let r = (fields as any)[l];
        if (xac[r])
          (this as any)[l] = xac[r];
      }
    }
    //advancementid
    if (x['advancementid'] && x['advancementid']['prefixedid']) {
      this.id = x['advancementid']['prefixedid'];
    }
    // TODO
    if (x['advancementtraits']) {
      if (! this.traits) this.traits = [];
      for (let y of x['advancementtraits']) {
        let t = new Trait();
        t.parse(y);
        this.traits.push(t);
      }
    }
  }

}
