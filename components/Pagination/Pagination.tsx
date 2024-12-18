import React from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import classes from './Pagination.module.css'
import { PaginationProps } from '../../utils/types/types';


/**
    Button group navigation to navigate between the list's chunks
**/
const Pagination: React.FC<PaginationProps> = ({ onNext, onPrev, onNum, pages, active, limit }) => {
    const list = document.querySelector("#scroll")
    const prev = () => {
        onPrev()
        list?.scrollIntoView({ block: "start", behavior: 'smooth' })
    }

    const next = () => {
        onNext()
        list?.scrollIntoView({ block: "start", behavior: 'smooth' })
    }

    return (
        <div className={classes.paginationCustom}>
            <div onClick={() => active > 1 && prev()} className={classes.paginationButton}><NavigateNextIcon className={`${active <= 1 && classes.disableButton}`} /></div>
            <div className={classes.dividerPagination}></div>
            {
                new Array(pages).fill("").map((el, index) => (
                    <div key={index} style={{ display: "flex" }}>
                        <div
                            className={`${classes.paginationButton} ${active == index + 1 && classes.activeButton}`}
                            onClick={() => { onNum((index + 1) * limit - limit); list?.scrollIntoView({ block: "start", behavior: 'smooth' }) }}
                        >
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </div>
                        <div className={classes.dividerPagination}></div>
                    </div>
                ))
            }
            <div onClick={() => active != pages && next()} className={classes.paginationButton}><NavigateBeforeIcon className={`${active == pages && classes.disableButton}`} /></div>
        </div>

    )
}

export default Pagination