import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { setError, removeError } from '../actions/ui';
import { startRegisterWithEmailPasswordName } from '../actions/auth';

export const RegisterScreen = () => {
    const dispatch = useDispatch()
    const { msgError } = useSelector(state => state.ui)
    const [formValues, handleInputChange] = useForm({
        name: 'Diego armando silva facio',
        email: 'sfadiego@gmail.com',
        password: '123456',
        repeat_password: '123456'
    });
    const { name, email, password, repeat_password } = formValues;
    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
            // return console.log("valido y redirije")
        }
    }

    const isFormValid = () => {
        if (name.trim().length == 0) {
            dispatch(setError("name required"))
            return false;
        } else if (email.trim().length == 0 || !validator.isEmail(email)) {
            dispatch(setError("email not valid"))
            return false;
        } else if (password !== repeat_password || password.length <= 5) {
            dispatch(setError("password is not valid, or not match"))
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register user</h3>
            <form onSubmit={handleRegister}>

                {
                    msgError && <div className="auth__alert-error">
                        {msgError}
                    </div>
                }

                <input className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />

                <input className="auth__input"
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Repeat Password"
                    autoComplete="new-password"
                    name="repeat_password"
                    value={repeat_password}
                    onChange={handleInputChange}
                />
                <button className="btn btn-primary btn-block" type="submit" >
                    Registar
                </button>
                <Link className="link mt-5" to="/auth/login">
                    Already registered ?
                </Link>
            </form>
        </>
    )
}
