import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
// import 'animate.css';

import { userService } from '../../services';
import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
} from 'next-share';

export default Login;

interface LoginProps {
    username: string,
    password: string
}

function Login() {
    const router = useRouter()
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async ({ username, password }: LoginProps) => {
        setIsSubmitting(true);
        try {
            await new Promise((r) => setTimeout(r, 2000));
            const response = { data: { token: 'abc' } }
            if (response.data.token) {
                userService.login(username, password);
                router.push('/');
            }
        } catch (error) {
            // setError(error?.response.data.message);
            setError('error');
            setIsSubmitting(false);
        }
    }

    return (
        <div className='h-screen'>
            <div className='grid grid-cols-2 h-custom'>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row'>
                        <div>
                            <h3>Sign in with</h3>
                        </div>
                        <div>
                            <FacebookShareButton
                                url={'http://localhost:3000'}
                                quote={'next-share is a social share buttons for your next React apps.'}
                                hashtag={'#nextshare'}
                            >
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={'https://github.com/next-share'}
                                title={'next-share is a social share buttons for your next React apps.'}
                            >
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                        </div>
                    </div>
                    <div className=''>
                        OR
                    </div>
                    <div>
                        <div className="w-full max-w-sm">
                            <Formik
                                initialValues={{ username: '', password: '' }}
                                onSubmit={handleSubmit}
                            >
                                {
                                    ({ handleChange, values }) => (
                                        <Form>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 font-medium mb-2">
                                                    Email
                                                </label>
                                                <Field
                                                    className="w-full border border-gray-400 p-2 rounded-md"
                                                    type="email"
                                                    name="username"
                                                    onChange={handleChange}
                                                    value={values.username}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 font-medium mb-2">
                                                    Password
                                                </label>
                                                <Field
                                                    className="w-full border border-gray-400 p-2 rounded-md"
                                                    type="password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    value={values.password}
                                                />
                                            </div>
                                            {error && <p className="text-red-600">{error}</p>}
                                            <div className='flex flex-row'>
                                                <div>row 1</div>
                                                <div>row 2</div>
                                            </div>
                                            <button
                                                className="bg-indigo-600 text-white py-2 px-4
                                    hover:cursor-pointer
                                    rounded-md hover:bg-indigo-700"
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                Sign in
                                            </button>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>
                        <div className="flex justify-center items-center h-full">
                            <ClipLoader
                                size={50}
                                color="#686769"
                                loading={isSubmitting}
                            />
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div>row 1</div>
                        <div>row 2</div>
                    </div>
                </div>
            </div>
            <footer>
                ABC
            </footer>
        </div>
    );
}