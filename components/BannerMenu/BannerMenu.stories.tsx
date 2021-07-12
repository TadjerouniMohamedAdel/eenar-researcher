// BannerMenu.stories.js

import React from 'react';
import { BannerMenuProps } from '../../utils/types/types';

import BannerMenu from './BannerMenu';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: BannerMenu,
    title: 'Components/BannerMenu',
    argTypes:{
        title:{
            defaultValue:"الرسائل",
            description:"the title of banner menu",
            name:"title"
        },
        description:{
            defaultValue:"تفاعل بشكل أفضل مع زملائك الباحثين، أرسل ملفات، صور وروابط.",
            description:"text describing the menu content",
            name:"description"
        },
        imgSrc:{
            defaultValue:"/images/messages-banner.png",
            description:"illustration the menu content",
            name:"imgSrc"
        }

    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<BannerMenuProps> = (args) => <BannerMenu title={args.title} imgSrc={args.imgSrc} description={args.description} />;
export const FirstStory = Template.bind({});
