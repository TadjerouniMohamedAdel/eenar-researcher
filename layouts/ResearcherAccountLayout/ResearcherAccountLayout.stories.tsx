// ResearcherAccountLayout.stories.js

import React from 'react';
import { LayoutProps, NotDefineYet } from '../../utils/types/types';

import ResearcherAccountLayout from './ResearcherAccountLayout';
import { Story, Meta } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';

//👇 This default export determines where your story goes in the story list
export default {
    component: ResearcherAccountLayout,
    decorators: [withNextRouter], // not necessary if defined in preview.js
    title: 'Layouts/ResearcherAccountLayout',
    argTypes:{
        children:{
            defaultValue:(<div><h1>hello world</h1></div>),
            description:"The ResearcherAccountLayout body content ",
            name:"children"
        }

    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<LayoutProps> = (args) => <ResearcherAccountLayout >{args.children}</ResearcherAccountLayout>;

export const FirstStory = Template.bind({});
