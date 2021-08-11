import React from 'react'
import classes from './ScoreStatCard.module.css'
import FileIcon from '@material-ui/icons/DescriptionOutlined';
import CommentsIcon from '@material-ui/icons/QuestionAnswerOutlined';
import { faAward } from '@fortawesome/free-solid-svg-icons'
import BookIcon from '@material-ui/icons/ImportContactsOutlined';
import DownLoadIcon from '@material-ui/icons/CloudDownloadSharp';
import AddCircle from '@material-ui/icons/AddCircleOutlineOutlined';
import SubCircle from '@material-ui/icons/RemoveCircleOutlineOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScoreStatCardProps } from '../../utils/types/types';


/**
    Card section for displaying stat item by showing the following informations:

    - Subject: The name of the stat subject
    - Value: The current value of the stat
    - Unit: The value's unit
    - Description: small paragraph about the stat subject
    - Discrepancy (optional): the difference between the current value and the previos
**/

const ScoreStatCard: React.FC<ScoreStatCardProps> = ({ score }) => {

    const renderIcon = (title: string) => {
        switch (title) {
            case "المنشورات":
                return <FileIcon className={classes.scoreIcon} />
                break;
            case "النقاشات":
                return <CommentsIcon className={classes.scoreIcon} />
                break
            case "القراءات":
                return <BookIcon className={classes.scoreIcon} />
                break
            case "التحميلات":
                return <DownLoadIcon className={classes.scoreIcon} />
                break
            case "التوصيات":
                return <FontAwesomeIcon icon={faAward} className={classes.scoreIcon} />
            default:
                break;
        }
    }

    return (
        <div className={classes.scoreCard}>
            <div className={classes.scoreHeader}>
                {score.offset && (

                    <div className={classes.scoreOffset}>
                        <span className={classes.scoreOffsetValue}>{score.offset.value}%</span>
                        {score.offset.increase ? <AddCircle className={`${classes.scoreOffsetIcon} ${classes.scoreOffsetIconIncrease}`} /> : <SubCircle className={`${classes.scoreOffsetIcon} ${classes.scoreOffsetIconDecrease}`} />}
                    </div>
                )
                }
            </div>
            <div className={`${classes.scoreIconSection}`}>
                <div className={classes[score.color]}>
                    {renderIcon(score.title)}
                </div>
            </div>
            <div className={classes.scoreContent}>
                <span className={classes.scoreContentValue}>
                    {score.value}
                    {score.unit}
                </span>
                <span className={classes.socreContentTitle}>
                    {score.title}
                </span>
                <p>
                    {score.description}
                </p>
            </div>
            <img src={`/images/${score.color}-chart.png`} alt="" />
        </div>
    )
}

export default ScoreStatCard;
