import React, { memo, useState } from 'react';
import styles from "./Collapsible.module.css"

const Collapsible = () => {

  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className={styles.accordion}>
      {data.map((item, i) => (
        <div className={styles.item}>
          <div className={styles.title} onClick={() => toggle(i)}>
            <h2>{item.Category}</h2>
            <span>{selected === i ? "-" : "+"}</span>
          </div>
          <div className={`${selected === i ? styles.contentShow : styles.content}`}>{item.explanation}</div>
        </div>
      ))}
    </div>
  );
};


const data = [
  {
    Category: "Cat 1",
    explanation: "Cat 1"
  },
  {
    Category: "Cat 2",
    explanation: "Cat 2"
  },
  {
    Category: "Cat 3",
    explanation: "Cat 3"
  }
]

export default memo(Collapsible);