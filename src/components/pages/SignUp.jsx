import React from "react";
import axios from "axios";
import { REGISTER_URL, BRAND } from "../constants/api";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../yupSchema/signupSchema";
import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { MdVisibility, MdVisibilityOff, MdMailOutline, MdPersonOutline } from "react-icons/md";
import ErrorSpan from "../uiComponents/ErrorSpan";
import { toast } from "react-toastify";
import Spinner from "../uiComponents/loader/Spinner";
import { motion } from "framer-motion";
import SignUpBanner from "../uiComponents/welcomeBanner/SignUpBanner";
import WrapperSignInUp from "../uiComponents/welcomeBanner/WrapperSignInUp";
import FormTooltip from "../uiComponents/formTooltip/FormTooltip";
import PasswordTooltip from "../uiComponents/formTooltip/PasswordTooltip";

function SignUp() {
	document.title = `Sign Up | ${BRAND}`;

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(signUpSchema) });

	const [isVisible, setIsVisible] = React.useState(false);
	const [isSubmitting, setIsSubmitting] = React.useState(false);

	// handles password visibility  icon
	// on password icon click input type changes to text if visibility is on otherwise opposite
	const handlePasswordVisibility = () => {
		setIsVisible((prevState) => !prevState);
	};

	// handles form submission, validates form and sends to api endpoint sign in request
	const handleFormSubmit = async (data) => {
		setIsSubmitting(true);

		try {
			const response = await axios.post(REGISTER_URL, data);

			if (response) {
				toast.success("Successfully registered!");
				reset();
				setTimeout(() => {
					navigate("/sign-in");
				}, 3500);
			}
		} catch (error) {
			console.log(error);
			toast.error(error ? error.response.data.errors[0].message : "Could not register");
		} finally {
			setIsSubmitting(false);
		}
	};

	const [emailTooltip, setEmailTootip] = React.useState(false);
	const [nameTooltip, setNameTooltip] = React.useState(false);
	const [passwordTooltip, setPasswordTooltip] = React.useState(false);

	return (
		<WrapperSignInUp>
			<div className="grid grid-cols-auto lg:grid-cols-2  container shadow-xl bg-lightGray rounded-xl ">
				<SignUpBanner />
				<motion.form className="my-20" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 1 }} transition={{ duration: 0.2 }}>
					<Card className="max-w-md lg:max-w-lg mx-auto  ">
						<CardHeader className="mb-4 grid h-28 place-items-center bg-primary">
							<Typography variant="h3" color="white">
								Create Account
							</Typography>
						</CardHeader>
						<CardBody className="flex flex-col gap-6">
							<div className="flex justify-between gap-6 flex-col lg:flex-row">
								<div className="w-full relative">
									<Input
										{...register("name")}
										label="Username *"
										size="lg"
										variant="standard"
										color="cyan"
										icon={<MdPersonOutline size={20} />}
										onFocus={() => setNameTooltip(true)}
										onChange={() => setNameTooltip(false)}
										onBlur={() => setNameTooltip(false)}
									/>
									{errors.name && <ErrorSpan message={errors.name.message} />}
									{nameTooltip && <FormTooltip message={"must be at least 4 characters"} />}
								</div>
								<div className="w-full relative">
									<Input
										{...register("email")}
										label="Create Email *"
										size="lg"
										variant="standard"
										color="cyan"
										icon={<MdMailOutline size={20} />}
										onFocus={() => setEmailTootip(true)}
										onChange={() => setEmailTootip(false)}
										onBlur={() => setEmailTootip(false)}
									/>
									{errors.email && <ErrorSpan message={errors.email.message} />}
									{emailTooltip && <FormTooltip message={"must end with stud.noroff.no or noroff.no"} />}
								</div>
							</div>
							<div className="relative">
								<Input
									{...register("password")}
									label="Password *"
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
									onFocus={() => setPasswordTooltip(true)}
									onChange={() => setPasswordTooltip(false)}
									onBlur={() => setPasswordTooltip(false)}
								/>
								{errors.password && <ErrorSpan message={errors.password.message} />}
								{passwordTooltip && <PasswordTooltip message={"must be 8 characters long"} />}
							</div>
							<div>
								<Input
									{...register("confirmPassword")}
									label="Confirm Password *"
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
								{errors.confirmPassword && <ErrorSpan message={errors.confirmPassword.message} />}
							</div>
						</CardBody>
						<CardFooter className="pt-0 mt-4">
							<Button
								fullWidth
								className="flex gap-2 items-center mt-4 justify-center "
								color="cyan"
								onClick={handleSubmit(handleFormSubmit)}>
								<Spinner isSubmitting={isSubmitting} />
								{isSubmitting ? "Creating Account" : "Create Account"}
							</Button>
							<Typography variant="small" as="div" className="mt-6 flex justify-center">
								Already have an account?
								<Typography as="p" variant="small" className="ml-1 font-bold text-primary">
									<Link to="/"> Sign In</Link>
								</Typography>
							</Typography>
						</CardFooter>
					</Card>
				</motion.form>
			</div>
		</WrapperSignInUp>
	);
}

export default SignUp;
