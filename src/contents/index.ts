import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["<all_urls>"],
  all_frames: true
}

export interface IMessage {
  type: string;
  payload: unknown;
}

chrome.runtime.onMessage.addListener((message: IMessage, sender: unknown, sendResponse: unknown) => {
  if (message.type === 'changeColor') {
    const elements = Array.from(document.querySelectorAll('span'))
    elements.forEach(element => element.style.color = 'red')
  }
})
