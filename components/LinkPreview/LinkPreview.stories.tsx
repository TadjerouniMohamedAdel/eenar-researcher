// LinkPreview.stories.js

import React from 'react';

import LinkPreview from './LinkPreview';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: LinkPreview,
    title: 'Components/LinkPreview',
    argTypes:{}
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <LinkPreview  {...args} />;
export const FirstStory = Template.bind({});
