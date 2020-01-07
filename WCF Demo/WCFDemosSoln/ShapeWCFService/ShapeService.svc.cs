using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace ShapeWCFService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class ShapeService : IShapeService
    {

        public float AreaOfCircle(float radius)
        {
            float area=(float)(Math.PI*radius*radius);
            return area;
        }

        public float AreaOfRectangle(float length,float breadth)
        {
            float area1 = length*breadth;
            return area1;
        }
    }
}
