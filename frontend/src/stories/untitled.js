import React from 'react';

import { AddDeckForm } from './AddDeck';

export default {
  title: 'Example/AddDeck',
  component: AddDeck,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Add Deck',
  onClick : {console.log(deck_name)}

};