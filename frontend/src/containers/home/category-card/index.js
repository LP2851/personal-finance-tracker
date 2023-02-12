import CardComponent from "../../../components/card/Card";
import {memo} from "react";
import styles from "./index.module.css"
import Collapsible from "../../../components/collapsible/Collapsible";

const CategoryCard = () => {
    return (
        <div className={styles.categoryWrapper}>
            <CardComponent width="27.5%" maxHeight="35vh">
                <p className={styles.title}>Spending Categories</p>
                <Collapsible/>
            </CardComponent>
        </div>
    );
}

export default memo(CategoryCard);