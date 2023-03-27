import styles from "./menu.module.css";

export default function Menu() {
	return (
		<div className={styles["menu-container"]}>
			<div className="w-full flex justify-center">
				<div className="p-4">
					<button
						className={`${styles["menu-button"]} ${styles["menu-button-red"]}`}
					>
						Angriff
					</button>
				</div>
				{/* <div className="p-4">
					<button
						className={`${styles["menu-button"]} ${styles["menu-button-gray"]}`}
					>
						Pokemon
					</button>
				</div>
				<div className="p-4">
					<button
						className={`${styles["menu-button"]} ${styles["menu-button-gray"]}`}
					>
						Item
					</button>
				</div>
				<div className="p-4">
					<button
						className={`${styles["menu-button"]} ${styles["menu-button-gray"]}`}
					>
						Flucht
					</button>
				</div> */}
			</div>
		</div>
	);
}
