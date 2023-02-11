import CardComponent from "../../../components/card/Card";
import {memo} from "react";
import styles from "./index.module.css"


const DateCard = () => {


    //TODO eventually pass a call to get balance in and then have switch to evaluate current
    //balance against current day
    const getStyleForDateBalance = () => {
        return styles.dateGreen;
        // styles.dateRed;
        // styles.dateAmber;
    }

    const today = new Date().toLocaleDateString("en-UK");
    const currentDay = new Date().getDay() + 10;

    return (
        <CardComponent width="17.5%" maxHeight="15vh">
            <p className={styles.title}>Today is....</p>
            <div className={`${styles.dateWrapper}`}>
                <p className={`${styles.currentDate} ${ getStyleForDateBalance()}`}>{today}</p>
            </div>
        </CardComponent>
    );
}

export default memo(DateCard);