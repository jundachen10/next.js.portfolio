import styles from './githubStats.module.css';

const githubReadmeStats = 
'https://github-readme-stats-gold-alpha.vercel.app/api?username=jundachen10&show_icons=true&theme=radical&hide_rank=true';

const githubTopLanguages = 
'https://github-readme-stats-gold-alpha.vercel.app/api/top-langs/?username=jundachen10&layout=compact&theme=radical';


export default function GithubStats() {
    return (

    //github stats
    <div>
        <div className={styles.container}>
            <img src={githubReadmeStats} alt="@Junda's github stats" />
        </div>
        
        <div className={styles.container}>
            <img src={githubTopLanguages} alt="Junda's top languages" />
        </div>
    </div>
    )
}
