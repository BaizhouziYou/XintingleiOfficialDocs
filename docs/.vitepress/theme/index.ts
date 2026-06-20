import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { inBrowser } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp() {
    if (inBrowser) {
      let panels = Array.from(document.querySelectorAll<HTMLElement>('.vp-doc, .VPSidebar, .VPNav'))
      let rafId = 0
      let mouseX = 0
      let mouseY = 0

      const updatePanels = () => {
        rafId = 0
        panels.forEach((panel) => {
          const rect = panel.getBoundingClientRect()
          panel.style.setProperty('--mouse-x', `${mouseX - rect.left}px`)
          panel.style.setProperty('--mouse-y', `${mouseY - rect.top}px`)
        })
      }

      const refreshPanels = () => {
        panels = Array.from(document.querySelectorAll<HTMLElement>('.vp-doc, .VPSidebar, .VPNav'))
      }

      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX
        mouseY = e.clientY

        if (!rafId) {
          rafId = window.requestAnimationFrame(updatePanels)
        }
      })

      window.addEventListener('resize', refreshPanels)
    }
  }
}
