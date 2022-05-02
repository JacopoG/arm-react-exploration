export interface Mapping { [key: string]: Array<string>; }

export class Parser {
  /**
   * Docs
   */
  static parseWithMapping(x:any, m:Mapping):any {
    let y:any = {};

    for (let l of Object.keys(m)) {
      let r:Array<string> = m[l];
      if ( r.length >= 1 && x[r[0]] ) {
        let xr:any;
        for (let e of r) {
          if (xr) {
            xr = xr[e];
          } else {
            xr = x[e];
          }
        }
        y[l] = xr;
      }
    }
    return y;
  }

}
