import styles from './githubStats.module.css';

const githubReadmeStatsURL = 
'https://github-readme-stats-gold-alpha.vercel.app/api?username=jundachen10&show_icons=true&theme=radical&hide_rank=true';
const githubTopLanguagesURL = 
'https://github-readme-stats-gold-alpha.vercel.app/api/top-langs/?username=jundachen10&layout=compact&theme=radical';

//reusable component for holding stat boxes
function StatsBlock({ imageURL, altText}) {
    return (
        <div className={styles.container}>
            <img src={imageURL} alt={altText} />
        </div>
    );
}

export default function GithubStats() {
    return (
    <div>
        <StatsBlock
            imgageURL={githubReadmeStatsURL}
            altText="Github stats for me"
        />

        <StatsBlock
            imageURL={githubTopLanguagesURL}
            altText="Top language stats for me"
        />
    </div>
    );
}
