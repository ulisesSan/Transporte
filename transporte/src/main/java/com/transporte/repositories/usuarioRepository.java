package com.transporte.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.transporte.models.usuariosModel;

@Repository
public interface usuarioRepository extends CrudRepository<usuariosModel,Long> {

}
