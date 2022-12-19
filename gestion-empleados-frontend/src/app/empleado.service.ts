import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //URL optiene el listado de todos los empleados en el back end
  private baseURL="http://localhost:8080/api/v1/empleados";

  constructor(private httpClient: HttpClient) { }
  //este metodo nos sirve para obtener los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`)

  }
  //este metodo nos sirve para registrar un empleado
  registrarEmpleado(empleado:Empleado):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);

  }
  //este metodo sirve para actualizar un empleado
  //este metodo sirve para actualizar el empleado
  actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

  //metodo para obtener un empleado por id
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }
  //metodo para eliminar un empleado por id
  eliminarEmpleado(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }



}
