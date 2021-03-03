import React from "react";
import Button from "../Button/Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = React.memo((props) => {
  console.log("RENDERING ERROR MODAL");
  console.log(props);

  return (
    <React.Fragment>
      <div className={classes.Backdrop} onClick={props.onClose} />
      <div className={classes.Error_modal}>
        <h3>An Error Occurred!</h3>
        <p>{props.children}</p>
        <div className={classes.Error_modal__actions}>
          <Button btnType={"Success"} clicked={props.onClose}>
            OK
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default ErrorModal;
