import { AbilityList } from './AbilityList';

// import { Ability } from '../armchar/classes/ability'

//import '../index.css';
import { Story } from '@storybook/react';

export default {
  title    : 'AbilityList',
  component:  AbilityList
}

// hugly thing
let abilities = [
  {"totalXP":30,"xp":0,"label":"Bows","score":3,"speciality":"Longbow","class":"armr:bows","specialInfo":"arm:XPTrait","id":"_:charsheet9"},{"totalXP":5,"xp":0,"label":"Bargain","score":1,"class":"armr:bargain","specialInfo":"arm:XPTrait","id":"_:charsheet8"},{"totalXP":15,"xp":0,"label":"Awareness","score":2,"speciality":"searching","class":"armr:awareness","specialInfo":"arm:XPTrait","id":"_:charsheet7"},{"totalXP":5,"xp":0,"label":"Area Lore: Munster","score":1,"speciality":"Hiding places","class":"armr:arealore-munster","specialInfo":"arm:XPTrait","id":"_:charsheet5"},{"totalXP":5,"xp":0,"label":"Area Lore: Ireland","score":1,"speciality":"Legends","class":"armr:arealore-ireland","specialInfo":"arm:XPTrait","id":"_:charsheet4"},{"totalXP":5,"xp":0,"label":"Thrown Weapon","score":1,"speciality":"Dart","class":"armr:thrown","specialInfo":"arm:XPTrait","id":"_:charsheet35"},{"totalXP":5,"xp":0,"label":"Stealth","score":1,"speciality":"Hiding","class":"armr:stealth","specialInfo":"arm:XPTrait","id":"_:charsheet33"},{"totalXP":5,"xp":0,"description":"You are able to see through illusionary concealment and disguise, including invisibility, and can also see naturally invisible things such as spirits and the boundaries between regio levels. The Ease Factor to see through illusionary concealment is normally equal to 6 + the magnitude of the might of the creature responsible for the effect, or 6 + the magnitude of a Hermetic spell. In general, this Virtue allows you to see through Hermetic Imaginem concealment, but not other kinds. The Magic Ars Magica Fifth Edition Resistance, if any, of the concealed creature does not interfere with your Second Sight. If something is actually transformed, for example by a MuCo spell, you cannot determine the genuine form. The Ease Factor to see a naturally invisible thing is normally 9, and the Ease Factor for seeing regio levels is specified on page 189. All Second Sight rolls are Perception + Second Sight. Specialties: regiones, invisible things, illusory disguises, faeries, ghosts.  ","label":"Second Sight","score":1,"speciality":"Faerie Illusions","class":"armr:secondsightAb","specialInfo":"arm:XPTrait","id":"_:charsheet32"},{"totalXP":5,"xp":0,"label":"Penetration","score":1,"speciality":"Rego","class":"armr:penetration","specialInfo":"arm:XPTrait","id":"_:charsheet29"},{"totalXP":5,"xp":0,"description":"Protection from magic. This is a special ritual (not a ritual spell) that takes about two minutes to perform. It lets you add 5 times your Parma Magica score to your magic resistance until the next sunrise or sunset, whichever comes first. You may suppress your Parma Magica temporarily by concentrating; this is equivalent to sustaining a Concentration duration spell. (See page 82). Parma Magica does not require concentration while it is active.  You may also protect one other person for each point in Parma Magica, with their consent. You must touch each person to start the protection, and it lasts as long as at least one character can see the other. The magus may cancel the protection at will, at any distance.  While a magus is protecting others, his effective Parma Magica score is reduced by 3 points, both for himself and for the other people he is protecting. If the magus has a Parma Magica score of 3 or lower, his Parma Magica provides each character, including himself, with a Magic Resistance of 0. In the magus’s case, this is added to his Form resistance, and a magus protected by another magus’s Parma Magica may also add his Form resistance.  Parma Magica can only be learned by Gifted characters, although they learn it as a normal Arcane Ability, not a Supernatural Ability. It is only known by Hermetic magi, as the Order enforces the “Join or Die” choice rigorously on anyone who knows it, as well as declaring a Wizard’s March on the magus who taught it. Parma Magica is the last thing an apprentice learns, being taught the final key to the Ability after he swears the Oath. Specialties: protection from any specific Form. ","label":"Parma Magica","score":1,"speciality":"Mentem","class":"armr:parmamagica","specialInfo":"arm:XPTrait","id":"_:charsheet28"},{"totalXP":30,"xp":0,"description":"Knowledge of what magic is and how it works, used primarily in the laboratory. Magic Theory deals with the technical details of Hermetic magic; Magic Lore covers knowledge of magical things in general. Anyone can learn Magic Theory, if they have access to a teacher or book (normally represented by a Virtue), but it is little use to those without The Gift.  Specialties: inventing spells, enchanting items, a single Art. (Arcane) ","label":"Magic Theory","score":3,"speciality":"Spells","class":"armr:magictheory","specialInfo":"arm:XPTrait","id":"_:charsheet25"},{"totalXP":30,"xp":0,"label":"Dead Language: Latin","score":3,"speciality":"Hermetic Usage","class":"armr:latin","specialInfo":"arm:XPTrait","id":"_:charsheet24"},{"totalXP":0,"xp":0,"label":"Infernal Lore","score":0,"speciality":"Undead","class":"armr:infernallore","specialInfo":"arm:XPTrait","id":"_:charsheet22"},{"totalXP":5,"xp":0,"label":"Order of Hermes Lore","score":1,"speciality":"Hibernia","class":"armr:hermeslore","specialInfo":"arm:XPTrait","id":"_:charsheet19"},{"totalXP":5,"xp":0,"label":"Code of Hermes","score":1,"speciality":"Stonehenge","class":"armr:hermescode","specialInfo":"arm:XPTrait","id":"_:charsheet18"},{"totalXP":5,"xp":0,"label":"Folk Ken","score":1,"speciality":"Villagers","class":"armr:folkken","specialInfo":"arm:XPTrait","id":"_:charsheet16"},{"totalXP":30,"xp":0,"label":"Craft: Fletching","score":3,"class":"armr:craft-fletching","specialInfo":"arm:XPTrait","id":"_:charsheet14"},{"totalXP":30,"xp":0,"label":"Craft: Cooking","score":3,"class":"armr:craft-cooking","specialInfo":"arm:XPTrait","id":"_:charsheet13"},{"totalXP":5,"xp":0,"label":"Concentration","score":1,"speciality":"Spell Concentration","class":"armr:conc","specialInfo":"arm:XPTrait","id":"_:charsheet11"},{"totalXP":15,"xp":0,"label":"Brawl","score":2,"speciality":"Dodge","class":"armr:brawl","specialInfo":"arm:XPTrait","id":"_:charsheet10"},{"totalXP":75,"label":"Living Language: Gaelic","speciality":"Leinster","class":"armr:gaelic","specialInfo":"arm:XPTrait","id":"_:89"}
];

export const AllIn: Story<any> = (args) => <AbilityList {...args} />;
AllIn.args = {
  abilities : abilities,
}

