import CardComponent from "../../../components/card/Card";
import {memo} from "react";
import styles from "./index.module.css"

const TEST_DATA = "-£50.00"

const BalanceCard = () => {
  const isNegative = TEST_DATA.startsWith('-');

  return (
    <CardComponent width="27.5%" maxHeight="25vh">
      <p className={styles.title}>Balance</p>
      <div className={`${styles.amountWrapper} ${isNegative ? styles.amountNegative : styles.amountPositive}`}>
        <p className={styles.balance}>{TEST_DATA}</p>
      </div>
    </CardComponent>
  );
}

export default memo(BalanceCard);