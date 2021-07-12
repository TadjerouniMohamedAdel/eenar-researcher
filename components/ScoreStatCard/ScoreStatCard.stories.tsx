// ScoreStatCard.stories.js

import React from 'react';
import { ScoreStatCardProps } from '../../utils/types/types';

import ScoreStatCard from './ScoreStatCard';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list
let score={
    title: "المنشورات",
    unit: "%",
    value: 80,
    color: "orange-2",
    description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على",
    offset: {
      increase: true,
      value: 8.2
    }
}

export default {
    component: ScoreStatCard,
    title: 'Components/ScoreStatCard',
    argTypes:{
        score:{
            defaultValue:score,
            description:"The score to show",
            name:"score"
        }
    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<ScoreStatCardProps> = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><ScoreStatCard score={args.score}/></div>;
export const FirstStory = Template.bind({});
