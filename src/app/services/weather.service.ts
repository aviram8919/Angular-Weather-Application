import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  
  apiKey: string = 'bfcd1adf0a4360955d4aa4cb35b560d5';
  URI: string = '';

  constructor(private http: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string, countryCode: string){
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }

  
}
/*bfcd1adf0a4360955d4aa4cb35b560d5*/