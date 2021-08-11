import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import CardTravelOutlinedIcon from '@material-ui/icons/CardTravelOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

export const tabs = [
    {
        name: "الحائط",
        icon: () => (<HomeOutlinedIcon />),
        to: "wall"
    },
    {
        name: "الرصيد",
        icon: () => (<AssessmentOutlinedIcon />),
        to: "score"
    },
    {
        name: "السيرة الذاتية",
        icon: () => (<AccountBoxOutlinedIcon />),
        to: "resume"
    },

    {
        name: "منشوراتي",
        icon: () => (<AssignmentOutlinedIcon />),
        to: "posts"
    },
    {
        name: "مشاريعي",
        icon: () => (<CardTravelOutlinedIcon />),
        to: "projects"
    },
    {
        name: "شبكتي",
        icon: () => (<PublicOutlinedIcon />),
        to: "network"
    },
]