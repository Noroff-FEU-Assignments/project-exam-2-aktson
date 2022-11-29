import React from "react";
import PropTypes from "prop-types";
import ReactDom from "react-dom";
import ModalContext from "../../../../context/ModalContext";

function ModalEditBanner({ children }) {
	const { isEditBannerOpen, closeEditBannerModal } = React.useContext(ModalContext);

	if (!isEditBannerOpen) return null;

	return ReactDom.createPortal(
		<div className="modal" aria-hidden="true" id="my-modal">
			<div className="modal-overlay" onClick={closeEditBannerModal} />
			{children}
		</div>,
		document.getElementById("editBanner-portal")
	);
}

export default ModalEditBanner;

ModalEditBanner.propTypes = {
	children: PropTypes.node.isRequired,
};
