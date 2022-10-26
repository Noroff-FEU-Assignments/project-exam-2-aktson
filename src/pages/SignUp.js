import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../components/yupSchema/schema';
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { MdVisibility, MdVisibilityOff, MdMailOutline, MdPersonOutline, MdImage } from "react-icons/md";
import ErrorSpan from '../components/uiComponents/ErrorSpan';



function SignUp() {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(signUpSchema) });

    const [isVisible, setIsVisible] = React.useState(false)

    // handles password visibility  icon
    // on password icon click input type changes to text if visibility is on otherwise opposite 
    const handlePasswordVisibility = () => {
        setIsVisible((prevState) => !prevState)
    }

    // handles form submission, validates form and sends to api endpoint sign in request
    const handleFormSubmit = (data) => {
        console.log(data)
    }

    return (
        <section className='flex items-center justify-center my-12'>
            <Card className="w-96">
                <CardHeader className="mb-4 grid h-28 place-items-center bg-primary">
                    <Typography variant="h3" color="white">
                        Sign Up
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-6">
                    <div>
                        <Input {...register("username")} label="Username *" size="lg" variant="standard" color="cyan" icon={<MdPersonOutline size={20} />} />
                        {errors.username && <ErrorSpan message={errors.username.message} />}
                    </div>
                    <div>
                        <Input {...register("email")} label="Email *" size="lg" variant="standard" color="cyan" icon={<MdMailOutline size={20} />} />
                        {errors.email && <ErrorSpan message={errors.email.message} />}
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
                        Sign In
                    </Button>
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
        </section >

    )
}

export default SignUp;