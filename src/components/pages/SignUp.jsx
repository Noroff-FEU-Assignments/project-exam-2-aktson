import React from "react";
import axios from "axios";
import { REGISTER_URL, BRAND, LOGIN_URL } from "../constants/api";
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
import SignUpBanner from "../uiComponents/SignUpBanner";
import bgImage from "../../assets/bg.jpg";
import FormTooltip from "../uiComponents/formTooltip/FormTooltip";
import PasswordTooltip from "../uiComponents/formTooltip/PasswordTooltip";
import Footer from "../layout/Footer";
import AuthContext from "../context/AuthContext";

function SignUp() {
	document.title = `Sign Up | ${BRAND}`;
	const { setAuth } = React.useContext(AuthContext);

	const navigate = useNavigate();

	// states to show tooltip on input focus about required fields
	const [emailTooltip, setEmailTooltip] = React.useState(false);
	const [nameTooltip, setNameTooltip] = React.useState(false);
	const [passwordTooltip, setPasswordTooltip] = React.useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(signUpSchema),
	});

	// form state on async request
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
				setTimeout(() => {
					doAutoLogin({ email: response.data.email, password: data.password });
				}, 1000);
			}
		} catch (error) {
			console.log(error);
			toast.error(error ? error.response.data.errors[0].message : "Could not register");
		} finally {
			setIsSubmitting(false);
		}
	};

	const doAutoLogin = async (data) => {
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
			className=" h-auto lg:h-screen flex justify-center items-center p-4 "
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			<div className="grid grid-cols-auto lg:grid-cols-2  container shadow-xl bg-lightGray rounded-xl mb-16">
				<SignUpBanner />
				<motion.form
					className="mt-10 sm:my-20 "
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					exit={{ scale: 1 }}
					transition={{ duration: 0.4 }}>
					<Card className="max-w-md lg:max-w-lg mx-auto ">
						<CardHeader className="mb-4 grid h-28 place-items-center bg-primary">
							<Typography variant="h3" color="white">
								Create Account
							</Typography>
						</CardHeader>
						<CardBody className="flex flex-col gap-6">
							<div className="flex justify-between gap-6 flex-col lg:flex-row">
								<div className="w-full relative" onFocus={() => setNameTooltip(true)} onBlur={() => setNameTooltip(false)}>
									<Input
										{...register("name")}
										label="Username *"
										size="lg"
										variant="standard"
										color="light-blue"
										icon={<MdPersonOutline size={20} />}
									/>
									{errors.name && <ErrorSpan message={errors.name.message} />}
									{nameTooltip && <FormTooltip message={"no capital letters"} />}
								</div>

								<div className="w-full relative" onFocus={() => setEmailTooltip(true)} onBlur={() => setEmailTooltip(false)}>
									<Input
										{...register("email")}
										label="Create Email *"
										size="lg"
										variant="standard"
										color="light-blue"
										icon={<MdMailOutline size={20} />}
									/>

									{errors.email && <ErrorSpan message={errors.email.message} />}
									{emailTooltip && <FormTooltip message={"must end with @stud.noroff.no"} />}
								</div>
							</div>

							<div className="relative" onFocus={() => setPasswordTooltip(true)} onBlur={() => setPasswordTooltip(false)}>
								<Input
									{...register("password")}
									label="Password *"
									size="lg"
									color="light-blue"
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
								{passwordTooltip && <PasswordTooltip message={"must be 8 characters long"} />}
							</div>
							<div>
								<Input
									{...register("confirmPassword")}
									label="Confirm Password *"
									size="lg"
									color="light-blue"
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
								color="light-blue"
								variant="gradient"
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
			<Footer position="absolute bottom-0" />
		</section>
	);
}

export default SignUp;
