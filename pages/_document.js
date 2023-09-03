/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/next-script-for-ga */
import Document, { Head, Html, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="en-US">
                <Head >

                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico" />
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                    <meta name="theme-color" content="#000000" />

                    {/* <meta name="ahrefs-site-verification" content="81fd263352cf2c288d1cb240c3109f64c890adf1e571d1bb062cc243dc97691f" /> */}

                    <meta name="google-site-verification" content="kpO7f0SwRMHk7xD5nQt4lWst63p3iVMFIB9tc0pymfA" />
                    <meta name="google-site-verification" content="vBqJ55AQ09W0X-pj39SA53406lCKVvOh7WcJh18P3I0" />
                    <meta name="google-site-verification" content="LMKkXyvsRemsKQO8n2CQRjVA8eTYmWV0ywS4_AMmgd4" />
                    <meta name="msvalidate.01" content="AFE22B83293CEE8BF906D174601929C7" />

                    {/* Canonical */}
                    <link rel="apple-touch-icon" href="/logo192.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
                        rel="stylesheet"
                    />

                    {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
                        rel="preload" as="style" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-NCMR95T');
                            `}} async
                    ></script>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11125433861"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                           window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                                gtag('config', 'AW-11125433861');
                            `}} async
                    ></script>
                </Head>
                <body>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-NCMR95T"></script>

                    <Main />
                    <NextScript />

                    <script async src="https://www.paypalobjects.com/api/checkout.js" ></script >
                    <script async src="https://js.braintreegateway.com/web/dropin/1.25.0/js/dropin.js" ></script>
                    <script
                        src="https://kit.fontawesome.com/b1c6d9876c.js"
                        crossOrigin="anonymous"
                        async
                    ></script>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106158068-1"></script>
                    <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlfzQsZBUkimGvH80z80i8I-P6UwidPSU&libraries=places" ></script>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QB6LC1GJEH"></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer ||[];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-QB6LC1GJEH');`
                    }}
                        async
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'UA-106158068-1');
                            `}} async
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                              window.addEventListener('load', function() {
                                if (window.location.href.indexOf('/success-confirm') != -1) {
                                gtag('event', 'conversion', {
                                    'send_to': 'AW-11125433861/SJlTCJCShaAYEIXMgrkp'
                                });
                                }
                            });
                            `}} async
                    ></script>
                </body>
            </Html >
        )
    }
}

export default MyDocument