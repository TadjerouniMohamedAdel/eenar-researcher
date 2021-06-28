import { useState, useEffect } from 'react'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutGroup from "../../../components/AboutGroup/AboutGroup";
import GroupBanner from "../../../components/GroupBanner/GroupBanner";
import MyHead from "../../../components/MyHead/MyHead";
import ResearcherLayout from "../../../layouts/ResearcherLayout/ResearcherLayout";
import PostWriter from '../../../components/PostWriter/PostWriter';
import PostViewer from '../../../components/PostViewer/PostViewer';
import axios from 'axios'
import Modal from '../../../components/Modal/Modal';
import { groupSchema } from '../../../utils/Validation/ValidationObjects';
import { groupFields } from '../../../utils/form/Fields';
import EditElement from '../../../components/CrudModal/EditElement';
import { useMutation, useQueryClient } from 'react-query'
import DeleteElement from '../../../components/CrudModal/DeleteElement';
import { useRouter } from 'next/router'
import MultiSectionLayout from '../../../layouts/MultiSectionLayout/MultiSectionLayout';
const posts = [
  {
    images: [],
    content: "https://www.youtube.com/watch?v=E-znxPIeTOE لوريم ايبسوم هو @نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على .",
    keywords: ["keyword 1", "keyword 2", "keyword 3", "keyword 4"],
  },
  {
    images: [],
    content: "لوريم ايبسوم هو @نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على . https://app.zeplin.io/project/5fcfab653cb9004a0bbf267e/screen/5fe5211dc4783e9cf2e1e678",
    keywords: ["keyword 1", "keyword 2", "keyword 3", "keyword 4"],
  },
  {
    images: ["sdfsdsd", "sdfsdsd", "sdfsdsd", "sdfsdsd", "sdfsdsd", "sdfsdsd", "sdfsdsd"],
    content: "لوريم ايبسوم هو @نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على .",
    keywords: ["keyword 1", "keyword 2", "keyword 3", "keyword 4"],
  },

]


export async function getServerSideProps(context) {
  let group = null
  console.log(context)
  await axios({
    method: "get",
    url: `/api/groups?id=${context.params.id}`,
    withCredentials:true
  })
    .then((response) => {
      group = response.data
    })
    .catch((error) => console.log(error));
  return {
    props: {
      group,
      ...await serverSideTranslations(context.locale, ["sidebar"]),
    },
  }
}
export default function GroupItem({ group: groupProp }) {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [group, setGroup] = useState(groupProp)
  const [editVisible, setEditVisible] = useState(false)
  const [deleteVisible, setDeleteVisible] = useState(false)
  const { data, mutate: editGroup, status: editGroupStatus } = useMutation(
    (values) => axios.put(`/api/groups/edit`, values).then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.removeQueries(["groups"])
      }
    }

  )
  const { mutate: deleteGroup, status: deleteGroupStatus } = useMutation(
    (values) => axios.delete(`/api/groups/delete?id=${group.id}`, values).then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.removeQueries(["groups"])
      }
    }

  )

  const handleEditItem = (data) => {
    console.log("edit group", data)
    editGroup(data)
  }

  const handleDeleteItem = () => {
    deleteGroup()
  }
  useEffect(() => {
    if (editGroupStatus === "success") {
      setEditVisible(false)
      setGroup(data)
    }
  }, [editGroupStatus])

  useEffect(() => {
    if (deleteGroupStatus === "success") {
      setDeleteVisible(false)
      router.push("/researcher/account/network")
    }
  }, [deleteGroupStatus])
  return (
    <ResearcherLayout>
      <GroupBanner group={group} openDeleteGroup={setDeleteVisible} editGroupStatus={editGroupStatus} openEditGroup={setEditVisible} editGroup={editGroup} />
      <MyHead title="المجموعات  - المجموعة الفلانية" />
        <Modal visible={editVisible} setVisible={setEditVisible}>
          <EditElement
            item={group}
            title="مجموعة"
            validationSchema={groupSchema}
            fields={groupFields}
            handleSubmit={handleEditItem}
          />
        </Modal>
        <Modal visible={deleteVisible} setVisible={setDeleteVisible}>
          <DeleteElement
            item={group}
            title="مجموعة"
            validationSchema={groupSchema}
            fields={groupFields}
            handleSubmit={handleDeleteItem}
          />
        </Modal>
        <MultiSectionLayout
          specificSections={[<AboutGroup group={group}/>]}
        >
          <PostWriter />
          <PostViewer post={posts[0]} />
          <PostViewer post={posts[1]} />
          <PostViewer post={posts[2]} />
        </MultiSectionLayout>
    </ResearcherLayout>
  )
}
