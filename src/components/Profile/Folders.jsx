import React from 'react'
import styles from '../../assets/styles/Profile.module.css'
import nofolders from '../../assets/images/nofolder.svg'
import { useRequest } from '../../hooks/useRequest'
import LoaderProfile from '../Loaders/LoaderProfile'

const Folders = ({query}) => {
    const {request} = useRequest()
    const [folders,setFolders] = React.useState(null) 
    React.useEffect(()=>{
        const getFolders = async () =>{
            try{
                const modules = await request(`/api/profile/${query.name}/${query.request}`,)
                setFolders(modules.content)
            }
            catch(err){
                console.log(err)
            }
        }
        getFolders()
    },[])

    
    return (
        <>
            {folders === null ?  <LoaderProfile /> :
                <>{folders.length === 0 ?
                    <section className={styles.profileContent}>
                        <img src={nofolders} />
                        <h3>You don't have folders yet</h3>
                        <p>Create your own folders here</p>
                        <button>Create</button>
                    </section> :
                    <section className={styles.profileModules}>
                        <div className={styles.dateSort}>
                            <h3>This week</h3>
                            <div className={styles.listItems}>
                                <div>
                                    <h5>5 terms</h5>
                                    <p>30</p>
                                </div>
                                <div>
                                    <h5>9 terms</h5>
                                    <p>29</p>
                                </div>
                                <div>
                                    <h5>12 terms</h5>
                                    <p>28</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    }
                </>}
        </>
    )
}

export default Folders
