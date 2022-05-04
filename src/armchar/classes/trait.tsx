import { Mapping, Parser } from './parser'

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
  class?: string; // TraitClass;

  isSpecial(): boolean {
    return !(this.specialInfo === undefined);
  }

  // TODO // May miss fields from other GETs
  static parse(x:any):Trait {
    let m:Mapping = {
      'addedXP'     : ['arm:addedXP'],
      'totalXP'     : ['arm:hasTotalXP'],
      'description' : ['arm:hasDescription'],
      'label'       : ['arm:hasLabel'],
      'speciality'  : ['arm:hasSpeciality'],
      'class'       : ['arm:traitClass','prefixedid'],
      'specialInfo' : ['arm:isSpecialTrait','prefixedid'],
      'id'          : ['arm:prefixedid'],
    }
    return Parser.parseWithMapping(x,m);
  }
}
