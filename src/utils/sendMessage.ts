import { getCurrentTab } from '~src/utils/getCurrentTab'
import type { ActionType, IMessage } from '~src/contents'

export async function sendMessage<T extends ActionType>(message: IMessage<T>) {
  const tab = await getCurrentTab();
  chrome.tabs.sendMessage(tab.id, message, console.error)
}
