import { ClassSharp } from '@material-ui/icons'
import React from 'react'
import BannerMenu from '../../../components/BannerMenu/BannerMenu'
import MyHead from '../../../components/MyHead/MyHead'
import WorkInProgress from '../../../components/WorkInProgress/WorkInProgress'
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout'
import { Button, FormControl, IconButton, InputLabel, Select,TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import classes from '../../../styles/Library.module.css'
export default function index() {



    const books=[
        {img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"15/09/2020",publishingHouse:"دار البدر للنشر والتوزيع"},
        {img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"15/09/2020",publishingHouse:"دار البدر للنشر والتوزيع"},
        {img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"15/09/2020",publishingHouse:"دار البدر للنشر والتوزيع"},
        {img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"15/09/2020",publishingHouse:"دار البدر للنشر والتوزيع"},
        {img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"15/09/2020",publishingHouse:"دار البدر للنشر والتوزيع"},
        {img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"15/09/2020",publishingHouse:"دار البدر للنشر والتوزيع"},
        {img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"15/09/2020",publishingHouse:"دار البدر للنشر والتوزيع"},
        {img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"15/09/2020",publishingHouse:"دار البدر للنشر والتوزيع"},
        {img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"15/09/2020",publishingHouse:"دار البدر للنشر والتوزيع"},
        {img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"15/09/2020",publishingHouse:"دار البدر للنشر والتوزيع"},
        {img:"/images/book.jpg",title:"عنوان كبير خاص بالكتاب الفلاني: كما أنه طويل بعض الشيء كي نتمكن من معرفة كيف يظهر في التصميم",author:"معاذ محساس",publishedDate:"15/09/2020",publishingHouse:"دار البدر للنشر والتوزيع"},
    ]

    return (
        <ResearcherLayout>
            <MyHead title="المكتبة" />
            <div className={classes.libraryContainer}>
                <BannerMenu 
                    title="المكتبة"
                    description="تفاعل بشكل أفضل مع زملائك الباحثين، أرسل ملفات، صور وروابط."
                    imgSrc="/images/library-banner.png"
                />
                <h1>المكتبة</h1>
                <div className={classes.filterSection}>
                    <div className={classes.groupedActions}>
                        <TextField
                            variant="outlined"
                            label="العنوان"
                            className={classes.input}  
                        />
                        <FormControl  variant="outlined" className={classes.select}>
                            <InputLabel id="demo-simple-select-outlined-label">نوع المشروع</InputLabel>
                            <Select
                                label="نوع المشروع"
                            >   
                            </Select>
                        </FormControl>
                        <Button className={classes.searchButton}>
                            <SearchIcon className={`${classes.searchIcon} ${classes.right}`} />
                        </Button>
                    </div>
                </div>
                <div className={classes.bookList}>
                    {
                        books.map((book,index)=>(
                            <>
                                <div className={classes.bookItem} key={`book-${index}`}>
                                    <div className={classes.bookCover}>
                                        <img src={book.img} alt={book.title} />
                                    </div>
                                    <div className={classes.bookContent}>
                                        <h2>{book.title}</h2>
                                        <div className={classes.groupedContent}>
                                            <h3>{book.author}</h3>
                                            <div className={classes.groupedDivider}></div>
                                            <h3>{book.publishedDate}</h3>
                                        </div>
                                        <h3>{book.publishingHouse}</h3>
                                    </div>
                                </div>
                                <div className={classes.bookDivider}></div>
                            </>
                        ))
                    }
                </div>
            </div>
        </ResearcherLayout>
    )
}
