import shortid from 'shortid'

const initialState = {
    name: '',
    description: '',
    user: '',
    cards: [
        {term: '', definition: '', id: 1},
        {term: '', definition: '', id: 2},
        {term: '', definition: '', id: 3},
        {term: '', definition: '', id: 4},
        {term: '', definition: '', id: 5}
    ],
    lastUpdate: null,
    _id: null,
    saves: {type: 'save'}
}

const created = (state=initialState,action) =>{
    if(action.type === 'CREATED_MODULE'){
        return{
            ...state,
            name: action.name,
            user: action.user,
            description: action.description,
            cards: action.cards,
            lastUpdate: new Date(action.lastUpdate).getTime(),
            _id: action._id
        }
    }
    else if(action.type === 'SET_CARD_TERM'){
        const index = state.cards.findIndex(item => item.id === action.id)
        const cards = [...state.cards]
        cards[index].term = action.term
        return{
            ...state,
            cards,
            saves: {type: 'term'}
        }
    }
    else if(action.type === 'SET_CARD_DEF'){
        const index = state.cards.findIndex(item => item.id === action.id)
        const cards = [...state.cards]
        cards[index].definition = action.definition
        return{
            ...state,
            cards,
            saves: {type: 'def'}
        }
    }
    else if(action.type === 'SET_TITLE_VALUE'){
        return{
            ...state,
            name: action.title,
            saves: {type: 'title'}
        }
    }
    else if(action.type === 'SET_DESC_VALUE'){
        return{
            ...state,
            description: action.description,
            saves: {type: 'desc'}
        }
    }
    else if(action.type === 'SET_ADD_CARD'){
        let newId = shortid.generate().toLowerCase()
        if(state.cards.find(item => item.id ==- newId)){
            newId = shortid.generate().toLowerCase()
        }
        return{
            ...state,
            cards: [...state.cards,{term: '', definition: '', id: newId}],
            saves: {type: 'add'}
        }
    }
    else if(action.type === 'SET_DELETE_CARD'){
        let deleteCard = state.cards.filter(items=>items.id !== action.deleteCard)
        return{
            ...state,
            cards: deleteCard,
            saves: {type: 'delete'}
        }
    }
    else if(action.type === 'SET_SAVE'){
        return{
            ...state,
            saves: {type: 'save'},
            lastUpdate: action.lastUpdate
        }
    }
    return state
}

export const setCreatedModule = (createdModule) =>({
    type: 'CREATED_MODULE',
    name: createdModule.name,
    user: createdModule.user,
    description: createdModule.description,
    cards: createdModule.cards,
    lastUpdate: createdModule.lastUpdate,
    _id: createdModule._id
})

export const setCardTerm = (term,id) =>({
    type: 'SET_CARD_TERM',
    term,
    id
})

export const setCardDef = (definition,id) =>({
    type: 'SET_CARD_DEF',
    definition,
    id
})

export const setCardTitle = (title) =>({
    type: 'SET_TITLE_VALUE',
    title
})

export const setCardDesc = (description) =>({
    type: 'SET_DESC_VALUE',
    description
})

export const setSave = (lastUpdate) =>({
    type: 'SET_SAVE',
    lastUpdate
})
export const setAddCard = () =>({
    type: 'SET_ADD_CARD',
})

export const setDeleteCard = (deleteCard) =>({
    type: 'SET_DELETE_CARD',
    deleteCard
})




export default created