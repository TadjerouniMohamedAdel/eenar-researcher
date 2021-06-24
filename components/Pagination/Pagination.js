import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import classes from './Pagination.module.css'
import PropTypes from 'prop-types'

export default function Pagination({ onNext, onPrev, onNum, pages, active, limit }) {
    const list = document.querySelector("#scroll")
    const prev = () => {
        onPrev()
        list.scrollIntoView({ block: "start", behavior: 'smooth' })
    }

    const next = () => {
        onNext()
        list.scrollIntoView({ block: "start", behavior: 'smooth' })
    }

    return (
        <div className={classes.paginationCustom}>
            <div onClick={() => active > 1 && prev()} className={classes.paginationButton}><NavigateNextIcon className={`${active <= 1 && classes.disableButton}`} /></div>
            <div className={classes.dividerPagination}></div>
            {
                new Array(pages).fill().map((el, index) => (
                    <div key={index} style={{ display: "flex" }}>
                        <div
                            className={`${classes.paginationButton} ${active == index + 1 && classes.activeButton}`}
                            onClick={() => { onNum((index + 1) * limit - limit); list.scrollIntoView({ block: "start", behavior: 'smooth' }) }}
                        >
                            {index + 1 < 10 ? `0${index + 1}`:index + 1}
                        </div>
                        <div className={classes.dividerPagination}></div>
                    </div>
                ))
            }
            <div onClick={() => active != pages && next()} className={classes.paginationButton}><NavigateBeforeIcon className={`${active == pages && classes.disableButton}`} /></div>
        </div>

    )
}

Pagination.propTypes = {
    onNext:PropTypes.func.isRequired,
    onPrev:PropTypes.func.isRequired,
    onNum:PropTypes.func.isRequired,
    pages:PropTypes.number.isRequired,
    limit:PropTypes.number.isRequired,
    active:PropTypes.number.isRequired
}
