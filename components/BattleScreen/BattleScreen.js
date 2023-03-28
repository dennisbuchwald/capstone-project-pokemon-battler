import styles from "./battlescreen.module.css";

import PlayerPokemon from "./Pokemon/PlayerPokemon";
import PlayerState from "./PlayerState/PlayerState";
import EnemyPokemon from "./Pokemon/EnemyPokemon";
import EnemyState from "./EnemyState/EnemyState";

function BattleScreen() {
	return (
		<div className={[styles.screen]}>
			<PlayerState />
			<PlayerPokemon />
			<EnemyPokemon />
			<EnemyState />
		</div>
	);
}

export default BattleScreen;
