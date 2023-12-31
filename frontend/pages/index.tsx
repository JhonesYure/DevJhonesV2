import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './Header'
import Homepage from './HomePage'
import Sobre from './Sobre'
import Contador from './Contador'
import Skills from './Skills'
import Projetos from './Projetos'
import MeuTrabalho from './MeuTrabakho'
import Contato from './Contato'
import Footer from './Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>DevJhones</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" ></link>
      </Head>

      <main className='main'>
        <Header/>

        <Homepage/>

        <Sobre/>
        <Contador/>

        <Skills/>

        <Projetos/>

        <MeuTrabalho/>

        <Contato/>

        <Footer/>

      </main>

      <footer></footer>

      <style jsx>
        {`
          .main {
            background-color: #023047;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </>
  )
}
