using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace LTIDBWCF1Service
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class CustomerService : ICustomerService
    {
        static string connectionString = ConfigurationManager.AppSettings["CMSDBCS"].ToString();
        SqlConnection con = new SqlConnection(connectionString);
        public System.Data.DataSet GetAllCustomers()
        {
            con.Open();
            string query = "usp_DisplayCustomer";
            SqlDataAdapter adapter = new SqlDataAdapter(query,con);
            adapter.SelectCommand.CommandType = CommandType.StoredProcedure;

            DataSet dsObj = new DataSet();
            adapter.Fill(dsObj, "Customer");
            con.Close();
            return dsObj;
        }
    }
}
