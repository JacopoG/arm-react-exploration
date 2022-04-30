export enum TraitClass {
  Herbam,
}

export class Trait {
  addedXP?: number;
  totalXP?: number;
  description?: string;
  label?: string;
  speciality?: string;
  specialInfo?: string; // ad-hoc class in future?
  id?: string;
  class?: TraitClass;

  isSpecial(): boolean {
    return !(this.specialInfo === undefined);
  }

  // TODO // May miss fields from other GETs
  parse(x:any):void {
    if (x['arm:addedXP']) {
      this.addedXP = x['arm:addedXP'];
    }
    if (x['arm:hasTotalXP']) {
      this.totalXP = x['arm:hasTotalXP'];
    }
    if (x['arm:hasDescription']) {
      this.description = x['arm:hasDescription'];
    }
    if (x['arm:hasLabel']) {
      this.label = x['arm:hasLabel'];
    }
    if (x['arm:hasSpeciality']) {
      this.speciality = x['arm:hasSpeciality'];
    }
    if (x['arm:traitClass'] && x['arm:traitClass']['prefixedid']) {
      this.class = x['arm:traitClass']['prefixedid']; // TODO convert to enum TraitClass
    }
    if (x['arm:isSpecialTrait'] && x['arm:isSpecialTrait']['prefixedid']) {
      this.specialInfo = x['arm:isSpecialTrait']['prefixedid'];
    }
    if (x['arm:prefixedid']) {
      this.id = x['arm:prefixedid'];
    }
  }
}
