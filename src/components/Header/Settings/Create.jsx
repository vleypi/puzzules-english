import React from 'react'
import { useNavigate } from "react-router-dom";

const Create = ({styles}) => {
    const route = useNavigate()
    const routeTo = () =>{
        route('/create-module')
    }
    return (
        <button onClick={routeTo} className={styles.create}>
            Create
        </button>
    )
}

export default Create
