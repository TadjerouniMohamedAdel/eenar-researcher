// NotificationCard.stories.js

import React from 'react';
import { NotificationCardProps } from '../../utils/types/types';

import NotificationCard from './NotificationCard';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list
let notification={
    id: 2,
    sender: "إلياس بوجلطية",
    action: "like",
    from: "منذ 4 دقيقة"
}

export default {
    component: NotificationCard,
    title: 'Components/NotificationCard',
    argTypes:{
        notification:{
            defaultValue:notification,
            description:"The notification to show",
            name:"notification"
        },

    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<NotificationCardProps> = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><NotificationCard notification={args.notification}/></div>;
export const FirstStory = Template.bind({});
