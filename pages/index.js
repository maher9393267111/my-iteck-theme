import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
 import Test from '@components/test'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>




<Test/>

<div className="section-head style-4">
                <small className="title_small">{ 'Testimonials' }</small>
                <h2 className="mb-20">{  'Our Happy' } <span>{'Clients' }</span></h2>
              </div>
              <p className="text mb-10">
                {'Sangat bagus dan berpengalaman jika membuat sistem informasi di Cv. Newus Teknologi.' }
              </p>


    
    </div>
  )
}
