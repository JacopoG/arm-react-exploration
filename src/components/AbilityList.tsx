import { Ability } from '../armchar/classes/ability';

export function AbilityList (props:any) {
  console.log("AbilityList Component");

  let abilities:Ability[] = (props.abilities as Ability[]);

  if (abilities === undefined || abilities === null || Object.keys(abilities).length <= 0)
    return (<div>UNDEFINED AbilityList</div>);

  //alert(
  //  JSON.stringify(abilities)
  //);

  return(
    <div className="" >
      <table className="table-auto">
        <thead>
          <tr>
            <th className="border-2 border-violet-500" >Ability</th>
            <th className="border-2 border-violet-500" >Speciality</th>
            <th className="border-2 border-violet-500" >Score</th>
            <th className="border-2 border-violet-500" >Total XP</th>
            {/* <th>Remaining XP</th> */}
          </tr>
        </thead>
        <tbody className="border-2 border-violet-500" >
          { abilities.map((a:Ability) =>
              // {/* <tr key={ a.id } className="bg-sky-600 hover:bg-sky-700"> */}
              <tr key={ a.id }>
                <td className="text-left bg-violet-500 hover:bg-violet-600 active:bg-violet-700">{ a.label      && a.label      }</td>
                <td className="text-left bg-violet-500 hover:bg-violet-600 active:bg-violet-700">{ a.speciality && a.speciality }</td>
                <td className="text-right bg-violet-500 hover:bg-violet-600 active:bg-violet-700">{ a.score      && a.score      }</td>
                <td className="text-right bg-violet-500 hover:bg-violet-600 active:bg-violet-700">{ a.totalXP    && a.totalXP    }</td>
                {/* <td>{ a.xp         && a.xp    }</td> */}
              </tr>
            )
          }
        </tbody>
      </table>
    </div>

  );
}
