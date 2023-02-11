import CardComponent from "../../../components/card/Card";
import { memo } from "react";
import styles from "./index.module.css"

const CategoryCard = () => {

    return (
      <CardComponent width="27.5" maxHeight="25vh">
          <p className={styles.title}>Spending Categories</p>
      </CardComponent>
    );

}