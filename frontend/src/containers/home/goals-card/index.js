import CardComponent from "../../../components/card/Card";
import { memo } from "react";
import styles from "./index.module.css"

const GoalsCard = () => {

    return (
        <CardComponent width="14%" maxHeight="36vh">
            <p className={styles.title}>Your goals this month: <p></p>
                <p>
                    <ul>
                        <li>Red</li>
                    </ul>
                </p>
            </p>
            <div className={`${styles.goalsWrapper}`}>
            </div>
        </CardComponent>
    );
}

export default memo(GoalsCard);
