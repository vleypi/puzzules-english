import React from 'react'
import styles from '../assets/styles/Main.module.css'
import phone from '../assets/images/perPhone.svg'
import create from '../assets/images/create.svg'
import needed from '../assets/images/needed.svg'
import community from '../assets/images/community.svg'

const Main = () => {
    return (
        <div className={styles.main}>
            <section className={styles.perfomance}>
                <div className={styles.description}>
                    <h1><span>Puzzles</span> <br />  is a good solution <br /> for learning terms</h1>
                    <h3>Learn any language or subject on your own or with other users</h3>
                    <button>Start</button>
                </div>
                <img src={phone} />
                
            </section>
            <div className={styles.contentPerfomance}>
                <section>
                    <div>
                        <h2>Why is this needed?</h2>
                        <p>Sometimes you find it difficult to remember a term on plain paper. Our flashcards, tests, quizzes and much more in "Puzzles" will help you with this.</p>
                    </div>
                    <img className={styles.imgMain} src={needed}/>
                </section>
                <section>
                    <img className={styles.imgMain} src={create}/>
                    <div>
                        <h2>How does it work?</h2>
                        <p>You create your own module in which you can write your terms. After writing down the terms, you can choose any convenient study mode that will help you easily remember the terms you entered.</p>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>Visit the community of our site!</h2>
                        <p>You can look at the modules of other users in order to find an already existing theme you need. And also, you can send a link to your module to your friends at any time.</p>
                    </div>
                    <img className={styles.imgMain} src={community}/>
                </section>
                <section>
                    <h2>Are you ready to join us?</h2>
                    <button>Start</button>
                </section>
            </div>
            </div>
    )
}

export default Main
