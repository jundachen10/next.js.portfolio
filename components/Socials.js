import Link from 'next/link';
import classes from './Navigation.module.css';
import styles from '../styles/links.module.scss';

export default function Socials() {

    return(
        <>
            <nav>
                <ul className={classes.list}>
                    <a href="https://www.linkedin.com/in/jundachen" className={styles.link}>LinkedIn</a>
                    <a href="https://www.github.com/jundachen10" className={styles.link}>GitHub</a>
                </ul>
            </nav>
        </>
    );
}