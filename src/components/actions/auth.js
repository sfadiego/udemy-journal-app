import Swal from 'sweetalert2'
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';
import { setError, uiFinishLoading, uiStartLoading } from './ui'
import { types } from "../../types/types"

//engloba todo el action-payload para mandarse al dispatch
export const startLoginEmailPassword = (email, password) => {
    //peticion asincrona
    return (dispatch) => {
        dispatch(uiStartLoading())
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(uiFinishLoading())
                return dispatch(login(user.uid, user.displayName))
            }).catch(({ message }) => {

                Swal.fire({ icon: 'error', title: message });
                dispatch(uiFinishLoading())
                dispatch(setError(message))
            })

    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    //peticion asincrona 
    return (dispatch) => {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispatch(login(user.uid, name))
            })
            .catch(({ message }) => {
                Swal.fire({ icon: 'error', title: message });
                dispatch(setError(message))
            })
    }
}

export const startGoogleLogin = () => {
    //peticion asincrona 
    return (dispatch) => {
        firebase.auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                const { uid, displayName } = user;
                dispatch(login(uid, displayName))
            }).catch(err => {
                console.log(err)
            })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})


export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = () => ({ type: types.logout })