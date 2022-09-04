import http from "./HttpService";

export function getItems() {
   return http.get("/Market");
}

export function addItem(item) {
   return http.post("/Sell", item);
}

export function getItem(id) {
   return http.get(`/Buy/${id}`);
}

export function deleteItm(item) {
   return http.delete(`/Delete/${item._id}`, item);
}

export function updateItm(item) {
   return http.put(`/Buy/${item._id}`, item);
}

