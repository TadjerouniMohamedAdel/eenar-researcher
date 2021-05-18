import { useState, useEffect } from 'react'
import ResearcherAccountLayout from '../../../../layouts/ResearcherAccountLayout/ResearcherAccountLayout'
import MyHead from '../../../../components/MyHead/MyHead'
import AddIcon from "@material-ui/icons/Add";
import classes from "../../../../styles/MyNetwork.module.css";

import { dataarticles, datagroups } from "../../../../utils/fixtures/DevData";
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import ViewComfyRoundedIcon from '@material-ui/icons/ViewComfyRounded';
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Hidden,
} from "@material-ui/core";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import GroupCardList from '../../../../components/GroupCardList/GroupCardList';
import AddElement from '../../../../components/CrudModal/AddElement';
import { groupSchema } from '../../../../utils/Validation/ValidationObjects';
import Modal from '../../../../components/Modal/Modal';
import { groupFields } from '../../../../utils/form/Fields';
import { useSelector } from 'react-redux'
import useGetList from '../../../../utils/hooks/useGetList';
import useAddElement from '../../../../utils/hooks/useAddElement';
import Pagination from '../../../../components/Pagination/Pagination';
import GroupCardListSkeleton from '../../../../components/GroupCardList/GroupCardListSkeleton';
import MultiSectionLayout from '../../../../layouts/MultiSectionLayout/MultiSectionLayout';
import InfiniteList from '../../../../components/InfiniteList/InfiniteList';
import { motion,AnimatePresence } from 'framer-motion'
import EmptyList from '../../../../components/EmptyList/EmptyList';
import ErrorUnreachable from '../../../../components/ErrorUnreachable/ErrorUnreachable';


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ["sidebar"]),
  },
})

const easing = [0.6, -0.05, 0.01, 0.99];
const animLayout= {
  initial: { scale: 0,transition:{ease:easing,duration: 0.6,delay:0.4}},
  animate: { scale: 1,transition:{ease:easing,duration: 0.6,delay:0.4}},
  exit: { opacity: 0,transition:{ease:easing,duration: 0.6,delay:0.4}},

  };
  
export default function index() {
  const user = useSelector((state) => state.user)
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [articles, setArticles] = useState(dataarticles);
  const [sideGroups, setSideGroups] = useState(datagroups);
  const [view, setView] = useState("grid")
  const [addVisible, setAddVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)
  const [search, setSearch] = useState("")
  const [groups, setGroups] = useState([])
  const { isLoading, data,isError,error } = useGetList("groups", `/groups/all`, limit, offset, search, user.researchers.id)
  const { mutate: addElement, status: addElementStatus } = useAddElement("groups", `/groups/add`, limit, offset, search, user.researchers.id)
  const [page, setPage] = useState(1)



  useEffect(() => {
    if (data && view == "grid") {
      console.log("changed", groups, offset, data)
      setGroups([...groups, ...data.groups])
    }
  }, [data])

  useEffect(() => {
    console.log("change offset")
  }, [offset])

  useEffect(() => {
    setOffset(0)
  }, [view])

  useEffect(() => {
    if (addElementStatus === "success") {
      setAddVisible(false)
    }
  }, [addElementStatus])

  useEffect(() => {
    setPage(offset / limit + 1)
  }, [offset]);

  const handleAddItem = (data) => {
    data.createdBy = user.id
    addElement(data)
  }


  return (
    <ResearcherAccountLayout>
      <MyHead title="الملف الشخصي  - شبكتي" />
      <Modal visible={addVisible} setVisible={setAddVisible}>
        <AddElement
          title="مجموعة"
          validationSchema={groupSchema}
          fields={groupFields}
          handleSubmit={handleAddItem}
        />
      </Modal>
      <MultiSectionLayout
        hasTwoSection={false}
      >

        <div className={classes.filterSection}>
          <div className={classes.groupedActions}>
            <TextField
              variant="outlined"
              label="العنوان"
              className={classes.input}
            />
          </div>
          <div className={classes.buttonSection}>
            <div className={classes.viewChoices} id="scroll">
              <IconButton onClick={() => { setView("list") }} disabled={view === "list"}>
                <ViewListRoundedIcon />
              </IconButton>
              <IconButton onClick={() => { setView("grid") }} disabled={view === "grid"}>
                <ViewComfyRoundedIcon />
              </IconButton>
            </div>
            <Button
              className={classes.addButton}
              onClick={() => { setAddVisible(true) }}
            >
              <span className={classes.text}>أضف مجموعة</span>
              <AddIcon className={classes.addIcon} />
            </Button>
          </div>
        </div>
        <AnimatePresence exitBeforeEnter>
        {
          view === "grid" ? (
            <motion.div key="card-list" id="scrollableDivResearchs" className={classes.scrollableDivResearchs} variants={animLayout} exit="exit" initial="initial" animate="animate">
              <InfiniteList />
            </motion.div>

          ) : (
            <motion.div key="item-list"  className={classes.scrollableDivResearchs} variants={animLayout} exit="exit" initial="initial" animate="animate">
              {
                isError? (
                  <ErrorUnreachable />
                ):
                isLoading ? (
                  <>
                    {
                      new Array(limit).fill().map((el, index) => (
                        <GroupCardListSkeleton key={el} />
                      ))
                    }
                  </>
                ) :isLoading === false && data.groups.length == 0 ? (
                  <EmptyList />
              ) :
                  (
                    <>
                      {
                        data?.groups?.map((group, index) => (
                          <GroupCardList group={group} key={`group-${index}`} />
                        ))
                      }
                      {data && data.maxPages > 1 && (
                        <div
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Pagination
                            active={page}
                            limit={limit}
                            pages={data.maxPages}
                            onNext={() => { setOffset(offset + 10) }}
                            onPrev={() => { setOffset(offset - 10) }}
                            onNum={setOffset}
                          />

                        </div>
                      )}
                    </>
                  )
              }

            </motion.div>
          )
        }
        </AnimatePresence>
      </MultiSectionLayout>
    </ResearcherAccountLayout>
  )
}
