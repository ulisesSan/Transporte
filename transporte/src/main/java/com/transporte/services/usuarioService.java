package com.transporte.services;
import com.transporte.repositories.usuarioRepository;
import com.transporte.models.usuariosModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class usuarioService {
    @Autowired
    usuarioRepository uRepo;
    public ArrayList<usuariosModel> obtenerUsuarios(){

            return (ArrayList<usuariosModel>) uRepo.findAll();
    }

    public usuariosModel guardarUsuario(usuariosModel usuario){
        return uRepo.save(usuario);
    }

}
