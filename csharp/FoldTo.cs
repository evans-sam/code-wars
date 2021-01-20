public class Kata
{
  public static int? FoldTo(double distance)
  {
    if(distance <= 0) return null;
    double d = 0.0001;
    int n = 0;
    while(d < distance)
    {
      d *= d;
      n++;
    }

    return n;
  }
}