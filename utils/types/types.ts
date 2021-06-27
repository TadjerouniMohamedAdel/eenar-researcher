import React from 'react'
// pure types
export type NotDefineYet = any

export type userResearcher = {
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

//components props types

export type AboutMeProps = {
    user: userResearcher,
}

export type MultiSectionLayoutProps = {
    hasSection?:boolean,
    hasTwoSection?:boolean,
    children: React.ReactNode,
    specificSections ?: React.ReactNode[]
  }
  