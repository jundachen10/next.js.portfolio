import Link from 'next/link';
import useRouter from 'next/router';
import classes from './Navigation.module.css';
import styles from '../styles/links.module.scss';
import NextLink from 'next/link';

export default function Navigation() {

    return(
        <>
            <nav className={classes.Container}>
                <ul className={classes.list}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/posts/first-post" className={styles.link}>Engineer</Link>
                    <Link href="/pages/resume" className={styles.link}>Resume</Link>
                </ul>
            </nav>
        </>
    );
}