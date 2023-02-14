import CardComponent from "../../../components/card/Card";
import { memo } from "react";
import Collapsible from "../../../components/collapsible/Collapsible";
import styles from "./index.module.css"
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CategoryCard = () => {
    return (
            <CardComponent width="27.5%" maxHeight="30vh">
                <div className={styles.header}>
                    <FontAwesomeIcon className={styles.icon} icon={faTags} />
                    <p className={styles.title}>Spending Categories</p>
                </div>
                <Collapsible/>
            </CardComponent>
    );
}

export default memo(CategoryCard);