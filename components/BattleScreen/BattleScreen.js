import Image from "next/image";
import overlayImage from "../../public/gameboy-overlay-image2.png";
import styles from "./battlescreen.module.css";
import Menu from "../Menu/Menu";
import Mewtwo from "../Pokemon/Enemy/Mewtwo";
import Glurak from "../Pokemon/Starter/Glurak";

function BattleScreen() {
	return (
		<div className={styles["overlay-container"]}>
			<Image src={overlayImage} layout="fill" objectFit="contain" />
			<div className={styles["bg-pokemon-battle"]}>
				<div className="mr-4">
					<Mewtwo />
				</div>
				<div>
					<Glurak />
				</div>
				<Menu />
			</div>
		</div>
	);
}

export default BattleScreen;
