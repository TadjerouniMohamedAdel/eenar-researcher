import { useState } from 'react'
import { Button } from '@material-ui/core';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AddElement from '../../../components/CrudModal/AddElement';
import Modal from '../../../components/Modal/Modal';
import MultiSectionLayout from '../../../layouts/MultiSectionLayout/MultiSectionLayout';
import ResearcherLayout from '../../../layouts/ResearcherLayout/ResearcherLayout';
import classes from '../../../styles/Services.module.css'
import { serviceRequestFields } from '../../../utils/form/Fields';
import { serviceRequestSchema } from '../../../utils/Validation/ValidationObjects';
import MyHead from '../../../components/MyHead/MyHead';
import {GetStaticProps,GetStaticPaths, GetServerSideProps} from 'next'
import { NotDefineYet } from '../../../utils/types/types';
import axios from 'axios'

export const getServerSideProps:GetServerSideProps = async (context)=> {
    let group = null
      try {
        await axios({
            method: "get",
            url: `${process.env.NEXT_PUBLIC_API_URL}/user/user`,
            withCredentials: true,
            headers: { Cookie: context.req.headers.cookie }
        })
        return {
            props: {
                ...await serverSideTranslations(context.locale || "ar", ["sidebar"]),
            }
        }
    
        } catch (error) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            },
            props: {
                ...await serverSideTranslations(context.locale || "ar", ["sidebar"]),
            }
        }
    }
}
export default function researchServiceItem() {
    const [addVisible,setAddVisible] = useState(false)
    const AddServiceRequest = (data:NotDefineYet)=>{
        console.log("add service request",data)
        setAddVisible(false)
    }
    
    return (
        <ResearcherLayout>
            <MyHead title="الخدمات البحثية" />
            <Modal visible={addVisible} setVisible={setAddVisible}>
                <AddElement
                    title="طلب خدمة"
                    handleSubmit={AddServiceRequest}
                    validationSchema={serviceRequestSchema}
                    fields={serviceRequestFields}
                />
            </Modal>
            <MultiSectionLayout >
                <div className={classes.serviceViewContainer}>
                    <h1 >الخدمات البحثية</h1>
                    <div className={classes.serviceView}>
                        <div className={classes.serviceViewImage}>
                            <img src="/images/service-placeholder.jpg" alt="" />
                        </div>
                        <div className={classes.serviceViewContent}>
                            <h2>إعداد خطة البحث</h2>
                            <p>
                                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود
                                أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد كسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

                                أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم أيو فيجايت
                                نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان
                                كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم.""سيت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم أكيسأنتييومدولاريمكيو لايودانتيوم,توتام ريم أبيرأم,أيكيو أبسا كيواي أب أللو أنفينتوري فيرأتاتيس ايتكياسي أرشيتيكتو بيتاي فيتاي ديكاتا سيونت أكسبليكابو. نيمو أنيم أبسام فوليوباتاتيم كيواي

                                فوليوبتاس سايت أسبيرناتشر أيوت أودايت أيوت فيوجايت, سيد كيواي كونسيكيونتشر ماجنايدولارس أيوس كيواي راتاشن فوليوبتاتيم سيكيواي نيسكايونت. نيكيو بوررو كيوايسكيومايست,كيواي دولوريم ايبسيوم كيوا دولار سايت أميت, كونسيكتيتيور,أديبايسكاي فيلايت, سيدكيواي نون نيومكيوام ايايوس موداي تيمبورا انكايديونت يوت لابوري أيت دولار ماجنامألايكيوام كيوايرات فوليوبتاتيم. يوت اينايم أد مينيما فينيام, كيواس نوستريوم أكسيركايتاشيميلامكوربوريس سيوسكايبيت لابورايوسام, نايساي يوت ألايكيوايد أكس أيا كومودايكونسيكيواتشر؟ كيوايس أيوتيم فيل أيوم أيوري ريبريهينديرايت كيواي ان إيا فوليوبتاتي

                                فيلايت ايسسي كيوم نايهايل موليستايا كونسيكيواتيو,فيلايليوم كيواي دولوريم أيوم فيوجايات كي
                           </p>
                            <div className={classes.serviceViewImage2}>
                                <div className={classes.serviceViewImageSrc}>
                                <img src="/images/service-placeholder.jpg" alt="" />
                                </div>
                                <h6>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت</h6>
                            </div>
                            <p>
                                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور

                                أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

                                أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

                                أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

                                نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا

                                كيو أوفيسيا ديسيريونتموليت انيم أيدي ايست لابوريوم
                           </p>
                            <div className={classes.serviceKeywords}>
                                <span className={classes.serviceKeyword}>Keyword 1</span>
                                <span className={classes.serviceKeyword}>Keyword 1</span>
                                <span className={classes.serviceKeyword}>Keyword 1</span>
                                <span className={classes.serviceKeyword}>Keyword 1</span>
                            </div>
                            <div className={classes.getService}>
                                <Button className={classes.getServiceButton} onClick={() => { setAddVisible(true)}}>
                                    أطلب الخدمة
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </MultiSectionLayout>
        </ResearcherLayout>
    )
}
