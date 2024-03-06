import { useState } from 'react'
import './style.css'
import styles from './App.module.css'


function App() {
    return (<>

        <p className="paragraph-text">The weather is sunny today.</p>
        <p className={styles.BlueParagraph}>The weather is runny today.</p>
        <p className={styles.GreenParagraph}>Still, don't forget to bring your unbrella!</p>

        /*
        * px-5: is short for padding padding-left padding-right
        * text-white applies color: white
        * bg-blue-500 applies the background-color
        * */
        <button className="px-5 py-2 text-white bg-blue-500 border-2">Subscribe</button>
        </>
    )
}

export default App
