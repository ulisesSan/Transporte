using System;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PruebaConexion.Conexion;
using PruebaConexion.Models;

namespace PruebaConexion.Controllers
{
	[ApiController]
	[Route("Operadores")]
	public class OperadorController : ControllerBase
	{
		[HttpGet]
		[Route("ListarOperadores")]
		public dynamic ListarOperadores() {

			Conector conexion = new Conector();

			DataTable consultaOperadores = conexion.Listar("listaOperadores");
			string listaOperadores = JsonConvert.SerializeObject(consultaOperadores);

			return new
			{
				Success = true,
				message = "Exito",
				operadores = JsonConvert.DeserializeObject<List<operadores>>(listaOperadores)

			};
		}
		
	}
}

