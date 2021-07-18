// EmptyList.stories.js

import React from 'react';

import EmptyList from './EmptyList';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: EmptyList,
    title: 'Components/EmptyList',
    argTypes:{}
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <EmptyList  {...args} />;
export const FirstStory = Template.bind({});
