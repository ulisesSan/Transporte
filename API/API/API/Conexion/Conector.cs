using System;
using System.Data;
using System.Data.SqlClient;
using System.Reflection.Metadata;
using PruebaConexion.Conexion.Recursos;

namespace PruebaConexion.Conexion
{
    public class Conector
    {
        SqlConnection conex = new SqlConnection();
        static string server = "localhost";
        static string user = "sa";
        static string port = "1433";
        static string passwd = "Solosoyyo12";
        static string database = "transporte";

        string cadenaConexion = "Data Source=" + server + "," + port + "; user id=" + user + "; password=" + passwd + "; initial catalog=" + database + ";";

        public string  ListaTabla(string Procedimiento)
        {
            SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
            builder.DataSource = "localhost";
            builder.UserID = "sa";
            //static string port = "1433";
            builder.Password = "Solosoyyo12";
            builder.InitialCatalog = "transporte";

            String data = null;
            SqlConnection conexion = new SqlConnection(cadenaConexion);
            SqlDataReader reader;

            try
            {
                SqlCommand command = new SqlCommand(Procedimiento,conexion);
                conexion.Open();
                reader = command.ExecuteReader();

                while (reader.Read())
                {
                    data = reader.GetString(0);
                }
                
            }
            catch(SqlException Ex)
            {
                Console.WriteLine(Ex);
                return data = null;
            }
            finally
            {
                conexion.Close();
            }
            return data;
        }

        public DataTable Listar(string nombreProcedimiento, List<Parametro> parametros = null)
        {
            SqlConnection conexion = new SqlConnection(cadenaConexion);

            try
            {
                conexion.Open();
                SqlCommand cmd = new SqlCommand(nombreProcedimiento, conexion);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                if (parametros != null)
                {
                    foreach (var parametro in parametros)
                    {
                        cmd.Parameters.AddWithValue(parametro.Nombre, parametro.Valor);
                    }
                }
                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);


                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return null;

            }
            finally
            {
                conexion.Close();
            }
        }
    }
}