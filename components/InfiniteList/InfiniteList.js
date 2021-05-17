import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux'
import classes from "../../styles/MyNetwork.module.css";
import GroupCardSkeleton from '../GroupCard/GroupCardSkeleton';
import GroupCard from '../GroupCard/GroupCard';
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import EmptyList from '../EmptyList/EmptyList';

export default function InfiniteList() {
    const user = useSelector((state) => state.user)
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)
    const [hasMore, setHasMore] = useState(true)
    const [search, setSearch] = useState("")
    const {
        fetchNextPage,
        fetchPreviousPage,
        data,
        isLoading,
        hasNextPage,
        hasPreviousPage,
        isFetchingNextPage,
        isFetchingPreviousPage,
    } = useInfiniteQuery("groups_infinite", ({ pageParam = 1 }) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/groups/all?offset=${(pageParam-1)*limit}&limit=${limit}&title=${search}`)
        .then((response) => response.data), {
        getNextPageParam: (lastPage, allPages) =>{
            return lastPage.groups.length < limit? undefined :allPages.length+1
        },
        getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
    })
    
    useEffect(() => {
        console.log("data change infinite list",data,hasNextPage)
    }, [data])
    return (
        <InfiniteScroll
            dataLength={limit}
            className={classes.groupsContainer}
            next={() => fetchNextPage()}
            inverse={false}
            hasMore={hasNextPage}
            loader={<GroupCardSkeleton />}
        >
            {isLoading === false && data.pages[0].groups.length == 0 ? (
                        <EmptyList />
                    ) :
            data && data.pages.map((page, id) => {
                console.log("page",page)
                    return page.groups.map((group)=>(
                        <GroupCard key={`group-card-${group.id}`} group={group} />
                    ))
                })
            }
        </InfiniteScroll>
    )
}
