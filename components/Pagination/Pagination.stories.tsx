// Pagination.stories.js

import React from 'react';
import { PaginationProps } from '../../utils/types/types';

import Pagination from './Pagination';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list

export default {
    component: Pagination,
    title: 'Components/Pagination',
    argTypes:{
        pages:{
            defaultValue:10,
            description:"Number of buttons (number pages)",
            name:"pages"
        },
        active:{
            defaultValue:3,
            description:"Page active",
            name:"active"
        },
        limit:{
            defaultValue:10,
            description:"Number of item per page",
            name:"limit"
        },
        onNum:{
            defaultValue:(page:number)=>{console.log("going to page number:");},
            description:"Function to handle click number",
            name:"onNum"
        },
        onNext:{
            defaultValue:()=>{console.log("going to page number:");},
            description:"Function to handle click next button",
            name:"onNext"
        },
        onPrev:{
            defaultValue:()=>{console.log("going to page number:");},
            description:"Function to handle click prev button",
            name:"onPrev"
        },
        

    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<PaginationProps> = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><Pagination {...args} /></div>;
export const FirstStory = Template.bind({});
