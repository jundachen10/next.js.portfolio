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

    return(
        <>
            <div>
                <ul className={classes.list}>

                    <Link href="/" className={styles.link}>Home</Link>
                    {/*<Link href="/work" className={styles.link}>Work</Link>
                    <Link href="/portfolio" className={styles.link}>Projects</Link>*/}
                    <Link href="https://github.com/jundachen10/next.js.portfolio#readme" className={styles.link}>ReadMe</Link>
                    <Link href="https://github.com/jundachen10/jays_resume" className={styles.link}>Resume</Link>

                    <button title="Dark Mode" type="button" onClick={toggleTheme}>
                        Dark Mode
                    </button>
                </ul>
            </div>
        </>
    );
}