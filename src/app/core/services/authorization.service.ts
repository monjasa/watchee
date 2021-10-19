import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public getAccessToken(): string {
    return environment.apiKey;
  }
}
