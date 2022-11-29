import React from "react";
import PropTypes from "prop-types";
import { Dialog } from "@material-tailwind/react";

function ImageModal({ media, handleImageModal, size }) {
	return (
		<Dialog open={size === "lg"} size={size || "lg"} handler={handleImageModal}>
			<img src={media} alt="media" className="w-full h-auto object-cover" style={{ maxHeight: "80vh" }} />
		</Dialog>
	);
}

export default ImageModal;

ImageModal.propTypes = {
	media: PropTypes.string,
	handleImageModal: PropTypes.func,
	size: PropTypes.string,
};
