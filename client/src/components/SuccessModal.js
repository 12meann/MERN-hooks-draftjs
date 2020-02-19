import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../scss/modal.scss";

const SuccessModal = ({ isShowing, hide, successMsg, setIsShowing }) => {
  useEffect(() => {
    function handleHideModal(e) {
      if (e.key === "Escape") {
        setIsShowing(false);
      }
    }
    document.addEventListener("keydown", handleHideModal, true);
    return () => {
      document.removeEventListener("keydown", handleHideModal, true);
    };
  }, [setIsShowing]);
  return (
    <>
      {isShowing
        ? ReactDOM.createPortal(
            <>
              <div className="modal-overlay" />
              <div
                onClick={hide}
                className="modal-wrapper"
                aria-modal
                aria-hidden
                tabIndex={-1}
                role="dialog"
              >
                <div className="modal">
                  <p>{successMsg}</p>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="modal-close-button"
                      data-dismiss="modal"
                      aria-label="close"
                      onClick={hide}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </>,
            document.getElementById("modal-portal")
          )
        : null}
    </>
  );
};
export default SuccessModal;
