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
            String data = "";
            SqlConnection conexion = new (cadenaConexion);
            SqlDataReader reader;

            try
            {
                SqlCommand command = new (Procedimiento,conexion);
                conexion.Open();
                reader = command.ExecuteReader();

                while (reader.Read())
                {
                    data = reader.GetString(0);
                }
                return data;
            }
            catch(SqlException Ex)
            {
                Console.WriteLine(Ex);
                return data;
            }
            finally
            {
                conexion.Close();
            }

        }

        public DataTable Listar(string nombreProcedimiento, List<Parametro>? parametros = null)
        {
            SqlConnection conexion = new (cadenaConexion);
            DataTable? tabla = new();

            try
            {
                conexion.Open();
                SqlCommand cmd = new(nombreProcedimiento, conexion)
                {
                    CommandType = System.Data.CommandType.StoredProcedure
                };

                if (parametros != null)
                {
                    foreach (var parametro in parametros)
                    {
                        cmd.Parameters.AddWithValue(parametro.Nombre, parametro.Valor);
                    }
                }
                
                SqlDataAdapter da = new (cmd);
                da.Fill(tabla);
                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return tabla;

            }
            finally
            {
                conexion.Close();
            }

            
        }

        public bool Ejecutar(string nombreProcedimiento, List<Parametro>? parametros = null)
        {
            SqlConnection conexion = new (cadenaConexion);


            try
            {
                conexion.Open();
                SqlCommand cmd = new(nombreProcedimiento, conexion);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                if (parametros != null)
                {
                    foreach (var parametro in parametros)
                    {
                        cmd.Parameters.AddWithValue(parametro.Nombre, parametro.Valor);
                    }
                }

                int i = cmd.ExecuteNonQuery();

                return (i > 0) ? true : false;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
            finally
            {
                conexion.Close();
            }
        }
    }
}