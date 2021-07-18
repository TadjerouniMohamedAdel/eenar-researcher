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
const Template:Story = (args) => <NoInternet  {...args} />;
export const FirstStory = Template.bind({});
