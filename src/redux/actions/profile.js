

const initialState = {
    JWT: null,
    id: null,
    name: null,
    email: null,
    premium: false,
    isActivated: true,
    shortid: null,
    country: null,
}

const profile = (state=initialState,action) =>{
    if(action.type === 'SET_PROFILE'){
        return{
            ...state,
            JWT: action.JWT,
            id: action.id,
            name: action.name,
            email: action.email,
            premium: action.premium,
            isActivated: action.isActivated
        }
    }
    return state
}

export const setProfile = (JWT,id,name,email,premium,isActivated) =>({
    type: 'SET_PROFILE',
    JWT,
    id,
    name,
    email,
    premium,
    isActivated,
})

export const setProfileThunk = (JWT,id) => (dispatch) =>{
    console.log(JWT)
    fetch('/api/auth/profile',{
        method: 'GET',
        body: null,
        headers:{
            auth: 'Bearer ' + JWT,
            "Content-Type": "application/json"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        if(data.message == 'Unauthorized'){
            fetch('/api/auth/refresh',{method:'GET',body: null}).then((res)=>res.json())
            .then((ref)=>{
                if(ref.message === 'UnauthorizedRefresh'){
                    localStorage.removeItem('data')
                    dispatch(setProfile(null,null,null,null,null,null))
                }
                else if(!ref.message){
                    fetch('/api/auth/profile',{
                        method: 'GET',
                        body: null,
                        headers:{
                            auth: 'Bearer ' + ref.JWT,
                            "Content-Type": "application/json"
                        }
                    })
                    .then((res)=>res.json())
                    .then((data)=>{
                        localStorage.setItem('data',JSON.stringify({
                            id: ref.id,
                            JWT: ref.JWT
                        }))
                        dispatch(setProfile(JWT,id,data.name,data.email,data.premium,data.isActivated))

                    })
                }
            })
        }
        else{
            dispatch(setProfile(JWT,id,data.name,data.email,data.premium,data.isActivated))
            localStorage.setItem('avatar',JSON.stringify(data.avatar))
        }
    })
}



export default profile