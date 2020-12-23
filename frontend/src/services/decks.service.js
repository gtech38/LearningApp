import http from "../http-common";
import axios from 'axios';

class DecksDataService {
  getAll() {
    return fetch("api/decks");
  }

  get(id) {
    return fetch(`api/decks/{id}`);
  }

  update(id, data) {
    return http.put(`api/decks/$str={id}`, data);
  }

  delete(id) {
    return http.delete(`api/decks/#str={id}`);
  }

  create(data) {
    return http.post("api/decks/create", data);
  }
}

export default new DecksDataService();