import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import classes from './Pagination.module.css'
export default function Pagination({onNext,onPrev,onNum,pages,active,limit}) {
    return (
            <div className={classes.paginationCustom}>
                <div onClick={()=>active > 1 &&onPrev()} className={classes.paginationButton}><NavigateNextIcon className={`${active <= 1 && classes.disableButton}`} /></div>
                <div className={classes.dividerPagination}></div>
                {
                    new Array(pages).fill().map((el,index)=>(
                        <>
                        <div 
                            className={`${classes.paginationButton} ${active==index+1 && classes.activeButton}`}
                            onClick={()=>onNum((index+1)*limit-limit)}
                        >
                            {index+1}
                        </div>
                        <div className={classes.dividerPagination}></div>
                        </>
                    ))
                }
                <div onClick={()=>active!=pages &&onNext()} className={classes.paginationButton}><NavigateBeforeIcon className={`${active==pages && classes.disableButton}`}/></div>
            </div>
        
    )
}
