import React from 'react'
import styles from '../../assets/styles/Header.module.css'
import Navigator from './Settings/Navigator'
import User from './Settings/User'
import { useSelector } from 'react-redux'
import Sign from './Settings/Sign'



const Header = () => {
    const profile = useSelector(({profile})=>profile)
    return (
        <div className={styles.header}>
            <Navigator />
            {profile.JWT ? <User profile={profile}/> : <Sign />}
        </div>
    )
}

export default Header
