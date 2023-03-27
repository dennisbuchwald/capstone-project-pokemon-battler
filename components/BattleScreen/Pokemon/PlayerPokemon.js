import styles from "./playerpokemon.module.css";

export default function PlayerPokemon() {
  return (
    <div className={styles["player-pokemon"]}>
      <img src="/sprites/starter/charizard-back.gif" alt="glurak" />
    </div>
  );
}
