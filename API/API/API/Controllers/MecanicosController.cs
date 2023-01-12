using System;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PruebaConexion.Conexion;
using PruebaConexion.Models;

namespace PruebaConexion.Controllers
{
    [ApiController]
    [Route("Mecanicos")]
    public class MecanicosController : ControllerBase
	{
		[HttpGet]
		[Route("ListarMecanicos")]

		public dynamic ListarMecanicos()
		{
			Conector conexion = new Conector();
			DataTable consultaMecanicos = conexion.Listar("listaMecanicos");

			string listaMencanicos = JsonConvert.SerializeObject(consultaMecanicos);
			return new
			{
				success = true,
				message = "exito",
				mecanicos = JsonConvert.DeserializeObject<List<mecanicos>>(listaMencanicos)
			};
		}

	}
}