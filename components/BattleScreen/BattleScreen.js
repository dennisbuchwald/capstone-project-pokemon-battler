import Image from "next/image";
import styles from "./battlescreen.module.css";
import Menu from "../Menu/Menu";
import Mewtwo from "../Pokemon/Enemy/Mewtwo";
import Glurak from "../Pokemon/Starter/Glurak";
import PlayerState from "./PlayerState/PlayerState";

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
				<Menu />
			</div>
		</div>
	);
}

export default BattleScreen;
