// Modal.stories.js

import React from 'react';
import { ModalProps, NotDefineYet } from '../../utils/types/types';

import Modal from './Modal';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list
export default {
    component: Modal,
    title: 'Components/Modal',
    argTypes:{
        visible:{
            defaultValue:false,
            description:"the visibility of the modal",
            name:"visible"
        },
        setVisible:{
            defaultValue:(visiblite:boolean)=>{visiblite=!visiblite},
            description:"function to set the visibility of the modal",
            name:"setVisible"
        },
        children:{
            defaultValue:(<div><h1>hello world</h1></div>),
            description:"The modal body content ",
            name:"children"
        }

    }
  } as Meta;
  

//👇 We create a “template” of how args map to rendering
const Template:Story<ModalProps> = (args) => <div style={{padding:20,backgroundColor:"#f8f8fb",display:"flex",justifyContent:"center",alignItems:"center"}}><Modal visible={args.visible} setVisible={()=>args.setVisible(args.visible)}>{args.children}</Modal></div>;

export const FirstStory = Template.bind({});
