import { useDispatch } from "react-redux"
import { Form } from "./Form"
import { setUser } from "../store/slice/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {
    const dispatch = useDispatch();
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch((setUser({
                    email: user.email,
                    id: user.id,
                    token: user.accessToken,
                })));
            })
            .catch(console.error)
    }
    return (
        <Form
            title="register"
            handleClick={handleRegister} />

    )
}

export { SignUp }