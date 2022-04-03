import { Form } from "./Form"
import { useDispatch } from "react-redux"
import { setUser } from "../store/slice/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const {push} = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.id,
                    token: user.accessToken,
                }));
                push('/homePage');
            })
            .catch(() => alert('Invalid user!'))
    }
    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    )
}

export { Login }