// MyNetwork.stories.js

import React from 'react';
import { MyNetworkProps } from '../../utils/types/types';

import MyNetwork from './MyNetwork';
import { Story, Meta } from '@storybook/react';
import { datausers } from '../../utils/fixtures/DevData';

//👇 This default export determines where your story goes in the story list
const users = datausers

export default {
    component: MyNetwork,
    title: 'Components/MyNetwork',
    argTypes:{
        users:{
            defaultValue:users,
            description:"the users list to show as suggest of friend ship",
            name:"grouserup"
        },

    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<MyNetworkProps> = (args) => <MyNetwork {...args}/>;
export const FirstStory = Template.bind({});
