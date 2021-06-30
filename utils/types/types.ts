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