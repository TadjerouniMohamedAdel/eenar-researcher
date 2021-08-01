import React from 'react'
import classes from './BannerMenu.module.css'
import { BannerMenuProps } from '../../utils/types/types';


/**
    Banner Card to show the current page and small description of the content page 
**/
const BannerMenu: React.FC<BannerMenuProps> = ({ title, description, imgSrc }) => {
    return (
        <div className={classes.bannerMenu}>
            <div className={classes.bannerImgContainer}>
                <img src={imgSrc} alt={imgSrc} />
            </div>
            <div className={classes.bannerContent}>
                <h1>{title}</h1>
                <span>
                    {description}
                </span>
            </div>
        </div>
    )
}
export default BannerMenu;