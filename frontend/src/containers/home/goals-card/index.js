import CardComponent from "../../../components/card/Card";
import { memo } from "react";
import styles from "./index.module.css"

const GoalsCard = () => {

//user will be able to choose custom goals that will appear here
//need to move that card up so that its directly underneath the date card and aligned
//make the title centre aligned
    return (
        <CardComponent width="90%" maxHeight="45vh">
            <p className={styles.title}>Your goals this month: <p></p>
                <p className={styles.listContent}>
                    <ul>
                        <li>goal 1</li>
                        <li>goal 2</li>
                        <li>save 500 squids</li>
                    </ul>
                </p>
            </p>
            <div className={`${styles.goalsWrapper}`}>
            </div>
        </CardComponent>
    );
}

export default memo(GoalsCard);
