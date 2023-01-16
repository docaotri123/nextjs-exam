import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
// import 'animate.css';

import { userService } from '../../services';
import React from 'react';

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
        <div className="flex items-center h-screen bg-gray-100">
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
    );
}