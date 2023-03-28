import styles from "./battlescreen.module.css";
import PlayerState from "./PlayerState/PlayerState";
import Mewtwo from "./Pokemon/EnemyPokemon";
import Glurak from "./Pokemon/PlayerPokemon";
import PlayerPokemon from "./Pokemon/PlayerPokemon";
import EnemyPokemon from "./Pokemon/EnemyPokemon";

function BattleScreen() {
	return (
		<div className={[styles.screen]}>
			<PlayerState />
			<PlayerPokemon />
			<EnemyPokemon />
		</div>
	);
}

export default BattleScreen;
