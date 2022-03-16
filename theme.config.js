export default {
  github: 'https://github.com/Prototypr/gftw-project',
  docsRepositoryBase: 'https://github.com/Prototypr/gftw-project/blob/master',
  titleSuffix: ' – Prototypr',
  defaultMenuCollapsed:true,
  logo: (
    <>
      {/* <span className="mr-2 font-extrabold hidden md:inline">Prototypr</span> */}
      <img style={{width:'120px'}} className="mr-2" alt="Prototypr.io Logotext" src="https://letter-so.s3.us-west-1.amazonaws.com/uploads/LQatPZxS8qFXER9Hi/2rzv1a"/>
      <span className="text-gray-600 font-normal hidden md:inline">
        Grant For The Web Project
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="monetization" content="$ilp.uphold.com/KFf2ZdYLXnj9"></meta>
      <meta name="description" content="This is an open source, living documention on the development of the Prototypr Grant for The Web Project: 'Democratising Design Education with a Web Monetized Publishing Platform'." />
      <meta name="og:description" content="This is an open source, living documention on the development of the Prototypr Grant for The Web Project:'Democratising Design Education with a Web Monetized Publishing Platform'." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://prototyprio.gumlet.net/wp-content/uploads/2022/01/Twitter-post-179-1.png?format=webp&w=1242" />
      <meta name="twitter:site:domain" content="prototypr.io" />
      <meta name="twitter:url" content="https://prototypr.io" />
      <meta name="og:title" content="Prototypr Grant for the Web Project: Open Source and Web Monetization Docs" />
      <meta name="og:image" content="https://prototyprio.gumlet.net/wp-content/uploads/2022/01/Twitter-post-179-1.png?format=webp&w=1242" />
      <meta name="apple-mobile-web-app-title" content="Prototypr" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Prototypr.</>,
  unstable_faviconGlyph: '🌐',
}
