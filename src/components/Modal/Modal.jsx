import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import "../../index.css";

export const Modal = ({ isShowing, toggle, modalClass, overlayClass, contentClass, closeBtnClass, iconClass, children }) => {
  console.log("modalClass", modalClass);
  const mergedModalClass = `${styles.modal} ${modalClass}`;
  const mergedOverlayClass = `${styles.modalOverlay} ${overlayClass}`;
  const mergedContentClass = `${styles.modalContent} ${contentClass}`;
  const mergedCloseBtnClass = `${styles.modalCloseBtn} ${closeBtnClass}`;
  const mergedIconClass = `${styles.icon} ${iconClass}`;
  console.log("mergedModalClass", mergedModalClass);
  //Passer un objet avec du style en INLINE et l'ajouter à la suite de className
  //quand la proposition de style personalisée est OK, installer babel et tout ce qui faut pour upload le comp sur NPM

  return isShowing
    ? ReactDOM.createPortal(
        <div className={mergedOverlayClass}>
          <section className={mergedModalClass}>
            <button onClick={toggle} type="button" className={mergedCloseBtnClass}>
              <span className={mergedIconClass}>&#x2715;</span>
            </button>
            <div className={mergedContentClass}>{children}</div>
          </section>
        </div>,
        document.body
      )
    : null;
};
