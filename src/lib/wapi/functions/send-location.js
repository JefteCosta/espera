export async function sendLocation(chatId, latitude, longitude, caption) {
  loc = loc || '';
  const chat = Store.Chat.get(chatId);
  if (!chat) return false;
  var tempMsg = Object.create(
    Store.Msg.models.filter((msg) => msg.__x_isSentByMe && !msg.quotedMsg)[0]
  );
  const newId = window.WAPI.getNewMessageId(chatId);
  const extend = {
    ack: 0,
    id: newId,
    local: !0,
    isNewMsg: !0,
    self: 'out',
    t: parseInt(new Date().getTime() / 1000),
    to: chatId,
    isNewMsg: !0,
    type: 'location',
    lat: latitude,
    lng: longitude,
    loc: caption,
    clientUrl: undefined,
    directPath: undefined,
    filehash: undefined,
    uploadhash: undefined,
    mediaKey: undefined,
    isQuotedMsgAvailable: false,
    invis: false,
    mediaKeyTimestamp: undefined,
    mimetype: undefined,
    height: undefined,
    width: undefined,
    ephemeralStartTimestamp: undefined,
    body: undefined,
    mediaData: undefined,
    isQuotedMsgAvailable: false,
  };

  Object.assign(tempMsg, extend);
  return (await Promise.all(Store.addAndSendMsgToChat(chat, tempMsg)))[1] ===
    'success'
    ? newId._serialized
    : false;
}
