import Link from 'next/link';
import classes from './Navigation.module.css';
import styles from '../styles/links.module.scss';
import { setTheme } from 'next-themes';
import { useTheme } from 'next-themes';

export default function Navigation() {

    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        /* If resolvedTheme is equal to "dark," it returns "light"; otherwise, it returns "dark."*/
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <div>
                <ul className={classes.list}>
                    <Link href="/" className={styles.link}>home</Link>
                    <Link href="https://www.linkedin.com/in/jundachen" className={styles.link}>linkedin</Link>
                    <Link href="https://www.github.com/jundachen10" className={styles.link}>github</Link>
                    <Link href="https://github.com/jundachen10/next.js.portfolio#readme" className={styles.link}>readme</Link>
                    <Link href="https://github.com/jundachen10/jays_resume" className={styles.link}>resume</Link>
                    <button title="Dark Mode" type="button" onClick={toggleTheme}>Dark Mode</button>
                </ul>
            </div>
        </>
    );
}