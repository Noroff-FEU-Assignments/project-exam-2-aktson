import React from "react";
import { PROFILES_URL, CLOUD_KEY, CLOUD_NAME } from "../../../../constants/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, IconButton, Input } from "@material-tailwind/react";
import { MdClear, MdImage, MdModeEdit } from "react-icons/md";
import ModalContext from "../../../../context/ModalContext";
import AuthContext from "../../../../context/AuthContext";
import Form from "../../Form";
import ErrorSpan from "../../../ErrorSpan";
import useAxios from "../../../../hooks/useAxios";
import { toast } from "react-toastify";
import AdminContext from "../../../../context/AdminContext";
import Spinner from "../../../loader/Spinner";
import axios from "axios";
import { imageValidation } from "../../../../yupSchema/imageValidation";
import ModalEditBanner from "./ModalEditBanner";

function EditBanner() {
	const http = useAxios();

	const { openEditBannerModal, closeEditBannerModal } = React.useContext(ModalContext);
	const { auth, setAuth } = React.useContext(AuthContext);
	const { setUpdateAdminUi } = React.useContext(AdminContext);
	const [error, setError] = React.useState(null);

	const [isSubmitting, setIsSubmitting] = React.useState(false);

	// react hook form and yup schema
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ resolver: yupResolver(imageValidation) });

	// uploads image to cloudinary and passes url to put request for noroff url
	const uploadImage = async (data) => {
		const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

		setIsSubmitting(true);

		try {
			const formdata = new FormData();

			formdata.append("file", data.image[0]);
			formdata.append("upload_preset", CLOUD_KEY);
			formdata.append("folder", "social_app");

			const response = await axios.post(url, formdata);

			if (response.data.url) {
				handleBannerSubmit(response.data.url);
			}
		} catch (error) {
			console.log(error);
			setError("Could not upload image");
		} finally {
			setIsSubmitting(false);
		}
	};

	// gets image url from cloudinary and makes request to noroff api
	const handleBannerSubmit = async (imageUrl) => {
		const url = `${PROFILES_URL}/${auth?.name}/media`;

		const authCopy = { ...auth, banner: imageUrl };

		setIsSubmitting(true);

		try {
			const response = await http.put(url, { banner: imageUrl });

			if (response) {
				closeEditBannerModal();
				setUpdateAdminUi(response.data);
				setAuth(authCopy);
				toast.success("Banner updated!");
			}
		} catch (error) {
			console.log(error);
			toast.error("Could not update profile");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<Button color="light-blue" variant="text" size="sm" className="flex gap-2 items-center" onClick={openEditBannerModal}>
				<MdModeEdit size={18} />
				Banner
			</Button>
			<ModalEditBanner>
				<Form>
					<div className="flex justify-between items-center mb-8">
						<h2>Update Banner</h2>
						<IconButton variant="text" className="text-grey" onClick={closeEditBannerModal}>
							<MdClear size={24} />
						</IconButton>
					</div>
					<fieldset className="flex flex-col gap-6 p-2" disabled={isSubmitting}>
						<div>
							<Input
								{...register("image")}
								label="Banner"
								size="lg"
								className="inputImage"
								variant="standard"
								color="light-blue"
								type="file"
								icon={<MdImage size={20} />}
							/>
							{errors.image && <ErrorSpan message={errors.image.message} />}
							{error && <ErrorSpan message={error} />}
						</div>
						<div className="flex justify-end mt-4">
							<Button onClick={handleSubmit(uploadImage)} color="light-blue" className="flex gap-2 items-center btn">
								<Spinner isSubmitting={isSubmitting} />
								{isSubmitting ? "Updating" : "Update"}
							</Button>
						</div>
					</fieldset>
				</Form>
			</ModalEditBanner>
		</>
	);
}

export default EditBanner;
