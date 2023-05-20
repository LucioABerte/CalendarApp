import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store"


export const useAuthStore = () => {
    
    const dispatch = useDispatch()

    const { status, user, errorMessage} = useSelector(state => state.auth)
    
    const startLogin = async( { email, password} ) => {
        
        dispatch( onChecking() )

        try {
            
            const { data } = await calendarApi.post( "/auth", { email, password} )
            localStorage.setItem( 'token', data.token )
            localStorage.setItem( 'token-init-date', new Date().getTime() )
            dispatch( onLogin({ name: data.name, uid: data.uid}) )

        } catch (error) {
            dispatch( onLogout( "Credenciales Incorrectas" ) )
            setTimeout( () => {
                dispatch( clearErrorMessage() )
            }, 10 )
        }
    }

    return {
        // Propiedades 
        status,
        user,
        errorMessage,

        // Metodos
        startLogin,
    }
}