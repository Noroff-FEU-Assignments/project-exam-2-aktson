import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../yupSchema/signinSchema";
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { MdVisibility, MdVisibilityOff, MdMailOutline } from "react-icons/md";
import ErrorSpan from "../uiComponents/ErrorSpan";
import { LOGIN_URL, BRAND } from "../constants/api";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import bgImage from "../../assets/bg-welcome.jpg";
import Spinner from "../uiComponents/loader/Spinner";
import Footer from "../layout/Footer";

function SignIn() {
	document.title = `Sign in | ${BRAND}`;

	const { setAuth } = React.useContext(AuthContext);

	const navigate = useNavigate();

	// react state
	const [isVisible, setIsVisible] = React.useState(false);
	const [isSubmitting, setIsSubmitting] = React.useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(signInSchema) });

	// handles password visibility  icon
	// on password icon click input type changes to text if visibility is on otherwise opposite
	const handlePasswordVisibility = () => {
		setIsVisible((prevState) => !prevState);
	};

	// handles form submission, validates form and sends to api endpoint sign in request
	const handleFormSubmit = async (data) => {
		setIsSubmitting(true);
		try {
			const response = await axios.post(LOGIN_URL, data);

			if (response) {
				setAuth(response.data);
				navigate("/home");
			}
		} catch (error) {
			console.log(error);
			toast.error(error ? error?.response.data.errors[0].message : "Error: Could not log in");
		} finally {
			setIsSubmitting(false);
		}
	};
	return (
		<section
			className="h-screen flex justify-center items-center p-4 relative"
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			<motion.form initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 1 }} transition={{ duration: 0.4 }}>
				<Card className=" mx-auto sm:w-96 ">
					<CardHeader className="mb-4 grid h-28 place-items-center bg-primary">
						<Typography variant="h3" color="white">
							Sign In
						</Typography>
					</CardHeader>
					<CardBody className="flex flex-col gap-6">
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
								icon={
									!isVisible ? (
										<MdVisibilityOff size={20} onClick={handlePasswordVisibility} className="cursor-pointer" />
									) : (
										<MdVisibility size={20} onClick={handlePasswordVisibility} className="cursor-pointer" />
									)
								}
							/>
							{errors.password && <ErrorSpan message={errors.password.message} />}
						</div>
					</CardBody>
					<CardFooter className="pt-0 mt-4">
						<Button
							fullWidth
							className="flex gap-2 items-center mt-4 justify-center "
							color="cyan"
							onClick={handleSubmit(handleFormSubmit)}>
							<Spinner isSubmitting={isSubmitting} />
							{isSubmitting ? "Signing In" : "Sign In"}
						</Button>
						<Typography variant="small" as="div" className="mt-6 flex justify-center">
							Don't have an account?
							<Typography as="p" variant="small" className="ml-1 font-bold text-primary">
								<Link to="/sign-up"> Create Account</Link>
							</Typography>
						</Typography>
					</CardFooter>
				</Card>
			</motion.form>
			<Footer position="absolute bottom-0" />
		</section>
	);
}

export default SignIn;
