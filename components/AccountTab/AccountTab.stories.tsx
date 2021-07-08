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
const Template:Story = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><AccountTab  {...args} /></div>;
export const FirstStory = Template.bind({});
