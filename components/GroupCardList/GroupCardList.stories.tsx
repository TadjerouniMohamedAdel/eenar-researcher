// GroupCardList.stories.js

import React from 'react';
import { GroupCardProps } from '../../utils/types/types';

import GroupCardList from './GroupCardList';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list
let group={"id":"3329189f-5b3c-4a18-af2d-400fa6fb3854","title":"محترف رياكت","slogan":"حنا لا نزبزب","privacy":"private","createdBy":"c8fd6213-da0e-40a9-8d00-6a62ab7a361f","image":null,"description":"","webSite":null,"createdAt":"2021-06-29T13:29:48.161Z","updatedAt":"2021-06-29T13:29:48.161Z"}

export default {
    component: GroupCardList,
    title: 'Components/GroupCardList',
    argTypes:{
        group:{
            defaultValue:group,
            description:"the group to show",
            name:"group"
        },

    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<GroupCardProps> = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><GroupCardList group={args.group}/></div>;
export const FirstStory = Template.bind({});
