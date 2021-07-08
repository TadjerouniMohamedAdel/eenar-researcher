// NoInternet.stories.js

import React from 'react';

import NoInternet from './NoInternet';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: NoInternet,
    title: 'Components/NoInternet',
    argTypes:{}
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><NoInternet  {...args} /></div>;
export const FirstStory = Template.bind({});
