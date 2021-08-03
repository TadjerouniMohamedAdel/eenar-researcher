import React from 'react'
import { IconButton } from '@material-ui/core'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { LastArticlesProps } from '../../utils/types/types';
import classes from './LastArticles.module.css'

/**
    Card section to display the  5 last articles
 **/

const LastArticles: React.FC<LastArticlesProps> = ({ articles }) => {
    return (
        <div className={classes.articles}>
            <h2>
                مقالات
                <IconButton onClick={() => { }}>
                    <MoreHorizOutlinedIcon className={classes.actionSectionIcon} />
                </IconButton>
            </h2>
            <div className={classes.articlesItems}>
                {
                    articles.map((article, index) => (
                        <div className={classes.articlesItem} key={`articles-item-${index}`}>
                            <div className={classes.collectionRectangle}>
                                <img src="/images/article-placeholder.jpg" alt="" />
                            </div>
                            <div className={classes.articlesContent}>
                                <h2>{article.title}</h2>
                                <span>{article.publishedDate}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default LastArticles