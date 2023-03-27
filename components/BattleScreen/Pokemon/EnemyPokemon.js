import styles from "./enemypokemon.module.css";

export default function EnemyPokemon() {
  return (
    <div className={styles["enemy-pokemon"]}>
      <img src="/sprites/opponent/hard/mewtwo.gif" alt="mewtwo" />
    </div>
  );
}
