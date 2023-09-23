import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import GithubStats from '../components/GithubStats';
import Navigation from '../components/Navigation';
import Aligner from '../components/Aligner';
import Socials from '../components/Socials';
import useTheme from 'next-themes';
import Image from 'next/image';

export default function Home() {
  return (
    <Aligner>
      <Head>
        <title>Junda Chen</title>
      </Head>
      <div>
        <Image
              priority
              src="/images/me.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
      </div>
    <Navigation />
     <section className={utilStyles.headingXl}>
      <p>Jay Chen</p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>Hi I'm Jay, a software engineer. This web app is
          still a work in progress so be sure to check
          the release notes <a href='https://github.com/jundachen10/next.js.portfolio'>click here</a>.
         </p>
      </section>
      <section className={utilStyles.headingLg}>
        <p>Explore my public GitHub stats</p>
      </section>
      <GithubStats />
      <section className={utilStyles.headingXl}>
        <p>Connect with me</p>
        </section>
    <Socials />
    </Aligner>
  );
}