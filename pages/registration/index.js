import React from 'react'
import RegistrationChoice from '../../components/Registration/RegistrationChoice'
import RegistartionLayout from '../../layouts/Registration/RegistrationLayout'
const choices =[ 
    {
        "img":'/animations/researcher.json',
        "title":"أريد نشر أبحاثي",
        "description":"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين",
        "type":"individual",
        "buttonLabel":"سجل كباحث",
        "link":"/registration/researcher",
    },
    {
        "img":'/animations/center.json',
        "title":"مركز أبحاث ودراسات",
        "description":"خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين",
        "type":"center",
        "buttonLabel":"سجل كمركز بحثي",
        "link":"/registration/research-center"
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
