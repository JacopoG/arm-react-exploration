import { WIPAdvancementList } from './WIPAdvancementList';

import '../index.css';
import { Story } from '@storybook/react';

export default {
  title: 'WIPAdvancementList',
  component: WIPAdvancementList
}


export const Plain: Story<null> = () => <WIPAdvancementList />;

export const Expanded: Story<any> = (args) => <WIPAdvancementList {...args} />;
Expanded.args = {
  expanded: true
}

