using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Demo for WCF Service");
            Console.WriteLine("Customer Details are:");
            ServiceReference1.CustomerServiceClient obj = new ServiceReference1.CustomerServiceClient();
            DataSet dsObj = obj.GetAllCustomers();

            DataTable dtCustomer = dsObj.Tables["Customer"];
            if (dtCustomer.Rows.Count > 0)
            {
                foreach(DataRow row in dtCustomer.Rows)
                {
                    foreach(DataColumn col in dtCustomer.Columns)
                    {
                        Console.WriteLine(row[col] + " ");
                    }
                    Console.WriteLine();
                }
            }
            else
            {
                Console.WriteLine("No Customers Available");
            }

            Console.ReadKey();

        }
    }
}
