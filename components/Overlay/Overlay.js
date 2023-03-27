import React from "react";
import styles from "./overlay.module.css";

const Overlay = ({ children }) => {
	return (
		<div className={styles.gameboyOverlay}>
			<div className={styles.gameboyScreen}>{children}</div>
		</div>
	);
};

export default Overlay;
