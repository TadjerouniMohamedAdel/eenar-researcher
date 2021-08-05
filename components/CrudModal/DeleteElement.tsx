import { useState } from 'react'
import classes from './CrudModal.module.css'
import { Button, CircularProgress } from '@material-ui/core'
import { format} from 'date-fns'
import arLocale  from 'date-fns/locale/ar-DZ'
import { DeleteElementProps } from '../../utils/types/types';
const DeleteElement:React.FC<DeleteElementProps> = ({item,title,handleSubmit})=> {
    const [isLoading,setIsLoading] = useState(false)
    return (
        <div className={classes.crudElement}>
            <h1>
                حذف
                {` ${title}`}
            </h1>
            <div className={classes.divider}></div>
            <div className={classes.formDescription}>
                {`لحذف ${title}  يرجى الإطلاع على المعلومات قبل التأكيد  `}
            </div>
            <div className={classes.form}>
            <div className={classes.collectionItem} key={`collection-item-${title}-${item.id}`}>
                            <div className={classes.collectionRectangle}></div>
                            <div className={classes.collectionContent}>
                                <h2>
                                    {item.title ?? item.arabicTitle ?? item.university ?? item.company??item.organization ??item.name }
                                </h2>
                                
                                <h3>{item.provider}</h3>
                                <h3>{item.role ?? item.university}</h3>
                                <h3>{item.date && format(new Date(item.date),"dd MMMM yyyy",{locale:arLocale }) }</h3>
                                <h3>{item.publishedDate && format(new Date(item.publishedDate),"dd MMMM yyyy",{locale:arLocale }) }</h3>
                                <h3>{item.startDate && `${format(new Date(item.startDate),"dd MMMM yyyy",{locale:arLocale })} - ${item.endDate!==""? format(new Date(item.endDate),"dd MMMM yyyy",{locale:arLocale }):"لا تاريخ انتهاء الصلاحية"}`}</h3>
                                <span>{item.link && item.link.label}</span>
                                <span>{item.description ?? item.arabicDescription}
                                </span>
                                <span>{item.location}</span>
                            </div>
                        </div>
                <div className={classes.submitContainer} onClick={()=>{setIsLoading(true);handleSubmit(item)}}>
                        <Button className={classes.submit} type="button" disabled={isLoading} variant="contained">
                            <div>
                                {isLoading  && <CircularProgress style={{color:"#fff",width:19,height:19,marginLeft:5,marginRight:5}} />}
                            </div>
                            <span>تأكيد الحذف</span>
                        </Button>
                </div>

            </div>
        </div>
    )
}

export default DeleteElement