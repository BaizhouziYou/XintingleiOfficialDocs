import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { inBrowser } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      window.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.vp-doc, .VPSidebar, .VPNav').forEach((panel) => {
          const rect = panel.getBoundingClientRect()
          const elem = panel as HTMLElement
          elem.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
          elem.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
        })
      })
    }
  }
}