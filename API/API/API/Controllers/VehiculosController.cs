using System.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PruebaConexion.Conexion;
using PruebaConexion.Conexion.Recursos;

namespace API.Controllers
{
	[ApiController]
	[Route("Vehiculos")]
	public class VehiculosController
	{
		[HttpGet]
		[Route("listaVehiculos")]
		public dynamic listaVehiculos()
		{
			Conector conexion = new Conector();

			DataTable consultaVehiculos = conexion.Listar("listaVehiculos");

			string listaVehiculos = JsonConvert.SerializeObject(consultaVehiculos);

			return new {
				success = true,
				message = "Exito",
				vehiculos = JsonConvert.DeserializeObject<List<vehiculos>>(listaVehiculos)
			};
		}

		[HttpPost]
		[Route("ingresaVehiculo")]
		public dynamic agregaUsuario(vehiculos vehiculo)
		{
			Conector conexion = new Conector();

			List<Parametro>? parametros = new List<Parametro>
			{
				new Parametro("@marca", vehiculo.marca),
				new Parametro("@modelo", vehiculo.modelo),
				new Parametro("@km_ingreso",vehiculo.km_ingreso),
				new Parametro("@fecha_ingreso", vehiculo.fecha_ingreso),
				new Parametro("@status_v", vehiculo.status_v),
				new Parametro("@placas",vehiculo.placas),
				new Parametro("@num_serie",vehiculo.num_serie)
			};

			bool exito = conexion.Ejecutar("agregaVehiculo", parametros);

			return new
			{
				success = exito,
				message = exito ? "exito" : "Ocurrio un error"
			};
		}
	}
}