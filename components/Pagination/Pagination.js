import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import classes from './Pagination.module.css'
export default function Pagination() {
    return (
            <div className={classes.paginationCustom}>
                <div className={classes.paginationButton}><NavigateNextIcon className={classes.disableButton} /></div>
                <div className={classes.dividerPagination}></div>
                <div className={`${classes.paginationButton} ${classes.activeButton}`}>01</div>
                <div className={classes.dividerPagination}></div>
                <div className={classes.paginationButton}>02</div>
                <div className={classes.dividerPagination}></div>
                <div className={classes.paginationButton}>03</div>
                <div className={classes.dividerPagination}></div>
                <div className={classes.paginationButton}>04</div>
                <div className={classes.dividerPagination}></div>
                <div className={classes.paginationButton}>05</div>
                <div className={classes.dividerPagination}></div>
                <div className={classes.paginationButton}>06</div>
                <div className={classes.dividerPagination}></div>
                <div className={classes.paginationButton}><NavigateBeforeIcon /></div>
            </div>
        
    )
}
