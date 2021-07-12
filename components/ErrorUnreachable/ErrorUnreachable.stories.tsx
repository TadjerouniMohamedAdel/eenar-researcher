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
const Template:Story = (args) => <ErrorUnreachable  {...args} />;
export const FirstStory = Template.bind({});
