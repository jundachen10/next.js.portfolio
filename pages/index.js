import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import GithubStats from '../components/GithubStats';
import Navigation from '../components/Navigation';
import Aligner from '../components/Aligner';

export default function Home() {
  return (
    <Aligner>
    
      <Head>
        <title>"Junda Chen"</title>
      </Head>

    <div className="title">

     <section className={utilStyles.headingXl}>
      <p>Junda Chen</p>
      </section>

        <Navigation />
    
    </div>
    <GithubStats />


        <div className="socials">
          <section className={utilStyles.headingXl}>
            <p>Connect with me</p>
          </section>
        </div>
      
        </Aligner>
  );
}