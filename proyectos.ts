import { Component, signal } from '@angular/core';
import { ApiService, Proyecto } from '../../services/api-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'page-proyectos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css']
})
export class ProyectosPage {
  // Se crea un objeto de tipo Proyecto
  nuevoProyecto: Proyecto = {
    id_proyecto: undefined,
    nombre: '',
    descripcion: ''
  };

  mensajeCrear: string = '';
  mensajeConsultar: string = '';
  mensajeOperacion: string = '';

  response = signal(true); // Signal que indica si la petición fue exitosa o no
  activarInputs = signal(false); // Signal para activar o desactivar los input
  activarBotonesProyecto = signal(false); // Signal para activar los botones de modificar o eliminar

  constructor(private apiService: ApiService) {}

  // Método para obtener un proyecto de la BD
  cargarProyecto() {
    this.apiService.getProyecto(this.nuevoProyecto.id_proyecto!).subscribe({
      // Validar si data existe, es null cuando se ingresa un id que no existe en la bd y truena
      // Para evitar que truene, validamos si data existe
      next: (data) => {
        if (data) {
          // Asignar los valores de data a los input con ngModel
          this.nuevoProyecto.id_proyecto = data.id_proyecto;
          this.nuevoProyecto.nombre = data.nombre;
          this.nuevoProyecto.descripcion = data.descripcion;
          this.mensajeConsultar = ''; // Resetear el mensaje

          this.activarInputs.set(true);
          this.activarBotonesProyecto.set(true);
          return;
        } else {
          this.response.set(false);
          this.mensajeConsultar = 'No se encontró el proyecto';
          return;
        }
      },
      error: (err) => {
        this.response.set(false);
        this.mensajeConsultar = 'Error al consultar el proyecto';
        console.error(err)
      }
    });
  }

  // Método para crer un proyecto a la BD
  crearProyecto() {
    this.apiService.enviarDatosProyectos(this.nuevoProyecto!).subscribe({
      next: (res) => {
        this.response.set(true);
        this.mensajeCrear = '¡Proyecto Creado!';
        console.log(res);
        // Resetear los valores de los input
        this.nuevoProyecto.id_proyecto = undefined;
        this.nuevoProyecto.nombre = '';
        this.nuevoProyecto.descripcion = '';
      },
      error: (err) => {
        this.response.set(false);
        this.mensajeCrear = 'Error al crear el proyecto.';
        console.error(err);
      }
    });
  }

  // Función que valida si los datos ingresados en los input no están vacíos
  validarCrearProyecto() {
    // Verifiva si alguno de los input están vacíos
    if (!this.nuevoProyecto.nombre.trim() || !this.nuevoProyecto.descripcion) {
      this.response.set(false);
      this.mensajeCrear = 'Todos los campos son obligatorios';
      return;
    } else {
      this.crearProyecto();
    }
  }

  // Función que valida si se ingreso el id en el input
  validarConsultarProyecto() {
    if (!this.nuevoProyecto.id_proyecto) {
      this.response.set(false);
      this.mensajeConsultar = 'Ingrese el id del proyecto';
      return
    } else {
      this.cargarProyecto();
    }
  }

  // Método para editar un proyecto, una vez que haya sido consultado
  editarProyecto() {
    this.apiService.editarProyecto(this.nuevoProyecto!).subscribe({
      next: (res) => {
        this.response.set(true);
        this.mensajeOperacion = '¡Proyecto Actualizado!';
        console.log(res);
        // Resetear los valores de los input
        this.nuevoProyecto.id_proyecto = undefined;
        this.nuevoProyecto.nombre = '';
        this.nuevoProyecto.descripcion = '';

        this.activarInputs.set(false);
        this.activarBotonesProyecto.set(false);
      },
      error: (err) => {
        this.response.set(false);
        this.mensajeOperacion = 'Error al actualizar el proyecto.';
        console.error(err);
      }
    });
  }

  // Método para eliminar un proyecto ya consultado
  eliminarProyecto() {
    this.apiService.eliminarProyecto(this.nuevoProyecto.id_proyecto!).subscribe({
      next: (res) => {
        this.mensajeOperacion = '';

        this.response.set(true);
        this.mensajeOperacion = '¡Proyecto Eliminado!';
        console.log(res);
        // Resetear los valores de los input
        this.nuevoProyecto.id_proyecto = undefined;
        this.nuevoProyecto.nombre = '';
        this.nuevoProyecto.descripcion = '';
      },
      error: (err) => {
        this.response.set(false);
        this.mensajeOperacion = 'Error al eliminar el proyecto.';
        console.error(err);
      }
    });
  }

  // Función para cambiar los estados de los input y de los botones
  cambaiarEstadosInput(){
    this.nuevoProyecto.id_proyecto = undefined;
    this.nuevoProyecto.nombre = '';
    this.nuevoProyecto.descripcion = '';

    this.activarInputs.update(value => !value);
    this.activarBotonesProyecto.update(value => !value);
  }

  // Función para borrar los mensajes
  resetarMensajes() {
    this.mensajeConsultar = '';
    this.mensajeCrear = '';
    this.mensajeOperacion = '';
  }
}
