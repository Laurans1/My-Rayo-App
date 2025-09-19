import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //  Importar HttpHeaders
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Hace que Angular lo tenga disponible en toda la app
})
export class AuthService {
  // Endpoint del login en la API pública de pruebas
  // private urlLogin = 'https://reqres.in/api/login';
  private readonly endpointBaseSalesforce = 'https://co.rayocredit.mx/API/SalesForce/accessToken.php';

  constructor(private readonly http: HttpClient) {}

  /**
   * Método para hacer login en la API
   *  datos Objeto con { userName, password }
   *  Observable con la respuesta del servidor
   */
  login(datos: { userName: string; password: string }): Observable<any> {
    //  headers necesarios para que Reqres acepte la petición
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // se envía JSON
      // 'x-api-key': 'reqres-free-v1'       // API Key obligatoria
      'X-Method': 'login/'
    });

    // Manda un POST a la API con los datos del login y las cabeceras
    return this.http.post<any>(this.endpointBaseSalesforce, datos, { headers });
  }
}
