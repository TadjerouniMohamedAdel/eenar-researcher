// PostCard.stories.js

import React from 'react';
import { PostCardProps } from '../../utils/types/types';

import PostCard from './PostCard';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list
const post = {
    id: "c0f2f197-c255-4671-b859-013c603e8235"
    , researcherId: "02d0c96f-9bfa-4c17-964c-b4be22f83df9"
    , userId: null
    , primaryAuthor: "تجروني محمد عادل"
    , secondaryAuthors: ["لخضر بودينة", "نصردين والي"]
    , publishedDate: "2021-07-03T00:00:00.000Z"
    , englishTitle: "LOREM IPSUM ARABIC VERSION"
    , publishedBy: "نصردين والي"
    , link: "DFZ"
    , arabicDescription: "وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور\nأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد\nأكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس\nأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت\nنيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا\nكيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم"
    , arabicTitle: " نموذج لوريم ايبسوم عربي - فرانكوا اراب "
    , englishDescription: "Pariatur quibusdam odit quod. Optio et aut. Deleniti doloribus in nesciunt blanditiis maiores aut et.Pariatur quibusdam odit quod. Optio et aut. Deleniti doloribus in nesciunt blanditiis maiores aut et.Pariatur quibusdam odit quod. Optio et aut. Deleniti doloribus in nesciunt blanditiis maiores aut et.Pariatur quibusdam odit quod. Optio et aut. Deleniti doloribus in nesciunt blanditiis maiores aut et."
    , file: "http://eenar-backend.herokuapp.com/files/posts/02d0c96f-9bfa-4c17-964c-b4be22f83df9/LOREMIPSUMARABICVERSION.pdf"
    , keywords: ["keyword1", "keyword2", "keyword3"]
    , createdAt: "2021-06-29T12:58:32.984Z"
    , updatedAt: "2021-06-29T12:58:32.984Z"
    , postStatus: null

}

export default {
    component: PostCard,
    title: 'Components/PostCard',
    argTypes: {
        post: {
            defaultValue: post,
            description: "The post to show",
            name: "post"
        },

    }
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template: Story<PostCardProps> = (args) => <div style={{ padding: 20, backgroundColor: "#f8f8fb", display: "flex", justifyContent: "center", alignItems: "center" }}><PostCard post={args.post} /></div>;
export const FirstStory = Template.bind({});
