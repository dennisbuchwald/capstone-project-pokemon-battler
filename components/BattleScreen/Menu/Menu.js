import styles from "./menu.module.css";

export default function Menu() {
	return (
		<div className={styles.menu}>
			<div className={styles["menu--overview-box"]}>
				<div className={styles["menu--overview-box-left"]}>
					{/* <p>Klicke auf Kampf um anzugreifen</p> */}
				</div>
				<div className={styles["menu--overview-box-right"]}>
					{/* <div className={`${styles.btn} ${styles["btn--fight"]}`}>Kampf</div>
					<div className={`${styles.btn} ${styles["btn--bag"]}`}>Beutel</div>
					<div className={`${styles.btn} ${styles["btn--pokemon"]}`}>
						POKéMON
					</div>
					<div className={`${styles.btn} ${styles["btn--run"]}`}>Flucht</div> */}
				</div>
			</div>
		</div>
	);
}
