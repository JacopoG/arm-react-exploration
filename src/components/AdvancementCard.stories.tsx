import { AdvancementCard } from './AdvancementCard';

import { Advancement } from '../armchar/classes/advancement'
import { Trait } from '../armchar/classes/trait'

import '../index.css';
import { Story } from '@storybook/react';

export default {
  title: 'AdvancementCard',
  component: AdvancementCard
}

let fullTrait = {
  addedXP    : 17,
  totalXP    : 17,
  description: "A nice description",
  label      : "Label",
  speciality : "speciality",
  specialInfo: "Special Info",
  class      : "Herbam Class", // TraitClass.Herbam
};
let fullAdv:Advancement = {
  year       : 1217,
  season     : "Autumn", // Season.Autumn
  awardXP    : 17,
  description: "A nice description",
  index      : 100,
  type       : "Reading", // AdvancementType.Reading
  id         : "identity",
  traits: [ fullTrait as Trait ],
};

export const AllIn: Story<any> = (args) => <AdvancementCard {...args} />;
AllIn.args = {
  adv: fullAdv
}

