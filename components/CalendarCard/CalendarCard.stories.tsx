// CalendarCard.stories.js

import React from 'react';

import CalendarCard from './CalendarCard';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: CalendarCard,
    title: 'Components/CalendarCard',
    argTypes:{
        
    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story = (args) => <CalendarCard {...args} />;
export const FirstStory = Template.bind({});
