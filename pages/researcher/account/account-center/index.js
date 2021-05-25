import ResearcherLayout from "../../../../layouts/ResearcherLayout/ResearcherLayout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MyHead from "../../../../components/MyHead/MyHead";
import classes from '../../../../styles/Notifications.module.css'
import BannerMenu from "../../../../components/BannerMenu/BannerMenu";
import NotificationCard from "../../../../components/NotificationCard/NotificationCard";

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ["sidebar"]),
    },
})

const notifications = [
    {
        id: 1,
        sender: "بلال بوعيشة",
        action: "comment",
        from: "منذ 5 دقيقة"
    },
    {
        id: 2,
        sender: "إلياس بوجلطية",
        action: "like",
        from: "منذ 4 دقيقة"
    },
    {
        id: 3,
        sender: "بلال بوعيشة",
        action: "comment",
        from: "منذ دقيقة"
    },
    {
        id: 4,
        sender: "بلال بوعيشة",
        action: "love",
        from: "منذ 5 دقيقة"
    },
    {
        id: 5,
        sender: "إلياس بوجلطية",
        action: "like",
        from: "منذ 4 دقيقة"
    },
    {
        id: 6,
        sender: "بلال بوعيشة",
        action: "comment",
        from: "منذ دقيقة"
    },

]

export default function index() {
    return (
        <ResearcherLayout>
            <MyHead title="الإشعارات" />
            <div className={classes.accountCenterContainer}>
                <BannerMenu
                    title="مركز الحساب"
                    description="معلومات الحساب، رسائل، إشعارات والكثير.."
                    imgSrc="/images/account-center.png"
                />
                <div className={classes.main}>
                    <div className={classes.menus}>
                    </div>
                    <div className={classes.menuContent}>
                        <h1>الإشعارات</h1>
                        <div className={classes.items}>
                            {
                                notifications.map(notification => (
                                    <NotificationCard notification={notification} key={`notification-${notification.id}`} />

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </ResearcherLayout>
    )
}
