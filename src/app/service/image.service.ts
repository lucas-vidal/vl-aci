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
public async uploadImage($event: any, name: string): Promise<void> {
  return new Promise<void>(async (resolve, reject) => {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, "img/" + name);
    await uploadBytes(imgRef, file)
      .then(async () => {
        await this.getImage("img/" + name);
        resolve();
      })
      .catch((error) => reject(error));
  });
}

  //Traer imagenes
  async getImage(name: string): Promise<void> {
    const imagesRef = ref(this.storage, 'img');
    await new Promise<void>((resolve, reject) => {
      list(imagesRef)
        .then(async response => {

          for (let item of response.items) {

            if (item.fullPath === name) {
             
              this.url = await getDownloadURL(item);
              console.log("Url: " + this.url);
            }

            
          }
          resolve();
        })
        .catch(error => reject(error));
    });
  }
}

