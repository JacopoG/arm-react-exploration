import { Advancement } from '../armchar/classes/advancement';

import { AdvancementCard } from './AdvancementCard'

export function AdvancementList (props:any) {
  console.log("AdvancementList Component");

  let advs:Advancement[] = (props.advs as Advancement[]);

  if (advs === undefined || advs === null || Object.keys(advs).length <= 0)
    return (<div>UNDEFINED AdvancementList</div>);

  return(
    <div>
      <h2>Hugly Adv List</h2>
      <ul>
        { advs.map((a:Advancement) =>
            <li key={ a.id }>
              <h3>Advancement!!!</h3>
              { a && <AdvancementCard adv={ a }/> }
            </li>
          )
        }
      </ul>
    </div>
  );
}
