import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["<all_urls>"],
  all_frames: true
}

window.addEventListener('load', () => {
  const elements = Array.from(document.querySelectorAll('span'))
  elements.forEach(element => element.style.color = 'red')
})