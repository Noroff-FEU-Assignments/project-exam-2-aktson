import React from "react";
import PropTypes from "prop-types";
import { Dialog } from "@material-tailwind/react";

function ImageModal({ media, handleImageModal, size }) {
	return (
		<Dialog open={size === "lg"} size={size || "lg"} handler={handleImageModal}>
			<div
				className="drop-shadow-xl w-full  "
				style={{
					backgroundImage: `url(${media}) `,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					minHeight: "80vh",
					backgroundSize: "cover",
				}}></div>
		</Dialog>
	);
}

export default ImageModal;

ImageModal.propTypes = {
	media: PropTypes.string,
	handleImageModal: PropTypes.func,
	size: PropTypes.string,
};
