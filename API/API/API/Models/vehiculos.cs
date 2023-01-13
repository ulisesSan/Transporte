using System;
namespace API.Models
{
	public class vehiculos
	{
		public int id_vehiculo { get; set; }
		public string? marca { get; set; }
		public string? modelo { get; set; }
		public string? km_ingreso { get; set; }
		public string? fecha_ingreso { get; set; }
		public string? status_v { get; set; }
        public string? placas { get; set; }
        public string? num_serie { get; set; }
    }
}

