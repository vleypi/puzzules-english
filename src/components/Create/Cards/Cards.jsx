import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../../assets/styles/Create.module.css'
import { useRequest } from '../../../hooks/useRequest'
import { setAddCard } from '../../../redux/actions/created'
import Card from './Card'

const Cards = ({profile,dispatch}) => {
    const created = useSelector(({created})=>created)
    const cardsMap = created.cards.map((card,index)=>
        <Card 
            key={card.id} 
            card={card} index={index+1}
            created={created}
        />
    )

    const [possibleError,setPossibleError] = React.useState('+ Add new card')
    const addCard = () =>{
        if(created.cards[created.cards.length - 1].term || created.cards.length < 5){
            dispatch(setAddCard())
        }
        else{
            setPossibleError('Fill in the latest cards!')
            setTimeout(()=>{
                setPossibleError('+ Add new card')
            },2000)
        }
    }
    return (
        <section className={styles.cards}>
            {cardsMap}
            <button 
                disabled={possibleError === 'Fill in the latest cards!'} 
                onClick={addCard} className={styles.addNewCard}
            >
                {possibleError}
            </button>
        </section>
    )
}

export default Cards
