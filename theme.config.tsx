import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Moisskey Docs</span>,
  project: {
    link: 'https://github.com/opera7133/moisskey',
  },
  docsRepositoryBase: 'https://github.com/opera7133/moisskey-docs/edit/main',
  footer: {
    text: 'Nextra Docs Template',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Moisskey Docs'
    }
  }
}

export default config
