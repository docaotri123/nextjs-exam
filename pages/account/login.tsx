import Layout from '../../components/layout/layout';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';

import { userService } from '../../services';
import React from 'react';

export default Login;

interface LoginProps {
    username: string,
    password: string
}

function Login() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    async function onSubmit({ username, password }: LoginProps) {
        await userService.login(username, password);
        // get return url from query parameters or default to '/'
        router.push('/');
    }

    return (
        <Layout>
            <div className="card">
                <h4 className="card-header">Login</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" name="username" {...register('username')}
                                className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            {/* <div className="invalid-feedback">{errors.username?.message}</div> */}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password"  {...register('password')}
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            {errors.password && <div className="invalid-feedback">{errors.password?.message}</div>}
                        </div>
                        <button disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Click Login
                        </button>
                        <Link href="/account/register" className="btn btn-link">Register</Link>
                    </form>
                </div>
            </div>
        </Layout>
    );
}