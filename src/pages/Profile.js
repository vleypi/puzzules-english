import React from 'react'
import styles from '../assets/styles/Profile.module.css'
import avatar from '../assets/images/blue.png'
import { useParams } from 'react-router-dom'
import Modules from '../components/Profile/Modules'
import { Link } from 'react-router-dom'
import Folders from '../components/Profile/Folders'

const Profile = () => {
    const query = useParams()
    const routeRequest = query.request === 'modules' && <Modules query={query}/> || query.request === 'folders' && <Folders query={query}/>
    return (
        <div className={styles.profile}>
            <section className={styles.userProfile}>
                <img src={avatar}/>
                <h1>{query.name}</h1>
            </section>
            <section className={styles.modules}>
                <nav className={styles.profileNav}>
                    <Link to={`/${query.name}/modules`}>Modules</Link>
                    <Link to={`/${query.name}/folders`}>Folders</Link>
                </nav>
            </section>
            {routeRequest}
        </div>
    )
}

export default Profile
