import classes from './BannerMenu.module.css'



export default function BannerMenu({title,description,imgSrc}) {
    return (
        <div className={classes.bannerMenu}>
            <div className={classes.bannerImgContainer}>
                <img src={imgSrc} alt={imgSrc}/>
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
