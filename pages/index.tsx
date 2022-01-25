import type { NextPage } from 'next'
import Head from 'next/head'
import { InvoiceItem } from '../components/InvoiceItem'
import * as S from '../components/Pages/Index/Index.styles'
import { Sidebar } from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <S.RootContainer>
        <div className='left'>
          <Sidebar />
        </div>
        <div className='right'>
          <InvoiceItem />
          <InvoiceItem />
          <InvoiceItem />
          <InvoiceItem />
          <InvoiceItem />
        </div>
      </S.RootContainer>
    </div>
  )
}

export default Home
