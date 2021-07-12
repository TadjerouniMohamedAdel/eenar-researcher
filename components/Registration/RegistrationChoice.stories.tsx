// RegistrationChoice.stories.js

import React from 'react';
import { RegistrationChoiceProps } from '../../utils/types/types';

import RegistrationChoice from './RegistrationChoice';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list
let choice={
    "img": '/animations/researcher.json',
    "title": "أريد نشر أبحاثي",
    "description": "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين",
    "type": "individual",
    "buttonLabel": "سجل كباحث",
    "link": "/registration/researcher",
}

export default {
    component: RegistrationChoice,
    title: 'Components/RegistrationChoice',
    argTypes:{
        choice:{
            defaultValue:choice,
            description:"The registration choice to show",
            name:"choice"
        }
    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<RegistrationChoiceProps> = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><RegistrationChoice choice={args.choice}/></div>;
export const FirstStory = Template.bind({});
