// BannerMenu.stories.js

import React from 'react';
import { BannerMenuProps } from '../../utils/types/types';

import BannerMenu from './BannerMenu';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list
let group={"id":"3329189f-5b3c-4a18-af2d-400fa6fb3854","title":"محترف رياكت","slogan":"حنا لا نزبزب","privacy":"private","createdBy":"c8fd6213-da0e-40a9-8d00-6a62ab7a361f","image":null,"description":"","webSite":null,"createdAt":"2021-06-29T13:29:48.161Z","updatedAt":"2021-06-29T13:29:48.161Z"}

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
const Template:Story<BannerMenuProps> = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><BannerMenu title={args.title} imgSrc={args.imgSrc} description={args.description} /></div>;
export const FirstStory = Template.bind({});
