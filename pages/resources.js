import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/about'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="max-w-5xl pt-36 pb-24 mx-auto text-center">
          <h1 className="text-80 font-4 lh-6 ld-04 font-bold text-white mb-6">
            Welcome to MyWebClass
          </h1>
          <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700">
            nine4 is a free to use template website for websites made
            <br />
            with Next.js and styled with Tailwind CSS
          </h2>
          <Link href="/about" className="inline-flex items-center py-3 px-14 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-blue-500 to-blue-800 text-md md:mt-0 focus:shadow-outline">
            <div className="flex text-lg justify-center">
              Learn More
            </div>
          </Link>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto">
          <img
            className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
            alt="Placeholder Image"
            src="./images/placeholder.png"
          />
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}