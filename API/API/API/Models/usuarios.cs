using System;
namespace PruebaConexion.Models
{
	public class usuarios
	{
		public string? id_usuario { set; get; }
		public string? nombre {set; get;}
		public string? apellido_p { set; get; }
		public string? apellido_m { set; get;}
		public string? status_u { set; get; }
		public string? direccion { set; get;}
		public string? fecha_ingreso { set; get; }
		public string? puesto { set; get; }
	}

	/*public record usuarios{
		public string id_usuario;
		public string nombre;
		public string apellido_p;
		public string apellido_m;
		public string status_u;
		public string direccion;
		public string fecha_ingreso;
		public string puesto;
	}*/
}