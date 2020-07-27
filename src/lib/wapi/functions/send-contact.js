export function sendContact(to, contact) {
  if (!Array.isArray(contact)) {
    contact = [contact];
  }

  contact = contact.map((c) => {
    return WAPI.getChat(c).__x_contact;
  });

  if (contact.length > 1) {
    window.WAPI.getChat(to).sendContactList(contact);
  } else if (contact.length === 1) {
    window.WAPI.getChat(to).sendContact(contact[0]);
  }
}
