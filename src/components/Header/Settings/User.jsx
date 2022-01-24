import React from 'react'
import styles from '../../../assets/styles/Header.module.css'
import { useNavigate } from 'react-router-dom'
import avatar from '../../../assets/images/blue.png'

const Profile = ({profile}) => {
    const route = useNavigate()
    const [panel,setPanel] = React.useState(false)
    const ref = React.useRef()

    const onPanelHadnler = () =>{
        setPanel(!panel)
        window.addEventListener('click',onPanelTogle)
    }

    const onPanelTogle = (click) =>{
        if(!click.path.includes(ref.current)){
            setPanel(false)
            window.removeEventListener('click',onPanelTogle)
        }
    }

    const onRouteHandler = (path) =>{
        route(path)
    }

    return (
        <div ref={ref} className={styles.contentHeader} onClick={onPanelHadnler}>
            <p className={styles.nick}>{profile.name}</p>
            <div className={styles.user}>
                <img src={avatar} />
            </div>
            {panel && 
                <div className={styles.panel}>
                    <ul>
                        <li onClick={()=>onRouteHandler(`/${profile.name}/modules`)}>Profile</li>
                        <li>Night theme</li>
                        <li>Invite friends</li>
                        <li>Supporting</li>
                        <li>Settings</li>
                        <li className={styles.logoutLI}>Log out</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Profile
