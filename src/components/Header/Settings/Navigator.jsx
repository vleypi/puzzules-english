import React from 'react'
import styles from '../../../assets/styles/Header.module.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/images/logo.svg'
import Create from './Create'

const Navigator = () => {
    return (
        <div className={styles.contentHeader}>
            <Link to="/home"><img className={styles.logoSVG} src={logo} /></Link>
            <nav className={styles.nav}>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/community'>Community</NavLink>
                <Create styles={styles}/>
            </nav>
        </div>
    )
}

export default Navigator
