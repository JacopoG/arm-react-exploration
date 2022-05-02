import { AdvancementCard } from './AdvancementCard';

//import { AdvancementType } from '../armchar/classes/advancement'
//import { Trait, TraitClass } from '../armchar/classes/trait'
//import { Season } from '../armchar/utils/enums'

import '../index.css';
import { Story } from '@storybook/react';

export default {
  title: 'AdvancementCard',
  component: AdvancementCard
}

export const AllIn: Story<any> = (args) => <AdvancementCard {...args} />;
AllIn.args = {
  adv: {
    year       : 1217,
    season     : "Autumn", // Season.Autumn
    awardXP    : 17,
    description: "A nice description",
    index      : 100,
    type       : "Reading", // AdvancementType.Reading
    id         : "identity",
    traits: [
      {
        addedXP    : 17,
        totalXP    : 17,
        description: "A nice description",
        label      : "Label",
        speciality : "speciality",
        specialInfo: "Special Info",
        class      : "Herbam Class", // TraitClass.Herbam
      },
    ],
  }
}

