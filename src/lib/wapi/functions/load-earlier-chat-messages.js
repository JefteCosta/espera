export function loadChatEarlierMessages(id, done) {
  const found = WAPI.getChat(id);
  if (done !== undefined) {
    found.loadEarlierMsgs().then(function () {
      done();
    });
  } else {
    found.loadEarlierMsgs();
  }
}
