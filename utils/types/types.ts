import React from 'react'
// pure types
export type NotDefineYet = any

export type UserResearcher = {
    id: number,
    email: string,
    lastname: string,
    firstname: string,
    type: string,
    gender: string,
    center: string,
    job: string,
    region: string,
    city: string,
    status: string,
    address: string,
    hello: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    researchers: {
        id: number,
        aboutMe: string,
        birthday: string
        website: string | undefined,
        createdAt: string,
        updatedAt: string,
        centers: NotDefineYet,
        admins: NotDefineYet

    }

}

export type Group = {
    id: string,
    title: string,
    slogan: string,
    privacy: string,
    createdBy: string,
    image: string | null,
    description: string,
    createdAt: string,
    updatedAt: string,
    webSite: string | null
}

export type ArticleType = {
    id: number,
    title: string,
    publishedDate: string
}

export type Notification = {
    id: number,
    sender: string,
    action: string,
    from: string
}

export type ResearchPost = {
    id: string,
    researcherId: string,
    primaryAuthor: string,
    secondaryAuthors: string[],
    publishedDate: string,
    englishTitle: string,
    publishedBy: string,
    link: string,
    arabicDescription: string,
    arabicTitle: string,
    englishDescription: string,
    file: string,
    keyword: string[],
    createdAt: string,
    updatedAt: string | null,
    postStatus: string | null

}

export type ResearchProject = {
    id:string,
    researcherId: string,
    primaryAuthor: string,
    secondaryAuthors: string[],
    arabicDescription: string,
    arabicTitle: string,
    startDate:string|null,
    endDate:string|null,
    englishTitle: string,
    englishDescription: string,
    file: string,
    keyword: string[],
    supervisor:string|null,
    center:string,
    justifications:string,
    goals:string,
    previousStudies:string,
    methodology:string,
    materials:string,
    steps:string
}
export type RegistrationChoice = {
    img: string,
    title: string,
    description: string,
    type: string,
    buttonLabel: string,
    link: string
}

export type ScoreResearcher = {
    title: string,
    unit: string,
    value: number | string,
    color: string,
    description: string,
    offset?: {
        increase: boolean,
        value: number
    }
}

export type Book = {
    id: string,
    title: string,
    author: string,
    file: string,
    cover: string,
    publishedDate: string,
    publishingHouse: string,
    overview: string,
    secondaryAuthors?: string[],
    keyword?: string[],
}

export type Field = {
    name:string,
    label:string,
    type:string,
    className:string,
    defaultValue:any,
    props?:NotDefineYet
    choices?:{label:string,value:string}[]
}



//components props types

export type AboutMeProps = {
    user: UserResearcher,
}

export type MultiSectionLayoutProps = {
    hasSection?: boolean,
    children: React.ReactNode,
    specificSideSections?: React.ReactNode[]
}

export type GroupBannerProps = {
    group: Group,
    openEditGroup: (open: boolean) => void,
    editGroupStatus: string,
    editGroup: (group: NotDefineYet) => void,
    openDeleteGroup: (open: boolean) => void,
}

export type GroupCardProps = {
    group: Group
}

export type BannerMenuProps = {
    title: string,
    description: string,
    imgSrc: string
}

export type AccountBannerProps = {
    user: UserResearcher
}

export type LastArticlesProps = {
    articles: ArticleType[]
}

export type ModalProps = {
    visible: boolean,
    setVisible: (visible: boolean) => void,
    children: React.ReactNode
}

export type PaginationProps = {
    onNext: () => void,
    onPrev: () => void,
    onNum: (page: number) => void,
    pages: number,
    active: number,
    limit: number
}

export type BadgesCardProps = {
    badges: NotDefineYet[]
}

export type MyHeadProps = {
    title: string,
}

export type MyNetworkProps = {
    users: NotDefineYet[]
}

export type SidebarProps = {
    user: UserResearcher
}

export type NotificationCardProps = {
    notification: Notification
}

export type PostCardProps = {
    post: ResearchPost
}
export type RegistrationChoiceProps = {
    choice: RegistrationChoice
}

export type ScoreStatCardProps = {
    score: ScoreResearcher
}

export type WorkInProgressProps = {
    menu: string
}

export type MyGroupsProps = {
    groups: Group[] | undefined,
    isLoading: boolean | null
}

export type LayoutProps = {
    children: React.ReactNode[] | React.ReactNode
}

export interface CrudProps {
    title:string
    handleSubmit:(data:NotDefineYet)=>void
}

export interface AddElementProps extends CrudProps {
    validationSchema:NotDefineYet,
    fields:Field[],
   
}

export interface EditElementProps extends AddElementProps{
    item:any
}

export interface DeleteElementProps extends CrudProps{
    item:any
}

export interface MultiStepsAddElementProps {
    steps:{fields:Field[],validationSchema:NotDefineYet}[],
    handleSubmit:(data:NotDefineYet)=>void,
    title:string    
}

export interface MultiStepsEditElementProps  extends MultiStepsAddElementProps {
    item:any
}

//hooks type
export type UseUserProps = { 
    redirectTo: string | null, 
    redirectIfFound: string | null 
}