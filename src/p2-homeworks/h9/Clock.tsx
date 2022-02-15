import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)
    const [showTime, setShowTime] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
        setShowTime(false)
    }
    const start = () => {
        stop()
        setShowTime(true)
        const id: number = +setInterval(() => {
            setDate(new Date())

        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString() || <br/>
    const stringDate = date?.toLocaleDateString() || <br/>

    return (
        <div className={s.containerClock}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {showTime && <div>Time: {stringTime}</div>}
                {!showTime && <div className={s.stopTime}>Time: {stringTime}</div>}
            </div>

            {show ? (
                <div>
                    Date: {stringDate}
                </div>
            ) : (
                <br/>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
        </div>
    )
}

export default Clock
