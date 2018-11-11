import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorService {


  constructor(private http: HttpClient) { }

  configUrl = 'http://www.colr.org/json/color/random';

  // HTTP Request to get get random color from URL
  getColor() {
    return this.http.get<any>(this.configUrl);
  }
}
