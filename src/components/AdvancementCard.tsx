import { Advancement } from '../armchar/classes/advancement';
import { Trait } from '../armchar/classes/trait';

export function AdvancementCard (props:any) {
  console.log("AdvancementCard Component");

  let adv:Advancement = (props.adv as Advancement);

  if (adv === undefined) return (<div>UNDEFINED AdvancementCard</div>);

  return(
    <div>
      <h2>Hugly Adv</h2>
      { adv.year        && <p>year       : { adv.year        }</p> }
      { adv.season      && <p>season     : { adv.season      }</p> }
      { adv.awardXP     && <p>awardXP    : { adv.awardXP     }</p> }
      { adv.description && <p>description: { adv.description }</p> }
      { adv.index       && <p>index      : { adv.index       }</p> }
      { adv.type        && <p>type       : { adv.type        }</p> }
      { adv.id          && <p>id         : { adv.id          }</p> }
      <div>
        <p>Traits ONLY ONE:</p>
            <ul>
              { (adv.traits as any).map((t:Trait) =>
                <li key={ t.id }>
                  { t.addedXP     && <p>addedXP           : { t.addedXP     }</p> }
                  { t.totalXP     && <p>totalXP           : { t.totalXP     }</p> }
                  { t.description && <p>description       : { t.description }</p> }
                  { t.label       && <p>label             : { t.label       }</p> }
                  { t.speciality  && <p>speciality        : { t.speciality  }</p> }
                  { t.class       && <p>class             : { t.class       }</p> }
                  { t.id          && <p>id                : { t.id          }</p> }
                  { t.specialInfo && <p>special info      : { t.specialInfo }</p> }

                  {/*
                  { t.isSpecial() && <p>special info      : { t.specialInfo }</p> }
                  gives error
                  Uncaught TypeError: t.isSpecial is not a function
                  */}

                </li>
                ) }
            </ul>
      </div>
    </div>

  );
}
