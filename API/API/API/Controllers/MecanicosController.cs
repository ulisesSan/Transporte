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

		[HttpPost]
		[Route("editaStatus")]
		public dynamic editastatus(int id_mecanico, string status_m){
			Conector conexion = new Conector();
			List<Parametro>? parametros = new List<Parametro>
			{
				new Parametro("@id_mecanico",id_mecanico.ToString()),
				new Parametro("@status_m",status_m)
			};

			bool exito = conexion.Ejecutar("editastatus", parametros);

			return new{
				succes = true,
				message = exito ? "exito" : "Ocurrio un problema",

			};
		}

	}
}