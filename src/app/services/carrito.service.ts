import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: Producto[] = [];

  constructor() {
    // Verifica si estás en el navegador
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const storedCart = localStorage.getItem('carrito');
      this.carrito = storedCart ? JSON.parse(storedCart) : [];
    }
  }

  agregarProducto(producto: Producto) {
    this.carrito.push(producto);
    this.guardarCarrito();
  }

  obtenerCarrito(): Producto[] {
    return this.carrito;
  }

  eliminarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
    this.guardarCarrito();
  }

  private guardarCarrito() {
    // Verifica si estás en el navegador
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }
  }

  generarXML(): string {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<recibo>\n`;
    this.carrito.forEach((producto) => {
      xml += `<producto>\n
                <nombre>${producto.nombre}</nombre>\n
                <precio>${producto.precio}</precio>\n
              </producto>\n`; 
    });
    xml += '</recibo>';
    return xml;
  }
}
