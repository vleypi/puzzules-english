import React from 'react'
import styles from '../../../assets/styles/Create.module.css'
import trashcan from '../../../assets/images/trashcan.svg'
import { useDispatch } from 'react-redux'
import { setCardDef, setCardTerm, setCardValue, setDeleteCard } from '../../../redux/actions/created'

const Card = React.memo(({card,index,created}) => {
    const dispatch = useDispatch()
    const inputTermRef = React.useRef()
    const inputDefRef = React.useRef()
    const [value,setValue] = React.useState({term: card.term,definition: card.definition})
    const onInputHandler = (name) =>{
        setValue({...value,[name.target.name]: name.target.value})
    } 
    React.useEffect(()=>{
        inputTermRef.current.addEventListener('blur',(e)=>{
            dispatch(setCardTerm(e.target.value,card.id))
        })
        inputDefRef.current.addEventListener('blur',(e)=>{
            dispatch(setCardDef(e.target.value,card.id))
        })
    },[])

    const [deleteAnimation,setDeleteAnimation] = React.useState(false)
    const deleteCard = (id) =>{
        setDeleteAnimation(true)
        setTimeout(()=>{
            dispatch(setDeleteCard(id))
        },500)
    }
    const disableCard = created.cards.length < 2
    
    return (
        <div className={styles.card} style={{opacity: deleteAnimation && 0}}>
                <div className={styles.indexCard}>
                    <h3>{index}</h3>
                    <button disabled={disableCard} onClick={()=>deleteCard(card.id)}>
                        <img src={trashcan} />
                    </button>
                </div>
                <div className={styles.settingCard}>
                    <div>
                        <input ref={inputTermRef} onChange={onInputHandler} value={value.term} placeholder='Enter term' name='term'/>
                        <p>term</p>
                    </div>
                    <div>
                        <input ref={inputDefRef} onChange={onInputHandler} value={value.definition} placeholder='Enter definition' name='definition'/>
                        <p>definition</p>
                    </div>
                </div>
        </div>
    )
})

export default Card
