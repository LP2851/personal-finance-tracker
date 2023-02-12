import React, {useState} from 'react';
import styles from "./collapsible.module.css"

const Collapsible = () => {

    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if(selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    // selected === i ? ${styles.content} : ${styles.contentShow

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


const data = [{
    Category: "Food",
    explanation: "sex money hookers drugs"},
    {
        Category: "Drugs",
        explanation: "la musica de harry frost"
}]


export default Collapsible;