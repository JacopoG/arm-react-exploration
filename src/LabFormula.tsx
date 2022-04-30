import { Value } from './Value';

export function LabFormula(props:any) {
  return (
    <div className="flex">
        <Value label="Int"    value={ props.int    } />
      + <Value label="Theory" value={ props.theory } />
      + <Value label="Aura"   value={ props.aura   } />
      = <Value label="Total"  value={ props.int + props.theory + props.aura } />
    </div>
  );
}
