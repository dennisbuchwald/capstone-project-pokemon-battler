import React, { useState } from "react";
import Menu from "./BattleScreen/Menu/Menu";
import EnemyState from "./EnemyState/EnemyState";

export default function Game() {
	const [enemyHealth, setEnemyHealth] = useState(120);

	const dealDamage = (damage) => {
		setEnemyHealth((prevHealth) => Math.max(prevHealth - damage, 0));
	};

	return (
		<>
			<EnemyState enemyHealth={enemyHealth} />
			<Menu onAttack={dealDamage} />
		</>
	);
}
