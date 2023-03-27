import Image from "next/image";
import styles from "./battlescreen.module.css";
import PlayerState from "./PlayerState/PlayerState";
import Mewtwo from "./Pokemon/Mewtwo";
import Glurak from "./Pokemon/Glurak";

function BattleScreen() {
	return (
		<div className={[styles.screen]}>
			<PlayerState />
			<div className={styles["enemyPokemon"]}>
				<div className="mr-4">
					<Mewtwo />
				</div>
				<div className={styles["playerPokemon"]}>
					<Glurak />
				</div>
			</div>
		</div>
	);
}

export default BattleScreen;
