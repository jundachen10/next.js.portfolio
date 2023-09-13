import styles from './githubStats.module.css';

const githubStatsURL = 
'https://github-readme-stats-gold-alpha.vercel.app/api?username=jundachen10&show_icons=true&l&hide_rank=true';
const githubTopLanguagesURL = 
'https://github-readme-stats-gold-alpha.vercel.app/api/top-langs/?username=jundachen10&layout=compact';

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

        {/*<div className={styles.container}>
        <img src={githubStatsURL} />
        </div> */}

        <StatsBlock
            imageURL={githubTopLanguagesURL}
            altText="Top languages"
        />
        <StatsBlock
            imageURL={githubStatsURL}
            altText="Github Stats"
        />
    </div>
    );
}
