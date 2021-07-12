// WorkInProgress.stories.js

import React from 'react';
import { WorkInProgressProps } from '../../utils/types/types';

import WorkInProgress from './WorkInProgress';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: WorkInProgress,
    title: 'Components/WorkInProgress',
    argTypes:{
        menu:{
            defaultValue:"الواجهة الرئيسية",
            description:"The title of the menu in developement",
            name:"menu"
        },

    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<WorkInProgressProps> = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><WorkInProgress menu={args.menu}/></div>;
export const FirstStory = Template.bind({});
