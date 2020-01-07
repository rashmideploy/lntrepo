using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UsingShapeWCFService
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Radius:");
            float radius = Convert.ToSingle(Console.ReadLine());

            ServiceReference1.ShapeServiceClient obj = new ServiceReference1.ShapeServiceClient();
             float area=obj.AreaOfCircle(radius);
             Console.WriteLine("Area of Circle is " + area);

             Console.WriteLine("Enter Length: ");
             float length = Convert.ToSingle(Console.ReadLine());
             Console.WriteLine("Enter Breadth: ");
             float breadth = Convert.ToSingle(Console.ReadLine());
            // ServiceReference1.ShapeServiceClient obj1 = new ServiceReference1.ShapeServiceClient();
             area = obj.AreaOfRectangle(length, breadth);
             Console.WriteLine("Area of Circle is " + area);

          

             Console.ReadKey();


        }
    }
}
