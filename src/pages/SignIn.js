import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <section className='flex items-center justify-center my-12'>
            <Card className="w-96 ">
                <CardHeader className="mb-4 grid h-28 place-items-center bg-primary">
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-10">
                    <Input label="Email" size="lg" variant="standard" />
                    <Input label="Password" size="lg" variant="standard" />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button fullWidth className='bg-primary'>
                        Sign In
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don't have an account?
                        <Typography
                            variant="small"
                            className="ml-1 font-bold text-primary"
                        >
                            <Link to="/sign-up">  Sign up</Link>
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </section >

    )
}

export default SignIn