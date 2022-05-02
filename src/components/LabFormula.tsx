import { Value } from './Value';
import { useEffect } from 'react';

export function LabFormula(props:any) {

  useEffect(() => {
      console.log("LabFormula: example call on component creation only")
      }, []);

  return (

    <div className="flex">
        <Value label="Int"    value={ props.int    } />
      + <Value label="Theory" value={ props.theory } />
      + <Value label="Aura"   value={ props.aura   } />
      = <Value label="Total"  value={ props.int + props.theory + props.aura } />
    </div>
  );
}
