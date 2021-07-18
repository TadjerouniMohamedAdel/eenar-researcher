// MyHead.stories.js

import React from 'react';

import MyHead from './MyHead';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: MyHead,
    title: 'Components/MyHead',
    argTypes:{
        title:{
            defaultValue:"Home",
            description:"Value of meta tag title"
        }
    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <></>;
export const FirstStory = Template.bind({});
