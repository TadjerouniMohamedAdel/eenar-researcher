import classes from './CrudModal.module.css'
import { Button } from '@material-ui/core'

export default function DeleteElement({item,title,handleSubmit}) {
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
                                    {item.title ?? item.university ?? item.company??item.organization ??item.name }
                                </h2>
                                
                                <h3>{item.provider}</h3>
                                <h3>{item.role}</h3>
                                <h3>{item.level ?? item.date ?? `${item.endDate} - ${item.startDate}`}</h3>
                                <span>{item.link && item.link.label}</span>
                                <span>{item.description}
                                </span>
                                <span>{item.location}</span>
                            </div>
                        </div>
                <div className={classes.submitContainer} onClick={()=>handleSubmit(item)}>
                        <Button className={classes.submit} type="button">
                            <span>تأكيد الحذف</span>
                        </Button>
                </div>

            </div>
        </div>
    )
}
