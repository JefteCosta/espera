export async function promoteParticipant(groupId, particiapntId, done) {
  const chat = Store.Chat.get(groupId);
  const participant = chat.groupMetadata.participants.get(particiapntId);
  return window.Store.Participants.promoteParticipants(chat, [
    participant,
  ]).then(() => {
    done(true);
    return true;
  });
}
