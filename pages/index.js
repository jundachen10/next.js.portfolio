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

      <Navigation /> {/*nav component */}

      <section className={utilStyles.headingXl}>
        <p>Jay Chen</p>

      </section>

      <section className={utilStyles.headingMd}>

        <p>Neat stuff that I built on this site:</p>
        <ul className={utilStyles.listIndent}>
          <li>
            Try clicking on the dark mode button
          </li>
          <li>
            The nav bar links animate when you hover over with your mouse
          </li>
          <li>
            The below github metrics are updated in real-time as I push commits
          </li>
        </ul>

      </section>

      <section className={utilStyles.headingMd}>

        <p>What I learned building this stuff:</p>
        <ul className={utilStyles.listIndent}>
          <li>deploying this live on Vercel</li>
          <li>using css modules to organize css styles per page</li>
          <li>using scss to animate hover effects</li>
          <li>component structure of organizing my website by function</li>
          <li>Wrapping the app.js file with the dark mode theme wrapper</li>
        </ul>

      </section>

      {/*live stats component */}
      <GithubStats />

      {/*social links component */}
      {/* <Socials /> */}

    </Aligner>
  );
}