// Navbar.stories.js

import React from 'react';

import Navbar from './Navbar';
import { withNextRouter } from "storybook-addon-next-router";

import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: Navbar,
    decorators: [withNextRouter], // not necessary if defined in preview.js
    title: 'Components/Navbar',
    argTypes:{}
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <Navbar  {...args} />;
export const FirstStory = Template.bind({});
