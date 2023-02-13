import CardComponent from "../../../components/card/Card";
import {memo} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import styles from "./index.module.css"

const TEST_DATA = "-£50.00"

const BalanceCard = () => {
  const isNegative = TEST_DATA.startsWith('-');

  return (
    <CardComponent width="27.5%" maxHeight="25vh">
      <div className={styles.header}>
        <FontAwesomeIcon className={styles.icon} icon={faCoins} />
        <p className={styles.title}>
          Remaining Monthly Balance
        </p>
      </div>
      <div className={`${styles.amountWrapper} ${isNegative ? styles.amountNegative : styles.amountPositive}`}>
        <p className={styles.balance}>{TEST_DATA}</p>
      </div>
    </CardComponent>
  );
}

export default memo(BalanceCard);