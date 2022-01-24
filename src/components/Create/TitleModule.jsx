import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../assets/styles/Create.module.css'
import { useDispatch } from 'react-redux'
import created, { setCardTitle,setCardDesc } from '../../redux/actions/created'

const TitleModule = () => {
    const created = useSelector(({created})=>created)
    const dispatch = useDispatch()
    const inputTitleRef = React.useRef()
    const inputDescRef = React.useRef()
    const [value,setValue] = React.useState({name: created.name, description: created.description})
    const onInputHandler = (name) =>{
        setValue({...value,[name.target.name]: name.target.value})
    } 
    React.useEffect(()=>{
        inputTitleRef.current.addEventListener('blur',(e)=>{
            dispatch(setCardTitle(e.target.value))
        })
        inputDescRef.current.addEventListener('blur',(e)=>{
            dispatch(setCardDesc(e.target.value))
        })
    },[])
    React.useEffect(()=>{
        setValue({name: created.name, description: created.description})
    },[created.name,created.description])
    return (
        <section className={styles.setName}>
            <div className={styles.title}>
                <input ref={inputTitleRef} onChange={onInputHandler} name='name' value={value.name} type='text' placeholder='Enter a title'/>
                <p>Title</p>
            </div>
            <div className={styles.desc}>
                <input ref={inputDescRef} onChange={onInputHandler} name='description' value={value.description} type='text' placeholder='Add a description'/>
                <p>Description</p>
            </div>
        </section>
    )
}

export default TitleModule
