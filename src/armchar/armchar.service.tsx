import { Advancement } from './classes/advancement';
import { Virtue } from './classes/virtue';
import { Flaw } from './classes/flaw';

export class ArmcharService {

  static async getAdvancements(): Promise<Advancement[]> {
    console.log("getAdvancements");
    //let get_adv = 'http://localhost:3000/adv/cieran';
    //return fetch(get_adv)
    return fetch('/armchar/assets/adv_cieran.json')
      .then(response => response.json())
      .then(data => {
        //console.log(data);

        let advs: Advancement[] = [];
        for (let x of data) {
          advs.push(Advancement.parse(x) as Advancement);
        }

        //console.log("advs", advs);
        return advs;
      });
  }

  //static getPregameAdvancements(): void {
  //  let target = 'http://localhost:3000/pregameadvancement/cieran';
  //}

  static async getVirtues(year:number, season:string): Promise<Virtue[]> {
    console.log("getVirtues(", year, ",", season, ")");
    let target:string = '/armchar/assets/virtue_cieran_1217_summer.json';
    //let target:string =
    //  'http://localhost:3000/virtue/cieran/' +
    //  year.toString() +
    //  '/' +
    //  season.toString();
    return fetch(target)
      .then(response => response.json())
      .then(data => {
        //console.log("data", data);
        let virtues: Virtue[] = [];
        for (let x of data) {
          virtues.push(Virtue.parse(x) as Virtue);
        }
        console.log("virtues", virtues);
        return virtues;
      });
  }

  static async getFlaws(year:number, season:string): Promise<Flaw[]> {
    console.log("getFlaws(", year, ",", season, ")");
    let target:string = '/armchar/assets/flaw_cieran_1217_summer.json';
    //let target:string =
    //  'http://localhost:3000/flaw/cieran/' +
    //  year.toString() +
    //  '/' +
    //  season.toString();
    return fetch(target)
      .then(response => response.json())
      .then(data => {
        //console.log("data", data);
        let flaws: Flaw[] = [];
        for (let x of data) {
          flaws.push(Flaw.parse(x) as Flaw);
        }
        console.log("flaws", flaws);
        return flaws;
      });
  }

}
