import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.inputError : s.input// need to fix with (?:)

    return (
        <div className={s.container1}>
            <div className={s.block}>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onBlur={setNameCallback}
                       onKeyDown={onEnter}
                />
                <button onClick={addUser} className={s.button} disabled={!name}>add</button>
                <span>{totalUsers}</span>
            </div>
            <div>
                <div className={s.span}>{error}</div>
            </div>
        </div>
    )
}

export default Greeting
