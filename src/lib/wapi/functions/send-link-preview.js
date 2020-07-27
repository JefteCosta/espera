export async function sendLinkPreview(chatId, url, text) {
  text = text || '';
  var chatSend = WAPI.getChat(chatId);
  if (chatSend === undefined) {
    return false;
  }
  const linkPreview = await Store.WapQuery.queryLinkPreview(url);
  return (
    (await chatSend.sendMessage(text.includes(url) ? text : `${url}\n${text}`, {
      linkPreview,
    })) == 'success'
  );
}
