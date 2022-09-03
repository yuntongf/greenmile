import http from "./HttpService";

export function getMessages() {
  return http.get("");
}

export function getMessage(id) {
  return http.get(`/MessageBoard/Message/${id}`);
}

export function addMessage(message) {
  return http.post(`/MessageBoard/Compose`, message);
}

export function deleteMessage(message) {
  return http.delete(`/MessageBoard/Message/${message._id}`, message);
}

export function updateMessage(message) {
  if (message._id) {
    const body = { ...message};
    delete body._id;
    return http.put(`/MessageBoard/Message/${message._id}`, body);
  }
  return http.post(`/MessageBoard/Message/${message._id}`, message);
}
