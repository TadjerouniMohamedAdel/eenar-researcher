// AccountTab.stories.js

import React from 'react';

import AccountTab from './AccountTab';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: AccountTab,
    title: 'Components/AccountTab',
    argTypes:{}
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <AccountTab  {...args} />;
export const FirstStory = Template.bind({});
