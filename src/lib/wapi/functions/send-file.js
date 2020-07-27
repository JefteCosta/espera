import { processFiles } from './process-files';
import { base64ToFile } from '../helper';

export function sendFile(imgBase64, chatid, filename, caption, done) {
  const idUser = new Store.WidFactory.createWid(chatid);
  return Store.Chat.find(idUser).then((chat) => {
    var mediaBlob = base64ToFile(imgBase64, filename);
    processFiles(chat, mediaBlob).then((mediaCollection) => {
      var media = mediaCollection.models[0];
      media.sendToChat(chat, { caption: caption });
      if (done !== undefined) done(true);
    });
  });
}
