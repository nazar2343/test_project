import axios from "axios";
import { useEffect, useState } from "react";

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    // const [get, setGet] = useState('')

    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/${get}`)
    //     .then(res => {
    //         setGet(res.data)
    //     }, [get])
    // })

    return (
        <div>
            <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email'
            />
            <input
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder='password'
            />
            <button onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </div>
    )
}

export { Form }