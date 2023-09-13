import Link from 'next/link';
import classes from './Navigation.module.css';
import styles from '../styles/links.module.scss';


export default function Navigation() {

    return(
        <>
            <nav>
                <ul className={classes.list}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/pages/work" className={styles.link}>Work</Link>
                    <Link href="/pages/portfolio" className={styles.link}>Engineer</Link>
                    <Link href="/pages/resume" className={styles.link}>Resume</Link>
                </ul>
            </nav>
        </>
    );
}