// LastArticles.stories.js

import React from 'react';
import { LastArticlesProps } from '../../utils/types/types';

import LastArticles from './LastArticles';
import { Story, Meta } from '@storybook/react';

//👇 This default export determines where your story goes in the story list
const articles = [
    {
        id: 1,
        title: "عنوان طويل جدا خاص بمقال معين للإستعمال في أمور معينة",
        publishedDate: "6 days ago",
    },
    {
        id: 2,
        title: "عنوان طويل جدا خاص بمقال معين للإستعمال في أمور معينة",
        publishedDate: "1 day ago",
    },
    {
        id: 3,
        title: "عنوان طويل جدا خاص بمقال معين للإستعمال في أمور معينة",
        publishedDate: "3 weeks ago",
    },
    {
        id: 4,
        title: "عنوان طويل جدا خاص بمقال معين للإستعمال في أمور معينة",
        publishedDate: "6 years ago",
    },
    {
        id: 5,
        title: "عنوان طويل جدا خاص بمقال معين للإستعمال في أمور معينة",
        publishedDate: "1 month ago",
    },
];
export default {
    component: LastArticles,
    title: 'Components/LastArticles',
    argTypes: {
        articles: {
            defaultValue: articles,
            description: "list of articles to display",
            name: "articles"
        },


    }
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template: Story<LastArticlesProps> = (args) => (<LastArticles articles={args.articles} />)
export const FirstStory = Template.bind({});
