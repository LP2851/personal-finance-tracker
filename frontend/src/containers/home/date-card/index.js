import CardComponent from "../../../components/card/Card";
import { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
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

    return (
        <CardComponent width="17.5%" maxHeight="15vh">
          <div className={styles.header}>
            <FontAwesomeIcon className={styles.icon} icon={faCalendarAlt} />
            <p className={styles.title}>
              Today is...
            </p>
          </div>
            <div className={`${styles.dateWrapper}`}>
                <p className={`${styles.currentDate} ${ getStyleForDateBalance()}`}>{today}</p>
            </div>
        </CardComponent>
    );
}

export default memo(DateCard);