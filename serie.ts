export class Series {
    id: number;
    nombre: string;
    plataforma: string;
    temporadas : number;
    descripcion: string;
    link: string;
    imagen: string; 
  
    constructor(id: number, nombre: string, plataforma: string, temporadas : number, descripcion: string, link: string, imagen: string) {
      this.id = id;
      this.nombre = nombre;
      this.plataforma = plataforma;
      this.descripcion = descripcion;
      this.temporadas = temporadas;
      this.link = link;
      this.imagen = imagen;
    }
  }