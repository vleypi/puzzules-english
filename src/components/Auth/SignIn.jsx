import React from 'react'
import styles from '../../assets/styles/Auth.module.css'
import { Link } from 'react-router-dom'
import {useRequest} from '../../hooks/useRequest'
import {useAuth} from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const {request} = useRequest()
    const {loginAuth} = useAuth()
    const route = useNavigate()
    const [input,setInput] = React.useState({
        email: '',
        text: '',
        password: ''
    })

    const onInputHandler = (text) =>{
        setInput({...input,[text.target.type]: text.target.value})
    }

    const signin = async () =>{
        try{
            if(input.email && input.password){
                const sign = await request('/api/auth/signin','POST',{
                    email: input.email,
                    name: input.text,
                    password: input.password
                })
                await loginAuth(sign.JWT, sign.id)
                setInput({email: '',text: '',password: ''})
                route('/home')
            }
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className={styles.signUp}>
            <h1>Sign In</h1>
            <div>
                <p className={styles.title}>e-mail</p>
                <input type="email" onChange={onInputHandler} value={input.email}/>
            </div>
            <div>
                <p className={styles.title}>password</p>
                <input type="password" onChange={onInputHandler} value={input.password}/>
            </div>
            <button onClick={signin}>Sign In</button>
            <div className={styles.question}>
                <p>Don't have an account?</p>
                <Link to="/auth/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default SignIn
