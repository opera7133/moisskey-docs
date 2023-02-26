import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Moisskey Docs</span>,
  project: {
    link: 'https://github.com/vcborn/moisskey',
  },
  docsRepositoryBase: 'https://github.com/vcborn/moisskey-docs/edit/main',
  footer: {
    text: 'Made with Nextra',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Moisskey Docs'
    }
  }
}

export default config
