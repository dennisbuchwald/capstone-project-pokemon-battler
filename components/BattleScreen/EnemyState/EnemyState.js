import styles from "./enemystate.module.css";

export default function EnemyState() {
	return (
		<div className={styles["enemy--state-box"]}>
			<div className={styles["enemy--state-wrapper"]}>
				<p className={styles["enemy--pokemon-name"]}>Mewtwo</p>
				<p className={styles["enemy--pokemon-level"]}>62</p>
				<p className={styles["enemy--pokemon-health"]}>120</p>
				<p
					class="enemy--pokemon-health-bar"
					role="progressbar"
					aria-valuenow="80"
					aria-valuemin="0"
					aria-valuemax="80"
				></p>
				<p className={styles["enemy--pokemon-slash-health"]}>/</p>
				<p class={styles["enemy--pokemon-max-health"]}>120</p>
			</div>
		</div>
	);
}
