import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../assets/styles/Auth.module.css'
import {useRequest} from '../../hooks/useRequest'
import {useAuth} from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
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

    const signup = async () =>{
        try{
            if(input.email && input.text && input.password){
                const sign = await request('/api/auth/signup','POST',{
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
            <h1>Sign Up</h1>
            <div>
                <p className={styles.title}>e-mail</p>
                <input type="email" onChange={onInputHandler} value={input.email}/>
            </div>
            <div>
                <p className={styles.title}>username</p>
                <input type="text" onChange={onInputHandler} value={input.text}/>
            </div>
            <div>
                <p className={styles.title}>password</p>
                <input type="password" onChange={onInputHandler} value={input.password}/>
            </div>
            <button onClick={signup}>Sign Up</button>
            <div className={styles.question}>
                <p>Already have an account?</p>
                <Link to="/auth/signin">Sign In</Link>
            </div>
        </div>
    )
}

export default SignUp
