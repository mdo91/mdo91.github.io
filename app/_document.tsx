import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        <link 
          rel="stylesheet" 
          href="https://buildsyr.com/_next/static/css/7d6fce9581a838f0.css" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 