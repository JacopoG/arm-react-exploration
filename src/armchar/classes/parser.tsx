export interface Mapping { [key: string]: Array<string>; }

export class Parser {
  /**
   * Docs
   */
  static parseWithMapping(x:any, m:Mapping):any {
    let y:any = {};

    for (let l of Object.keys(m)) {
      let r:Array<string> = m[l];
      if ( r.length >= 1) {
        if ( x[r[0]] !== undefined ) {
          let xr:any;
          for (let e of r) {
            if (xr) {
              xr = xr[e];
            } else {
              xr = x[e];
            }
          }
          y[l] = xr;
        //} else {
        //  console.log("field not found in json:", r[0]);
        //  console.log("x", x);
        //  TODO add check if json has more fields than the Mapping
        }
      }
    }
    return y;
  }

}
