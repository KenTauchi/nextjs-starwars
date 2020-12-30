import Head from "next/head";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";

function Home({ data }) {
  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.reactdojo}>React Dojo Practice</h1>

      <ul>
        {data.map((person) => (
          <li key={person.id}>
            <Link href={`/person/${person.id}`}>
              <a>{person.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/people");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
