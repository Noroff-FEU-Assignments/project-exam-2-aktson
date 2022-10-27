import React from 'react'
import axios from 'axios';
import { REGISTER_URL } from '../constants/api';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../components/yupSchema/schema';
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { MdVisibility, MdVisibilityOff, MdMailOutline, MdPersonOutline, MdImage } from "react-icons/md";
import ErrorSpan from '../components/uiComponents/ErrorSpan';
import { toast } from 'react-toastify';
import Loader from '../components/uiComponents/Loader';
import { motion } from "framer-motion"


function SignUp() {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(signUpSchema) });

    const [isVisible, setIsVisible] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    // handles password visibility  icon
    // on password icon click input type changes to text if visibility is on otherwise opposite 
    const handlePasswordVisibility = () => {
        setIsVisible((prevState) => !prevState)
    }

    // handles form submission, validates form and sends to api endpoint sign in request
    const handleFormSubmit = async (data) => {
        setIsSubmitting(true)

        try {
            const response = await axios.post(REGISTER_URL, data)

            if (response) {
                toast.success("Successfully registered!")
                console.log(response.data)
            }

        } catch (error) {
            console.log(error)
            toast.error("Could not be regitered")
        }
        finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.section
            className='my-12 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Card className="max-w-lg mx-auto">
                <CardHeader className="mb-4 grid h-28 place-items-center bg-primary">
                    <Typography variant="h3" color="white">
                        Sign Up
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-6">
                    <div className='flex justify-between gap-6 flex-col lg:flex-row'>
                        <div className='w-full'>
                            <Input {...register("name")} label="name *" size="lg" variant="standard" color="cyan" icon={<MdPersonOutline size={20} />} />
                            {errors.name && <ErrorSpan message={errors.name.message} />}
                        </div>
                        <div className='w-full'>
                            <Input {...register("email")} label="Email *" size="lg" variant="standard" color="cyan" icon={<MdMailOutline size={20} />} />
                            {errors.email && <ErrorSpan message={errors.email.message} />}
                        </div>
                    </div>
                    <div>
                        <Input
                            {...register("password")}
                            label="Password *"
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
                    <div>
                        <Input
                            {...register("avatar")}
                            label="Avatar URL"
                            size="lg"
                            variant="standard"
                            color="cyan"
                            icon={<MdImage size={20} />} />
                        {errors.avatar && <ErrorSpan message={errors.avatar.message} />}
                    </div>
                    <div>
                        <Input
                            {...register("banner")}
                            label="Banner URL"
                            size="lg"
                            variant="standard"
                            color="cyan"
                            icon={<MdImage size={20} />} />
                        {errors.banner && <ErrorSpan message={errors.banner.message} />}
                    </div>
                </CardBody>
                <CardFooter className="pt-0 mt-4">
                    <Button fullWidth className='bg-primary' onClick={handleSubmit(handleFormSubmit)}>
                        Sign Up
                    </Button>
                    {isSubmitting && <Loader />}
                    <Typography variant="small" as="div" className="mt-6 flex justify-center">
                        Already have an account?
                        <Typography
                            as="p"
                            variant="small"
                            className="ml-1 font-bold text-primary"
                        >
                            <Link to="/sign-in">  Sign In</Link>
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </motion.section >

    )
}

export default SignUp;