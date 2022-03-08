import ResearcherLayout from "../../../../layouts/ResearcherLayout/ResearcherLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MyHead from "../../../../components/MyHead/MyHead";
import classes from "../../../../styles/Notifications.module.css";
import BannerMenu from "../../../../components/BannerMenu/BannerMenu";
import NotificationCard from "../../../../components/NotificationCard/NotificationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faUsers, faCog } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { IconButton } from "@material-ui/core";
import { GetServerSideProps, GetStaticProps } from "next";
import axios from "axios";
import WorkInProgress from "../../../../components/WorkInProgress/WorkInProgress";

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        await axios({
            method: "get",
            url: `${process.env.NEXT_PUBLIC_API_URL}/user/user`,
            withCredentials: true,
            headers: { Cookie: context.req.headers.cookie },
        });
        return {
            props: {
                ...(await serverSideTranslations(context.locale || "ar", ["sidebar"])),
            },
        };
    } catch (error) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
            props: {
                ...(await serverSideTranslations(context.locale || "ar", ["sidebar"])),
            },
        };
    }
};

const notifications = [
    {
        id: 1,
        sender: "بلال بوعيشة",
        action: "comment",
        from: "منذ 5 دقيقة",
    },
    {
        id: 2,
        sender: "إلياس بوجلطية",
        action: "like",
        from: "منذ 4 دقيقة",
    },
    {
        id: 3,
        sender: "بلال بوعيشة",
        action: "comment",
        from: "منذ دقيقة",
    },
    {
        id: 4,
        sender: "بلال بوعيشة",
        action: "love",
        from: "منذ 5 دقيقة",
    },
    {
        id: 5,
        sender: "إلياس بوجلطية",
        action: "like",
        from: "منذ 4 دقيقة",
    },
    {
        id: 6,
        sender: "بلال بوعيشة",
        action: "comment",
        from: "منذ دقيقة",
    },
];

const ResearcherAccountCenterPage: React.FC = () => {
    return (
        <ResearcherLayout>
            <MyHead title="الإشعارات" />
            {/* <WorkInProgress menu="الإشعارات" /> */}
            <div className={classes.accountCenterContainer}>
                <BannerMenu
                    title="مركز الحساب"
                    description="معلومات الحساب، رسائل، إشعارات والكثير.."
                    imgSrc="/images/notifications.png"
                />
                <div className={classes.main}>
                    <div className={classes.menus}>
                        <div className={classes.menuItem}>
                            <div className={classes.menuItemHeader}>
                                <h2>
                                    <FontAwesomeIcon className={classes.menuItemIcon} icon={faUserCircle} />
                                    حسابي الشخصي
                                </h2>
                                <IconButton onClick={() => {}} className={classes.menuExpendedButton}>
                                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: 10 }} />
                                </IconButton>
                            </div>
                            <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على</p>
                        </div>
                        <div className={classes.menuItem}>
                            <div className={classes.menuItemHeader}>
                                <h2>
                                    <FontAwesomeIcon className={classes.menuItemIcon} icon={faCog} />
                                    الإعدادات
                                </h2>
                                <IconButton onClick={() => {}} className={classes.menuExpendedButton}>
                                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: 10 }} />
                                </IconButton>
                            </div>
                            <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على</p>
                        </div>
                        <div className={classes.menuItem}>
                            <div className={classes.menuItemHeader}>
                                <h2>
                                    <FontAwesomeIcon className={classes.menuItemIcon} icon={faUsers} />
                                    المجموعات
                                </h2>
                                <IconButton onClick={() => {}} className={classes.menuExpendedButton}>
                                    <FontAwesomeIcon icon={faPlus} style={{ fontSize: 10 }} />
                                </IconButton>
                            </div>
                            <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على</p>
                        </div>
                    </div>
                    <div className={classes.menuContent}>
                        <h1>الإشعارات</h1>
                        <div className={classes.items}>
                            {notifications.map((notification) => (
                                <NotificationCard notification={notification} key={`notification-${notification.id}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ResearcherLayout>
    );
};
export default ResearcherAccountCenterPage;
