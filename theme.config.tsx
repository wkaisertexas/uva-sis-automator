import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>UVA Degree Templates</span>,
  project: {
    link: 'https://github.com/wkaisertexas/uva-sis-automator',
  },
  head: <>
    <link rel="icon" type="image/x-icon" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/favicon.svg" />
    <meta property="og:description"
          content="A course-planning utility for UVA students." />
    <meta property="og:image" content="/thumbnail.svg" />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-M8BB9MS7XE"></script>
  <script>
    {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-M8BB9MS7XE');`}
  </script>
  </>,
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/wkaisertexas/uva-sheets',
  footer: {
    text: 'MIT 2021 © William Kaiser',
  },
}

export default config
