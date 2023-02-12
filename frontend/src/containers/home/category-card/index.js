import CardComponent from "../../../components/card/Card";
import {memo} from "react";
import styles from "./index.module.css"
import Collapsible from "../../../components/collapsible/Collapsible";

const CategoryCard = () => {
    return (
        <CardComponent width="27.5%" maxHeight="30vh">
            <p className={styles.title}>Spending Categories</p>
            <Collapsible label='Click Here'>
                <ul>
                    <li>Profile</li>
                    <li>Dashboard</li>
                    <li>Logout</li>
                </ul>
            </Collapsible>
        </CardComponent>
    );
}

export default memo(CategoryCard);