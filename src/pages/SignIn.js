import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '../components/yupSchema/schema';
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { MdVisibility, MdVisibilityOff, MdMailOutline } from "react-icons/md";
import ErrorSpan from '../components/uiComponents/ErrorSpan';
import Loader from '../components/uiComponents/Loader';
import axios from 'axios';
import { LOGIN_URL } from '../constants/api';
import AuthContext from '../components/context/AuthContext';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";



function SignIn() {
    const { setAuth } = React.useContext(AuthContext);

    const navigate = useNavigate();

    // react state
    const [isVisible, setIsVisible] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [error, setError] = React.useState(null)

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(signInSchema) });

    // handles password visibility  icon
    // on password icon click input type changes to text if visibility is on otherwise opposite 
    const handlePasswordVisibility = () => {
        setIsVisible((prevState) => !prevState)
    }


    // handles form submission, validates form and sends to api endpoint sign in request
    const handleFormSubmit = async (data) => {

        setIsSubmitting(true)
        try {

            const response = await axios.post(LOGIN_URL, data)

            if (response) {
                setAuth(response.data)
                toast.success("Signed in!")
                navigate("/")
            }

        } catch (error) {
            console.log(error)
            setError("Error: Could not log in, ")

        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <motion.section
            className=' my-12'
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{ duration: 0.4 }}
        >
            <Card className="max-w-sm mx-auto">
                <CardHeader className="mb-4 grid h-28 place-items-center bg-primary">
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-6"  >
                    {error && <ErrorSpan message={error} />}
                    <div>
                        <Input
                            {...register("email")}
                            label="email"
                            size="lg"
                            variant="standard"
                            color="cyan"
                            icon={<MdMailOutline size={20} />}
                        />
                        {errors.email && <ErrorSpan message={errors.email.message} />}
                    </div>
                    <div>
                        <Input
                            {...register("password")}
                            label="Password"
                            size="lg"
                            color="cyan"
                            variant="standard"
                            type={!isVisible ? "password" : "text"}
                            icon={!isVisible ?
                                <MdVisibilityOff
                                    size={20} onClick={handlePasswordVisibility} className="cursor-pointer" /> :
                                <MdVisibility size={20} onClick={handlePasswordVisibility} className="cursor-pointer" />}
                        />
                        {errors.password && <ErrorSpan message={errors.password.message} />}
                    </div>
                </CardBody>
                <CardFooter className="pt-0 mt-4">
                    <Button fullWidth className='bg-primary' onClick={handleSubmit(handleFormSubmit)}>
                        Sign In
                    </Button>
                    {isSubmitting && <Loader />}
                    <Typography variant="small" as="div" className="mt-6 flex justify-center">
                        Don't have an account?
                        <Typography
                            as="p"
                            variant="small"
                            className="ml-1 font-bold text-primary">
                            <Link to="/sign-up"> Sign Up</Link>
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </motion.section >

    )
}

export default SignIn