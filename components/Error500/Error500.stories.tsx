// Error500.stories.js

import React from 'react';

import Error500 from './Error500';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: Error500,
    title: 'Components/Error500',
    argTypes:{}
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><Error500  {...args} /></div>;
export const FirstStory = Template.bind({});
