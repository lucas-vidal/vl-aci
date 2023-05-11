import { Injectable } from '@angular/core';
import { getDownloadURL, list, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(
    private storage: Storage
  ) { }

//Subir imagenes
  public uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage,"img/" + name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImage()})
    .catch(error => console.log(error) )
    
  }

  //Traer imagenes
  getImage(){
    const imagesRef = ref(this.storage, 'img')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item)
        console.log(" UrL " + this.url)
      }
    })
    .catch(error => console.log(error) )
  }
}

