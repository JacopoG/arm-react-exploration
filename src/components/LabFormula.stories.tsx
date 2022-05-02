import { LabFormula } from './LabFormula';
import '../index.css';
import { Story } from '@storybook/react';

export default {
  title: 'LabFormula',
  component: LabFormula
}

export const Plain: Story<any> = (args) => <LabFormula {...args} />;
Plain.args = {
  int      : 2,
  theory   : 4,
  aura     : 8
}

