import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useRequest } from '../hooks/useRequest'

const Module = () => {
    const {request} = useRequest()
    const profile = useSelector(({profile})=>profile)
    const params = useParams()
    React.useEffect(()=>{
        const module = async () =>{
            try{
                const getModule = await request(`/api/module/${params.code}`,'GET',null)
            }
            catch(err){
                console.log(err)
            }
        }
        module()
    },[])
    return (
        <div>
            Module
        </div>
    )
}

export default Module
