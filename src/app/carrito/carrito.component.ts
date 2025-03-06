import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,   // Asegúrate de que esté como standalone
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  carrito: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  generarXML() {
    const xml = this.carritoService.generarXML();
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recibo.xml';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  eliminarDelCarrito(index: number) {
    this.carritoService.eliminarDelCarrito(index);
    this.cargarCarrito();
  }
}
