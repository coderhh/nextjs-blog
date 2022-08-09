import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getCompanyInfoData } from '../lib/spacex'
import { GetStaticProps } from 'next'

export default function About({
    companyInfoData
}: {
    companyInfoData: {
        name: string
        summary: string
        founder: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Travel to Mars</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{companyInfoData.name}</h2>
        <section className={utilStyles.headingMd}>
            <p>{companyInfoData.founder}</p>
        </section>
        <p>{companyInfoData.summary}</p>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const companyInfoData = await getCompanyInfoData()
  return {
    props: {
        companyInfoData
    }
  }
}