package models;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class usuariosModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private int id_usuario;
    private String nombre;
    private String apellido_p;
    private String apellido_m;
    private String status_u;
    private String direccion;
    private String passwd;
    private String fecha_ingreso;
    private String puesto;

    //set and get id_usuario
    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    //set and get nombre
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    //set and get apellido_p
    public String getApellido_p() {
        return apellido_p;
    }

    public void setApellido_p(String apellido_p) {
        this.apellido_p = apellido_p;
    }
    //set and get apellido_m
    public String getApellido_m() {
        return apellido_m;
    }

    public void setApellido_m(String apellido_m) {
        this.apellido_m = apellido_m;
    }
    //set and get status_u
    public String getStatus_u() {
        return status_u;
    }

    public void setStatus_u(String status_u) {
        this.status_u = status_u;
    }
    //set and get direccion
    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    //set and get passwd
    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }
    //set and get fecha_ingreso
    public String getFecha_ingreso() {
        return fecha_ingreso;
    }

    public void setFecha_ingreso(String fecha_ingreso) {
        this.fecha_ingreso = fecha_ingreso;
    }
    //set and get puesto
    public String getPuesto() {
        return puesto;
    }

    public void setPuesto(String puesto) {
        this.puesto = puesto;
    }
}
