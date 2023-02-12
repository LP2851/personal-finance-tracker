import React, {useState} from 'react';
import styles from "./collapsible.module.css"

const Collapsible = ({ children, label }) => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="container">
            <button className='toggle' onClick={() => setIsOpen(!isOpen)}>{label}</button>
            <div className={`${isOpen ? styles.show : styles.content}`}>{children}</div>
        </div>
    );
};


export default Collapsible;