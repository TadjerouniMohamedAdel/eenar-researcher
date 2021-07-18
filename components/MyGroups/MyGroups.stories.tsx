// MyGroups.stories.js

import React from 'react';
import { MyGroupsProps } from '../../utils/types/types';

import MyGroups from './MyGroups';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list
let groups=[
    {"id":"3329189f-5b3c-4a18-af2d-400fa6fb3854","title":"محترف رياكت","slogan":"حنا لا نزبزب","privacy":"private","createdBy":"c8fd6213-da0e-40a9-8d00-6a62ab7a361f","image":null,"description":"","webSite":null,"createdAt":"2021-06-29T13:29:48.161Z","updatedAt":"2021-06-29T13:29:48.161Z"},
    {"id":"3329189f-5b3c-4a18-af2d-400fa6fb3854","title":"محترف رياكت","slogan":"حنا لا نزبزب","privacy":"private","createdBy":"c8fd6213-da0e-40a9-8d00-6a62ab7a361f","image":null,"description":"","webSite":null,"createdAt":"2021-06-29T13:29:48.161Z","updatedAt":"2021-06-29T13:29:48.161Z"},
    {"id":"3329189f-5b3c-4a18-af2d-400fa6fb3854","title":"محترف رياكت","slogan":"حنا لا نزبزب","privacy":"private","createdBy":"c8fd6213-da0e-40a9-8d00-6a62ab7a361f","image":null,"description":"","webSite":null,"createdAt":"2021-06-29T13:29:48.161Z","updatedAt":"2021-06-29T13:29:48.161Z"},
    {"id":"3329189f-5b3c-4a18-af2d-400fa6fb3854","title":"محترف رياكت","slogan":"حنا لا نزبزب","privacy":"private","createdBy":"c8fd6213-da0e-40a9-8d00-6a62ab7a361f","image":null,"description":"","webSite":null,"createdAt":"2021-06-29T13:29:48.161Z","updatedAt":"2021-06-29T13:29:48.161Z"},
    {"id":"3329189f-5b3c-4a18-af2d-400fa6fb3854","title":"محترف رياكت","slogan":"حنا لا نزبزب","privacy":"private","createdBy":"c8fd6213-da0e-40a9-8d00-6a62ab7a361f","image":null,"description":"","webSite":null,"createdAt":"2021-06-29T13:29:48.161Z","updatedAt":"2021-06-29T13:29:48.161Z"},
]
export default {
    component: MyGroups,
    title: 'Components/MyGroups',
    argTypes:{
        isLoading:{
            defaultValue:false,
            description:"is loading data from the api",
            name:"isLoading",
        },
        groups:{
            defaultValue:groups,
            description:"the list of the 5 last group to show",
            name:"group"
        },

    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<MyGroupsProps> = (args) => <MyGroups isLoading={args.isLoading} groups={args.groups}/>;
export const FirstStory = Template.bind({});
