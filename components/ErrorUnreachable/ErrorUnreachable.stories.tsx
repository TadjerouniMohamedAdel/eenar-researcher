// ErrorUnreachable.stories.js

import React from 'react';

import ErrorUnreachable from './ErrorUnreachable';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: ErrorUnreachable,
    title: 'Components/ErrorUnreachable',
    argTypes:{}
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><ErrorUnreachable  {...args} /></div>;
export const FirstStory = Template.bind({});
