import { Component, OnInit } from '@angular/core';


class ImageSnippet {

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  selectedFile: ImageSnippet;
  constructor() { }

  ngOnInit(): void {
  }
  processFile(imageInput: any) {
    debugger;
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {

      debugger;
      this.selectedFile = new ImageSnippet(event.target.result, file);
    });
  reader.readAsDataURL(file);
  }

}
