import { Advancement } from './classes/advancement';

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

  static getPregameAdvancements(): void {
    console.log("getPregameAdvancements");
    let get_adv = 'http://localhost:3000/pregameadvancement/cieran';
    fetch(get_adv)
      .then(response => response.json())
      .then(data => console.log("TODO", data));
  }

}
