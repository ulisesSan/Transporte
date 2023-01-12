using System;
using System.Data;
using System.Data.SqlClient;
using System.Net.Http.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PruebaConexion.Conexion;
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
	}
}