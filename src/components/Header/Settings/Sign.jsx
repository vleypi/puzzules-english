import React from 'react'
import styles from '../../../assets/styles/Header.module.css'
import { useNavigate } from 'react-router-dom'

const Sign = () => {
    const route = useNavigate()
    const onRoute = (path) =>{
        route(`/auth/${path}`)
    }
    return (
        <div className={styles.signBtn}>
            <button onClick={()=>onRoute('signin')}>
                Sign in
            </button>
            <button onClick={()=>onRoute('signup')}>
                Sign up
            </button>
        </div>
    )
}

export default Sign
