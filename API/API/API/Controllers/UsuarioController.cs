using System;
using System.Data;
using System.Data.SqlClient;
using System.Net.Http.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PruebaConexion.Conexion;
using PruebaConexion.Conexion.Recursos;
using PruebaConexion.Models;

namespace PruebaConexion.Controllers
{
	[ApiController]
	[Route("Usuarios")]
	public class UsuarioController : ControllerBase
	{
		[HttpGet]
		[Route("listarUsuarios")]
		public dynamic Listarusuarios()
		{
			Conector conexion = new Conector();

			DataTable consultaUsuario = conexion.Listar("listaUsuarios");

			string usuarioLista = JsonConvert.SerializeObject(consultaUsuario);
			
            return new
			{
				success = true,
				message = "exito",
				result = new
				{
					usuario = JsonConvert.DeserializeObject<List<usuarios>>(usuarioLista)
				}
			};
		}

		[HttpPost]
		[Route("agregaUsuario")]
		public dynamic agregaUsuario(usuarios usuario, string passwd)
		{
			Conector conexion = new Conector();
			List<Parametro>? parametros = new List<Parametro>
			{
				new Parametro("@Unombre",usuario.nombre),
                new Parametro("@Uapellido_p",usuario.apellido_p),
                new Parametro("@Uapellido_m",usuario.apellido_m),
                new Parametro("@Ustatus_u",usuario.status_u),
                new Parametro("@Udireccion",usuario.direccion),
				new Parametro("@Upasswd", passwd),
                new Parametro("@Ufechaingreso",usuario.fecha_ingreso),
                new Parametro("@Upuesto",usuario.puesto)
            };

			bool exito = conexion.Ejecutar("agregaUsuario", parametros);

			return new
			{
				Success = exito,
				message = exito ? "exito" : "Ocurrio un error",
				
			};
		}

		[HttpPost]
		[Route("actualizaUsuario")]
		public dynamic actualizaUsuario(usuarios usuario, string passwd)
		{
			Conector conexion = new Conector();
			List<Parametro>? parametros = new List<Parametro>
			{
				new Parametro("@id_usuario",usuario.id_usuario),
				new Parametro("@Unombre",usuario.nombre),
                new Parametro("@Uapellido_p",usuario.apellido_p),
                new Parametro("@Uapellido_m",usuario.apellido_m),
                new Parametro("@Ustatus_u",usuario.status_u),
                new Parametro("@Udireccion",usuario.direccion),
				new Parametro("@Upasswd", passwd),
                new Parametro("@Ufechaingreso",usuario.fecha_ingreso),
                new Parametro("@Upuesto",usuario.puesto)
            };

			bool exito = conexion.Ejecutar("actualizaUsuario", parametros);

			return new
			{
				Success = exito,
				message = exito ? "exito" : "Ocurrio un error",
				
			};
		}
	}
}