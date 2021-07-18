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
const Template:Story = (args) => <Error500  {...args} />;
export const FirstStory = Template.bind({});
