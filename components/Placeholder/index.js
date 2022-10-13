import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import ENUMS from "./enums";
import styles from "./styles.module.css";

function Placeholder({ size, variant, title, description, action }) {
  const classNames = classnames(styles[size], styles.placeholder);

  const SvgIcon =
    ENUMS.ICONS[variant] ||
    function () {
      return null;
    };
  return (
    <div className={classNames}>
      <div className={styles.svg}>
        <SvgIcon />
      </div>

      <div className={styles.title}> {title} </div>
      <div className={styles.description}> {description} </div>
    </div>
  );
}

Placeholder.ENUMS = ENUMS;

Placeholder.propTypes = {
  size: propTypes.oneOf(Object.values(ENUMS.SIZE)),
  variant: propTypes.oneOf(Object.values(ENUMS.VARIANTS)),
};

Placeholder.defaultProps = {
  size: ENUMS.SIZE.MEDIUM,
};

export default Placeholder;
