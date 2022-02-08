import React, {MouseEventHandler, useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import st from "../../p1-main/m1-ui/u1-app/App.module.css";
import s from "./localStorage/HW6.module.css";

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ""))
    }

    return (
        <div className={s.background}>

            <hr/>
            <div className={st.title}> homeworks 6</div>
            {/*should work (должно работать)*/}
            <div className={s.block}>
                <div >
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                    />

                </div>
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>

        </div>
    )
}

export default HW6
