import messagesPtBr from "../locales/pt-br/messages.json";
import { useMeuContext } from '../../context/Context';

const messages = {
  ptBr: messagesPtBr,
};

function translateMessage(key, params = {}) {
  const {selectedMessage} = useMeuContext();
  if (messages[selectedMessage] && messages[selectedMessage][key]) {
    let message = messages[selectedMessage][key];
    for (const param in params) {
      message = message.replace(`{${param}}`, params[param]);
    }
    return message;
  }
  return key;
}

export default translateMessage;
