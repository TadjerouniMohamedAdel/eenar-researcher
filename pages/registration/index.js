import React from 'react'
import RegistrationChoice from '../../components/Registration/RegistrationChoice'
import RegistartionLayout from '../../layouts/Registration/RegistrationLayout'
const choices =[ 
    {
        "img":"/images/researcher_registration.png",
        "title":"أريد نشر أبحاثي",
        "description":"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين",
        "type":"individual",
        "buttonLabel":"سجل كباحث"
    },
    {
        "img":"/images/research_center_registration.png",
        "title":"مركز أبحاث ودراسات",
        "description":"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين",
        "type":"center",
        "buttonLabel":"سجل كمركز بحثي"
    }
]

export default function registration() {
    return (
        <RegistartionLayout>
            {
                choices.map((choice,idx)=>(
                    <RegistrationChoice choice={choice} key={`choice-${idx}`} />
                ))
            }
        </RegistartionLayout>
    )
}
