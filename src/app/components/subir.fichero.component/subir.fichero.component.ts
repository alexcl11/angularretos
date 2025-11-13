import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/service.api';
import { FileModel } from '../../models/FileModel';

@Component({
  selector: 'app-subir-fichero',
  imports: [FormsModule],
  templateUrl: './subir.fichero.component.html',
  styleUrls: ['./subir.fichero.component.css'],
  providers:[ApiService]
})
export class SubirFicheroComponent {
  @ViewChild('cajafile') file!: ElementRef

  constructor(private _service:ApiService){}

  subirFichero(): void{
    var file = this.file.nativeElement.files[0]
    //ELIMINAMOS LAS BARRAS QUE INCLUYE EL TIPO FILE EN EL NAME 
    //YA QUE VIENE LA RUTA Y NECESITAMOS EL NOMBRE DEL FICHERO 
    var miPath = this.file.nativeElement.value.split("\\")
    var ficheroNombre = miPath[2]
    console.log(ficheroNombre)
    var reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () =>{
      let buffer: ArrayBuffer;
      buffer = reader.result as ArrayBuffer; 
      let base64: string;

      base64 = btoa(
        new Uint8Array(buffer).
        reduce((data, byte)=>data + String.fromCharCode(byte), "")
      )

      var newFileModel = new FileModel(ficheroNombre, base64);
      this._service.uploadFile(newFileModel).subscribe(response => {
        console.log(response)
      })
    }
  }
  
}
