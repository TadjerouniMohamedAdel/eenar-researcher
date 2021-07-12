// Loading.stories.js

import React from 'react';

import Loading from './Loading';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: Loading,
    title: 'Components/Loading',
    argTypes:{}
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <Loading  {...args} />;
export const FirstStory = Template.bind({});
