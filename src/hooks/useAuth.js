import {useCallback,useEffect,useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {setProfileThunk,setProfile} from '../redux/actions/profile'


export const useAuth = () =>{
    const dispatch = useDispatch()
    const loginAuth = useCallback((JWT,id)=>{
        localStorage.setItem('data',JSON.stringify({
            id,
            JWT
        }))
        dispatch(setProfileThunk(JWT,id))
    },[])
    const logoutAuth = useCallback(()=>{
        dispatch(setProfile(null,null,null,null,null,null))
        localStorage.removeItem('data')
    },[])

    useEffect(()=>{
        let data = eval('[' + localStorage.getItem('data') + ']')[0]
        if(data && data.JWT && data.id){
            loginAuth(data.JWT,data.id)
        }
        else{
            logoutAuth()
        }
    },[])
    return {loginAuth}
}
