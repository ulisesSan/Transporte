package com.transporte.controllers;

import com.transporte.models.usuariosModel;
import com.transporte.repositories.usuarioRepository;
import com.transporte.services.usuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/usuario")
public class usuarioController {
    @Autowired
    usuarioRepository uRepo;
    @Autowired
    usuarioService service;

    @GetMapping()
    public ResponseEntity<ArrayList<usuariosModel>> obtenerUsuarios(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .header("Content-type", "application/json","Access-Control-Allow-Origin: *")
                .body(service.obtenerUsuarios());
        //return service.obtenerUsuarios();
    }

    @PostMapping()
    public usuariosModel guardarUsuario(@RequestBody usuariosModel usuario){
        return service.guardarUsuario(usuario);
    }
}
