import {useCallback,useEffect,useState } from "react";
import {setProfileThunk,setProfile} from '../redux/actions/profile'
import { useDispatch } from "react-redux";


export const useLocalSt = () =>{
    const [isAuth,setIsAuth] = useState(false)
    const dispatch = useDispatch()
    const logoutAuth = useCallback(()=>{
        dispatch(setProfile(null))
        localStorage.removeItem('data')
    },[])
    useEffect(()=>{
        let data = eval('[' + localStorage.getItem('data') + ']')[0]
        if(data && data.JWT){
            setIsAuth(true)
        }
        else{
            logoutAuth()
        }
    },[])
    return {isAuth}
}
