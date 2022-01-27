import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import st from '../../p1-main/m1-ui/u1-app/App.module.css'
import s from './Greeting.module.css'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const user = {_id: v1(), name}

        setUsers([...users, user]) // need to fix
    }

    return (
        <div className={s.container}>
            <hr/>
            <div className={st.title}>homeworks 3</div>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
