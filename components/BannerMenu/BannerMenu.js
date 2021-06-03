import classes from './BannerMenu.module.css'
import PropTypes from 'prop-types';



export default function BannerMenu({ title, description, imgSrc }) {
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
BannerMenu.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
}