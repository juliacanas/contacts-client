import React, { useContext } from 'react';
import { useForm } from "react-hook-form";

import { AuthContext } from '../../context/auth/authContext';
import styles from './LoginPage.module.scss';
import backgroundImage from '../../assets/minimal.jpg'


export default function LoginPage() {
    const { register, handleSubmit, errors } = useForm();
    const { error, authenticate } = useContext(AuthContext);

    const onSubmit = data => {
        authenticate(data)
    };
    return (
        <div className={styles.container}>
            <section 
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover", width: '70vw'
                }}
          />

            <section className={styles.login}>
                <h1>Contacts App</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete='off' className={styles.form}>
                    <input
                        className={styles.input}
                        placeholder='Email'
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
                    {errors.email && <p className={styles.error}>{errors.email.message ? errors.email.message : 'This field is required'}</p>} 

                    <input
                        className={styles.input}
                        placeholder='Password'
                        type="password"
                        name="password"
                        ref={register({ required: "Enter your password" })}
                    />
                    {errors.password && <p className={styles.error}>{errors.password.message}</p>}

                    <label className={styles.checkbox}>
                        <input
                            
                            type='checkbox'
                            name='remember'
                            ref={register}
                        />
                        Remember me
                    </label>
                    {error !== null ? <p className={styles.error}>{error}</p> : <></>}
                    <button type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}
