// PostWriter.stories.js

import React from 'react';

import PostWriter from './PostWriter';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: PostWriter,
    title: 'Components/PostWriter',
    argTypes:{}
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><PostWriter  {...args} /></div>;
export const FirstStory = Template.bind({});
