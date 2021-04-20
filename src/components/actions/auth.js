import { firebase, googleAuthProvider } from '../../firebase/firebase-config';
import { setError } from './ui'
import { types } from "../../types/types"
//engloba todo el action-payload para mandarse al dispatch

export const startLoginEmailPassword = (email, password) => {
    //peticion asincrona
    return (dispatch) => {
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                return dispatch(login(user.uid, user.displayName))
            }).catch(err => {
                console.log(err)
            })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispatch(login(user.uid, name))
            })
            .catch(({ message }) => dispatch(setError(message)))
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                const { uid, displayName } = user;
                dispatch(login(uid, displayName))
            }).catch(err => {
                // console.log(err)
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