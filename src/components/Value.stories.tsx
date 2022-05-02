import { Value } from './Value';
import './index.css';
import { Story } from '@storybook/react';

export default {
  title: 'Value',
  component: Value
}

export const Plain: Story<any> = (args) => <Value { ...args} />
Plain.args = {
  value: 8
}

export const WithLabel: Story<any> = (args) => <Value { ...args } />
WithLabel.args = {
  value: 8,
  label: "Label"
}
