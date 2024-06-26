import Link from 'next/link';
import classes from './Navigation.module.css';
import linkStyles from '../styles/links.module.scss';

function SocialsBlock({ href, link }) {
    return (
        <div className={linkStyles.link}>
            <a href={href}>{link}</a>
        </div>
    )
}

export default function Socials() {

    return (
        <div>
            <nav>
                <ul className={classes.list}>

                    <SocialsBlock
                        href="https://www.linkedin.com/in/jundachen"
                        link="LinkedIn"
                    />
                    <SocialsBlock
                        href="https://www.github.com/jundachen10"
                        link="Git"
                    />

                    {/*<a href="https://www.linkedin.com/in/jundachen" className={styles.link}>LinkedIn</a>
                    <a href="https://www.github.com/jundachen10" className={styles.link}>GitHub</a>*/}

                </ul>
            </nav>
        </div>
    );
}