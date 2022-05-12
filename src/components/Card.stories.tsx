import { Story } from '@storybook/react';
import { Card } from './Card';

import '../index.css';

export default {
  title: 'Card',
  component: Card
}


export const FewWords: Story<null> = () => <Card>This is a simple card.</Card>;

export const ManyWords: Story<null> = () => <Card>
  <p><strong>The card can contain arbitrary content.</strong></p>

  <p style={{maxWidth: "300px"}}>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </p>

</Card>;

export const WithKittens: Story<null> = () => <Card><img src="http://placekitten.com/300/300" /></Card>

