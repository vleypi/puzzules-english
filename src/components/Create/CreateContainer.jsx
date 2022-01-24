import React from 'react'
import CreateButton from './CreateButton'
import TitleModule from './TitleModule'
import Cards from './Cards/Cards'
import { useDispatch } from 'react-redux'
import {useRequest} from '../../hooks/useRequest'
import { setCreatedModule } from '../../redux/actions/created'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const CreateContainer = ({profile}) => {
    const {request} = useRequest()
    const dispatch = useDispatch()
    const location = useLocation()
    React.useEffect(()=>{
        const create = async () =>{
            try{
                if(profile.JWT){
                    window.onbeforeunload = () =>{
                        return true
                    }
                    const createModule = await request('/api/module/create-module-check','POST',null,{auth: 'Bearer '+profile.JWT})
                    dispatch(setCreatedModule(createModule.createdCheck))
                }
            }
            catch(err){
                console.log(err)
            }
        }
        create()
    },[profile.JWT])

    React.useEffect(()=>{
        window.onbeforeunload = () =>{
            return true
        }
    },[location.pathname])

    return (
        <div>
            <CreateButton profile={profile}/>
            <TitleModule profile={profile}/>
            <Cards dispatch={dispatch} profile={profile}/>
        </div>
    )
}

export default CreateContainer
