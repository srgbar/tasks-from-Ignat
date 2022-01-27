import React, {useState} from 'react'
import Message, {MessagePropsType} from "./Message";
import s from "./Message.module.css";
import st from '../../p1-main/m1-ui/u1-app/App.module.css'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Victor',
    message: 'Ты сегодня учил React?',
    time: '22:00',
}

function HW1() {
    return (
        <div className={s.background}>
            <hr/>
            <div className={st.title}>homeworks 1</div>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
