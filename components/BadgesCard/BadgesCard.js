import { IconButton } from '@material-ui/core';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import classes from './BadgesCard.module.css'
export default function BadgesCard() {
    const badges = []
    return (
        <div className={classes.resumeBadges}>
            <h2>
                الأوسمة
                <IconButton onClick={() => { }}>
                    <MoreHorizOutlinedIcon className={classes.actionSectionIcon} />
                </IconButton>
            </h2>
            <div className={classes.resumeBagesImages}>
                {
                    badges.length == 0 && <h3 style={{ fontFamily: "var(--primary-font)", fontWeight: 500 }}>قائمة الأوسمة فارغة</h3>
                }
                {
                    badges.map((badge, index) => (
                        <img key={`badges-${index}`} alt="" src={badge.imageSrc} />

                    ))}

            </div>
        </div>
    )
}
