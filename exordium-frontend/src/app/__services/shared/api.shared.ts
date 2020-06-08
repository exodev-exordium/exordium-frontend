import { HttpHeaders } from '@angular/common/http';

export class API {
    public endpoint = 'https://api.exordium.org';
    public headers = new HttpHeaders().set('Content-Type', 'application/json');
}