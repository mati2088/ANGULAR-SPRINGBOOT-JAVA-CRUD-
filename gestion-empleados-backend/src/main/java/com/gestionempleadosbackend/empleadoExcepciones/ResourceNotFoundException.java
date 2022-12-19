package com.gestionempleadosbackend.empleadoExcepciones;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
//excepciones personaliadas
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException  {
    private static final long serialVersionID=1L;
    public  ResourceNotFoundException(String mensaje){
        super(mensaje);
    }
}
