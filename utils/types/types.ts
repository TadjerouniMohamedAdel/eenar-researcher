import React from 'react'
// pure types
export type NotDefineYet = any

export type UserResearcher = {
    id:number,
    email:string,
    lastname:string,
    firstname:string,
    type:string,
    gender:string,
    center:string,
    job:string,
    region:string,
    city:string,
    status:string,
    address:string,
    hello:string,
    image:string,
    createdAt:string,
    updatedAt:string,
    researchers:{
        id:number,
        aboutMe:string,
        birthday:string
        website:string|undefined,
        createdAt:string,
        updatedAt:string,
        centers:NotDefineYet,
        admins:NotDefineYet

    }

}

export type Group={
    id:string,
    title:string,
    slogan:string,
    privacy:string,
    createdBy:number,
    image:string,
    description:string,
    createdAt:string,
    updatedAt:string,
    webSite:string|null    
}

export type ArticleType={
    id:number,
    title:string,
    publishedDate:string
}

//components props types

export type AboutMeProps = {
    user: UserResearcher,
}

export type MultiSectionLayoutProps = {
    hasSection?:boolean,
    hasTwoSection?:boolean,
    children: React.ReactNode,
    specificSections ?: React.ReactNode[]
}

export type GroupBannerProps = {
    group:Group,
    openEditGroup:(open:boolean)=>void,
    editGroupStatus:string,
    editGroup:(group:NotDefineYet)=>void,
    openDeleteGroup:(open:boolean)=>void,
}

export type GroupCardProps = {
    group:Group
}

export type BannerMenuProps={
    title:string,
    description:string,
    imgSrc:string
}

export type AccountBannerProps = {
    user:UserResearcher
}

export type LastArticlesProps = {
    articles:ArticleType[]
}

export type ModalProps={
    visible:boolean,
    setVisible:(visible:boolean)=>void,
    children:React.ReactNode
}

export type PaginationProps={
    onNext:()=>void,
    onPrev:()=>void,
    onNum:(page:number)=>void,
    pages:number,
    active:number,
    limit:number
}

export type BadgesCardProps ={
    badges:NotDefineYet[]
}

export type MyHeadProps = {
    title:string,
}