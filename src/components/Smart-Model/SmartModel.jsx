import { SmartDarkButton } from "dark_power25";
import PropTypes from "prop-types";
import "./SmartModel.css";
const SmartModal = ({ closeModal, modalOptions }) => {
  const title = modalOptions && modalOptions.title ? modalOptions.title : null;
  const footer =
    modalOptions && modalOptions.footer ? modalOptions.footer : null;
  const body = modalOptions && modalOptions.body ? modalOptions.body : null;
  const bodyClose =
    modalOptions && modalOptions?.bodyClose === false ? false : true;
  const modalClass =
    modalOptions && modalOptions?.modalClass ? modalOptions?.modalClass : "";
  const {
    okText = "Yes",
    cancelText = "No",
    okFunction,
    cancelFunction,
  } = modalOptions;
  const closeModalOnBody = () => {
    if (bodyClose === true) {
      closeModal();
    }
  };

  const okCancelFooter = () => {
    return (
      <>
        <SmartDarkButton
          label={okText}
          classList={[`button is-success is-small mr-2`]}
          onClick={okFunction}
          leftIcon="fa-check"
        />
        <SmartDarkButton
          label={cancelText}
          classList={["button is-danger is-small"]}
          onClick={cancelFunction}
          leftIcon="fa-close"
        />
      </>
    );
  };

  return (
    <div key={"text-1"} className={"modal is-active smart-modal " + modalClass}>
      <div className="modal-background" onClick={closeModalOnBody} />
      <div className="modal-card">
        {title && (
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button
              onClick={closeModal}
              className="delete"
              aria-label="close"
            />
          </header>
        )}
        <section className="modal-card-body">{body}</section>
        {footer && <footer className="modal-card-foot">{footer}</footer>}
        {okFunction && (
          <footer className="modal-card-foot is-justify-content-flex-end">
            {okCancelFooter()}
          </footer>
        )}
      </div>
    </div>
  );
};

export default SmartModal;

SmartModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalOptions: PropTypes.object.isRequired,
};
