import { DOMAINS } from '@shared/utilities'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    const title = 'Swaps'
    const description = 'Browse and swap into your favorite vaults.'
    const keywords =
      'prize savings win save protocol blockchain vault ethereum swap swaps'

    return (
      <Html className='bg-pt-purple-600 text-pt-purple-50 overflow-x-hidden dark'>
        <Head>
          <link rel='icon' href='/favicon.png' type='image/x-icon' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />

          <meta name='theme-color' content='#00E0FF' />
          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />
          <meta name='author' content='Generation Software' />

          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={title} />
          <meta property='og:url' content={DOMAINS.swaps} />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content={`${DOMAINS.swaps}/facebook-share-image-1200-630.png`}
          />
          <meta property='og:rich_attachment' content='true' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />

          <meta property='twitter:title' content={title} />
          <meta property='twitter:description' content={description} />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:site' content={'@g9software'} />
          <meta
            property='twitter:image:src'
            content={`${DOMAINS.swaps}/twitter-share-image-1200-675.png`}
          />
          <meta property='twitter:url' content={DOMAINS.swaps} />
          <meta property='twitter:creator' content={'@g9software'} />

          <link rel='manifest' href='/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
