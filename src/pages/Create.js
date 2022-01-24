import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../assets/styles/Create.module.css'
import CreateContainer from '../components/Create/CreateContainer'

const Create = () => {
    const profile = useSelector(({profile})=>profile)
    return (
        <div className={styles.create}>
            <CreateContainer profile={profile}/>
        </div>
    )
}

export default Create
