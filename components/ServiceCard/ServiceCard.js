import { Button } from '@material-ui/core'
import classes from './ServiceCard.module.css'

export default function ServiceCard() {
    return (
        <div className={classes.serviceCard}>
            <div className={classes.serviceImg}></div>
            <div className={classes.serviceContent}>
                <h2>النشاطات والفعاليات العلمية</h2>
                <p>
                    خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين
                    </p>
                <div className={classes.divider}></div>
                <div className={classes.serviceFooter}>
                    <Button className={classes.getServiceButton}>
                        أطلب الخدمة
                    </Button>
                </div>

            </div>
        </div>
    )
}
