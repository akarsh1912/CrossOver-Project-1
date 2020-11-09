import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ImageService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    const options = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
    formData.append('image', image);
    debugger;
    return this.http.post<File>('/api/v1/image-upload', formData, options);
  }
}
//Observable<HttpResponse<any>>
