import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["<all_urls>"],
  all_frames: true
}

class Actions {
  public changeColor(tagName: string, color: string) {
    const elements = Array.from(document.querySelectorAll(tagName)) as HTMLElement[]
    elements.forEach(element => element.style.color = color)
  }
}

const action = new Actions()

type SendResponse = (errorMessage: string) => void
export type ActionType = keyof Actions
export interface IMessage<T extends ActionType = any> {
  type: T;
  payload: Parameters<Actions[T]>;
}

chrome.runtime.onMessage.addListener((message: IMessage, sender: unknown, sendResponse: SendResponse) => {
  try {
    action[message.type].apply(this, message.payload)
  } catch (e) {
    sendResponse(e.message)
  }
})
