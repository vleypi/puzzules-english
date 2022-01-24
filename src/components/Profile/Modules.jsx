import React from 'react'
import styles from '../../assets/styles/Profile.module.css'
import nomodules from '../../assets/images/noModules.svg'
import { useRequest } from '../../hooks/useRequest'
import LoaderProfile from '../Loaders/LoaderProfile'
import { Link } from 'react-router-dom'

const Models = ({query}) => {
    const {request} = useRequest()
    const [modules,setModules] = React.useState(null) 
    React.useEffect(()=>{
        const getModules = async () =>{
            try{
                const modules = await request(`/api/profile/${query.name}/${query.request}`,)
                setModules(modules.content)
            }
            catch(err){
                console.log(err)
            }
        }
        getModules()
    },[])

    const modulesProfile = modules && modules.map((item)=>(
        <Link to={`/module/${item.code}`} key={item.code}>
            <div>
                <h5>{item.terms} terms</h5>
                <p>{item.name}</p>
            </div>
        </Link>
    ))

    return (
        <>
            {modules === null ? <LoaderProfile /> :
                <>{modules.length === 0 ?
                    <section className={styles.profileContent}>
                        <img src={nomodules} />
                        <h3>You don't have modules yet</h3>
                        <p>Create your own modules here</p>
                        <button>Create</button>
                    </section> :
                    <section className={styles.profileModules}>
                        <div className={styles.dateSort}>
                            <h3>This week</h3>
                            <div className={styles.listItems}>
                                {modulesProfile}
                            </div>
                        </div>
                    </section>
                    }
                </>}
        </>
    )
}

export default Models
