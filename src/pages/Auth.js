import React from 'react'
import styles from '../assets/styles/Auth.module.css'
import SignIn from '../components/Auth/SignIn'
import SignUp from '../components/Auth/SignUp'
import { useParams } from 'react-router-dom'
import phone from '../assets/images/perPhone.svg'

const Auth = () => {
    const {path} = useParams()
    const conditinal = path === 'signin' && <SignIn /> || path === 'signup' && <SignUp />
    return (
        <div className={styles.auth}>
            {conditinal}
            <img src={phone} />
        </div>
    )
}

export default Auth
