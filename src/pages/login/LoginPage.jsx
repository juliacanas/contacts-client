import React, { useContext } from 'react';
import { useForm } from "react-hook-form";

import { AuthContext } from '../../context/auth/authContext';
import styles from './Login.module.scss';
import backgroundImage from '../../assets/dan-cristian-padure-Ieq6iLAH-xA-unsplash.jpg'

export default function LoginPage() {
    const { register, handleSubmit, errors } = useForm();
    const { error, authenticate } = useContext(AuthContext);

    const onSubmit = data => {
        authenticate(data)
    };
    return (
        <div className={styles.container}>
            <section style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", width: '60vw'}}/>

            <section>
                <h1>Contacts App</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off'>
                    <input
                        type="email"
                        name="email"
                        ref={register({
                            required: "Enter your e-mail",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Enter a valid e-mail address",
                            },
                        })}
                    />
                    {errors.email && <span>{errors.email.message ? errors.email.message : 'This field is required'}</span>} 

                    <input
                        type="password"
                        name="password"
                        ref={register({ required: "Enter your password" })}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}

                    <label>
                        <input
                            type='checkbox'
                            name='remember'
                            ref={register}
                        />
                        Remember me
                    </label>
                    {error !== null ? <div>{error}</div> : <></>}
                    <button type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}
