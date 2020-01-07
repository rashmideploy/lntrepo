using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace UsingCalcWebService
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Addition");
            Console.Write("Enter the first number: ");
            float fn = Convert.ToSingle(Console.ReadLine());

            Console.Write("Enter the second number: ");
            float sn = Convert.ToSingle(Console.ReadLine());

            localhost.CalcService calcObj = new localhost.CalcService();
            float result = calcObj.Addition(fn, sn);

            Console.WriteLine("Addition is" + result);

            localhost.CalcService calcObj1 = new localhost.CalcService();
            float result1 = calcObj1.Subtraction(fn, sn);
            Console.WriteLine("Subtraction is" + result1);

            Console.ReadKey();
        }
    }
}
