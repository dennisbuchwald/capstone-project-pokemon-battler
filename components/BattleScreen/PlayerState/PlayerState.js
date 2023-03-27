import styles from "./playerstate.module.css";

export default function PlayerState() {
  return (
    <div className={styles["player--state-box"]}>
      <div className={styles["player--state-wrapper"]}>
        <p className={styles["player--pokemon-name"]}>Glurak</p>
        <p className={styles["player--pokemon-level"]}>51</p>
        <p className={styles["player--pokemon-health"]}>Player health</p>
        <p
          class="player--pokemon-health-bar"
          role="progressbar"
          aria-valuenow="80"
          aria-valuemin="0"
          aria-valuemax="80"
        ></p>
        <p class="player--pokemon-max-health">120</p>
      </div>
    </div>
  );
}
