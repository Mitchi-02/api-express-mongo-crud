import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constant';
import { Item, ItemPost, SuccessResponse } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  index(): Observable<SuccessResponse<Item[]>> {
    return this.http.get(`${API_URL}/items`);
  }

  store(data: ItemPost) {
    return this.http.post(`${API_URL}/items`, data);
  }

  update(id: string, data: ItemPost) {
    return this.http.put(`${API_URL}/items/${id}`, data);
  }

  destroy(id: string) {
    return this.http.delete(`${API_URL}/items/${id}`);
  }

  show(id: string) {
    return this.http.get(`${API_URL}/items/${id}`);
  }
}
