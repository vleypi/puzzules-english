import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from '../../assets/styles/Create.module.css'
import { useRequest } from '../../hooks/useRequest'
import { setSave } from '../../redux/actions/created'

const CreateButton = ({profile}) => {
    const {request} = useRequest()
    const created = useSelector(({created})=>created)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [possibleError,setPossibleError] = React.useState('')

    const save = async () =>{
        try{
            if(profile.JWT && created.saves.type !== 'save'){
                const save = await request('/api/module/save-changes','POST',{created},{auth: 'Bearer '+profile.JWT})
                dispatch(setSave(save.lastUpdate))
            }
            else{
                setPossibleError('You have already saved it!')
                    setTimeout(()=>{
                        setPossibleError('')
                },3000)
            }
        }
        catch(err){
            console.log(err)
        }
    }

    const create = async () =>{
        try{
            const showError = (err) =>{
                setPossibleError(err)
                setTimeout(()=>{
                        setPossibleError('')
                },3000)
            }
            for(let i=0;i<created.cards.length;i++){
                if(!created.name){
                    return showError("Module doesn't have a name!")
                }
                if(!created.cards[i].term || !created.cards[i].definition){
                    return showError('Not all modules are written!')
                }
            }
            const module = await request('/api/module/create-module','POST',{created},{auth: 'Bearer '+profile.JWT})
            navigate('/module/'+module.moduleCard.code)
        }
        catch(err){
            console.log(err)
        }
    }

    const [lastUpdate,setLastUpdate] = React.useState('')
    
    React.useEffect(()=>{ 
            const updateTime = () =>{
                let timeDiff =  Math.abs((created.lastUpdate || Date.now()) - Date.now())
                if(timeDiff > 60000 * 60 * 23){
                    setLastUpdate(`${(timeDiff / (1000 * 60 * 60 * 24)).toFixed()} day(s) ago`)
                }
                else if(timeDiff > 60000 * 60){
                    setLastUpdate(`${(timeDiff / (1000 * 60 * 60)).toFixed()} hour(s) ago`)
                }
                else if(timeDiff > 60000){
                    setLastUpdate(`${(timeDiff / (1000 * 60)).toFixed()} minute(s) ago`)
                }
                else if(timeDiff === 0){
                    setLastUpdate('')
                }
                else if(timeDiff < 60000){
                    setLastUpdate('just now')
                }
            } 
            updateTime()
    },[created.lastUpdate])
    
    return (
        <section className={styles.createH1Btn}>
            <div>
                <h1>Create a new module</h1>
                <p>{lastUpdate}</p>
            </div>
            <div>
                <div>
                    <button onClick={save} className={styles.saveBtn}>Save</button>
                    <button onClick={create} className={styles.createBtn}>Create</button>
                </div>
                <p>{possibleError}</p>
            </div>
        </section>
    )
}

export default CreateButton
