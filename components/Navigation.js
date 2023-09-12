import Link from 'next/link';
import useRouter from 'next/router';
import classes from './Navigation.module.css';

export default function Navigation() {

    return(
        <>
            <nav className={classes.Container}>
                <ul className={classes.list}>
                    <Link href="/">Home</Link>
                    <Link href="/posts/first-post">First Post</Link>
                    <Link href="/pages/resume">Resume</Link>
                </ul>
            </nav>
        </>
    );
}