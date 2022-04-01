import { useSelector } from "react-redux";

export function useAuth() {
     const {userName, password, signIn} = useSelector(state = state.user)
     return {
          isAuth: !!userName,
          userName,
          password,
          signIn,
     }

}