// BadgesCard.stories.js

import React from 'react';

import BadgesCard from './BadgesCard';
import { Story, Meta } from '@storybook/react';
import { BadgesCardProps } from '../../utils/types/types';

//👇 This default export determines where your story goes in the story list

export default {
    component: BadgesCard,
    title: 'Components/BadgesCard',
    argTypes:{
        badges:{
            defaultValue:[{imageSrc:"/images/badge2.png"},{imageSrc:"/images/badge2.png"},{imageSrc:"/images/badge1.png"},{imageSrc:"/images/badge4.png"}],
            description:"List of badges earned"
        }
    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<BadgesCardProps> = (args) => <BadgesCard {...args} />;
export const FirstStory = Template.bind({});
