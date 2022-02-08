import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import s from '../../../p1-main/m1-ui/u1-app/App.module.css'
import HW6 from "../../h6/HW6";

function PreJunior() {
    return (
        <div className={s.container}>
            <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>
            <HW6/>
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз