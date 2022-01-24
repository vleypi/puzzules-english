import React from 'react'
import styles from '../assets/styles/Home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
            <h5 className={styles.heading}>My recent activities:</h5>
            <div className={styles.nothave}>
                <h3>You don't have modules yet</h3>
                <p>Create your own modules <span>here</span></p>
            </div>
        </div>
    )
}

export default Home
