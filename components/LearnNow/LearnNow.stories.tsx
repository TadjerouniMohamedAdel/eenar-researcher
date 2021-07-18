// LearnNow.stories.js

import React from 'react';

import LearnNow from './LearnNow';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: LearnNow,
    title: 'Components/LearnNow',
    argTypes:{}
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <LearnNow  {...args} />;
export const FirstStory = Template.bind({});
