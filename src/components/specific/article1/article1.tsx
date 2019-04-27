import React from 'react'

import styles from './article1.module.css'

function Article1({body}: {body: string}) {
    return  <div className={styles['article1']}>
                {body}
                <footer className={styles['footer']}>
                    <a 
                        href="http://numbersapi.com" 
                        target="_blank"
                        rel="noopener noreferrer">
                            NUMBERSAPI
                    </a>
                </footer>
            </div>
}

export default Article1
