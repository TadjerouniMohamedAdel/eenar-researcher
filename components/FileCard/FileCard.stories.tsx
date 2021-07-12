// FileCard.stories.js

import React from 'react';

import FileCard from './FileCard';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: FileCard,
    title: 'Components/FileCard',
    argTypes:{
        
    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <FileCard {...args} />;
export const FirstStory = Template.bind({});
