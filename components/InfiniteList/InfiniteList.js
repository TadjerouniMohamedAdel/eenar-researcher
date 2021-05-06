import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import useGetList from '../../utils/hooks/useGetList'
import { useSelector } from 'react-redux'
import classes from "../../styles/MyNetwork.module.css";
import GroupCardSkeleton from '../GroupCard/GroupCardSkeleton';
import GroupCard from '../GroupCard/GroupCard';
export default function InfiniteList() {
    const user = useSelector((state) => state.user)
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)
    const [hasMore, setHasMore] = useState(true)
    const [search, setSearch] = useState("")
    const { isLoading, data } = useGetList("groups", `/groups/all`, limit, offset, search, user.researchers.id)
    const [groups, setGroups] = useState([])
    useEffect(() => {
        if (data) {
            setGroups([...groups, ...data.groups])
            data.groups.length === 0 && setHasMore(false)
        }
    }, [data])
    return (
        <InfiniteScroll
            dataLength={groups.length}
            className={classes.groupsContainer}
            next={() => !isLoading && setOffset(offset + 10)}
            inverse={false}
            hasMore={hasMore}
            loader={<GroupCardSkeleton />}
        >
            {groups.map((group, id) => (
                <GroupCard key={`group-card-${id}`} group={group} />
            ))}
        </InfiniteScroll>
    )
}
