import React, { useState, useEffect } from 'react';
import { auth, addErrorMessage } from '../redux/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../component/Spinner';

function UserForm() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.isLoading)
    const errorMessage = useSelector(state => state.auth.errorMessage)
    const [showPassword, setShowPassword] = useState(false);
    const [newUser, setNewUser] = useState(false)
    const [userInput, setUserInput] = useState({
        email: '',
        password: ''
    })
    const [userError, setUserError] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        })
        resetError();
        dispatch(addErrorMessage(''))
    }

    const resetError = () => {
        setUserError({
            ...userError,
            email: '',
            password: ''
        })

    }

    const inputValidation = () => {
        let flag = true
        if (userInput.password.length < 6) {
            setUserError({
                ...userError,
                password: 'Minimum 6 character'
            })

            flag &&= false
        }

        // eslint-disable-next-line
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const isEmail = regex.test(userInput.email)
        if (!isEmail) {
            setUserError({
                ...userError,
                email: 'Please provide a valid email address.'
            })

            flag &&= false
        }

        return flag
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (inputValidation()) {
            dispatch(auth({ ...userInput, newUser }))
        }
    }

    useEffect(() => {
        switch (errorMessage) {
            case 'EMAIL_NOT_FOUND':
                setUserError({
                    ...userError,
                    email: "Email not found"
                })
                break;

            case 'INVALID_PASSWORD':
                setUserError({
                    ...userError,
                    password: 'The password is invalid'
                })
                break;

            case 'EMAIL_EXISTS':
                setUserError({
                    ...userError,
                    email: 'The email address is already in use by another account.'
                })
                break;

            default:
                setUserError({
                    ...userError,
                    email: errorMessage
                })
                break;
        }
        // eslint-disable-next-line
    }, [errorMessage])

    if (loading) {
        return (
            <Spinner />
        )
    } else {
        return (
            <div className='d-flex justify-content-center align-items-center min-vh-100 bg-light'>
                <form onSubmit={e => handleSubmit(e)} className="border p-5 bg-white rounded shadow-lg">
                    <h4 className='text-center font-monospace'>{newUser ? "Sign up" : "Sing in"}</h4>
                    <div className="mt-3">
                        <input type="email"
                            value={userInput.email}
                            name="email"
                            onChange={e => handleInputChange(e)}
                            className={userError.email ? "form-control is-invalid" : "form-control"}
                        />
                        <div className="invalid-feedback">
                            {userError.email}
                        </div>
                    </div>
                    <div className="mt-3">
                        <input type={showPassword ? "text" : "password"}
                            value={userInput.password}
                            name="password"
                            onChange={e => handleInputChange(e)}
                            className={userError.password ? "form-control is-invalid" : "form-control"}
                        />
                        <div className="invalid-feedback">
                            {userError.password}
                        </div>
                    </div>
                    <div className='mt-3'>
                        <input type="checkbox" className='form-check-input'
                            onChange={() => setShowPassword(!showPassword)} id="checkBox" />
                        <label htmlFor="checkBox" className='form-check-label ms-3'>Show password</label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <button className='btn d-inline-block btn-primary' type='submit'>Submit</button>
                        <button className='btn d-inline-block' onClick={() => { setNewUser(!newUser); resetError(); }}
                            type='button'>
                            {newUser ? "Sign in" : "Create Account"}
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserForm