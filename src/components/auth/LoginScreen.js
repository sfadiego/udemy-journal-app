import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPassword, startGoogleLogin } from '../actions/auth'
import validator from 'validator';
import { removeError, setError } from '../actions/ui';

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const { msgError, loading } = useSelector(state => state.ui)
    
    const [formValues, handleInputChange] = useForm({
        email: 'sfadiego@gmail.com',
        password: '123456'
    });
    const { email, password } = formValues;
    const handleLogin = (e) => {
        e.preventDefault();
        if (isValid()) {
            dispatch(startLoginEmailPassword(email, password))
        }
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    const isValid = () => {

        if (email.trim().length === 0) {
            dispatch(setError("Email required"));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError("type a valid email"));
            return false;
        } else if (password.trim().length === 0) {
            dispatch(setError("ingresa password valido"));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                {
                    msgError && <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
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
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <button disabled={loading} className="btn btn-primary btn-block" type="submit" >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className="link" to="/auth/register">
                    Create new Account
                </Link>
            </form>
        </>
    )
}
