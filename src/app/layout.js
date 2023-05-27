import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'
import Head from 'next/head'
import Script from 'next/script';

export const metadata = {
  charset:'UTF-8',
  title: 'Online coding playground',
  description: 'Online coding playground',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <link href="https://craig.global.ssl.fastly.net/rainbow-themes/rainbow.css?2.1.4" rel="stylesheet" type="text/css" media="screen"></link>
      </Head>
      <html lang="en">
        <body>
          {children}
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous" strategy="afterInteractive" />
          <Script src="https://craig.global.ssl.fastly.net/js/rainbow/rainbow.min.js?00e3a" strategy="afterInteractive" />
        </body>
      </html>
    </>
  )
}
