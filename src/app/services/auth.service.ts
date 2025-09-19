import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //  Importar HttpHeaders
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Hace que Angular lo tenga disponible en toda la app
})
export class AuthService {
  // Endpoint del login en la API pública de pruebas
  private urlLogin = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) {}

  /**
   * Método para hacer login en la API
   *  datos Objeto con { email, password }
   *  Observable con la respuesta del servidor
   */
  login(datos: { email: string; password: string }): Observable<any> {
    //  headers necesarios para que Reqres acepte la petición 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // se envía JSON
      'x-api-key': 'reqres-free-v1'       // API Key obligatoria
    });

    // Manda un POST a la API con los datos del login y las cabeceras
    return this.http.post<any>(this.urlLogin, datos, { headers });
  }
}
