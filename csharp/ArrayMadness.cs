using System.Linq;
public class Kata
{
  public static bool ArrayMadness(int[] a, int[] b)
  {
    int a2 = 0;
    int b3 = 0;
    for(int i = 0; i < a.Length; i++)
    {
      a2 += a[i] * a[i];
    }
    for(int i = 0; i < b.Length; i++)
    {
      b3 += b[i] * b[i] * b[i];
    }

    return a2 > b3;
  }

  public static bool FunctionalArrayMadness(int[] a, int[] b)
  {
    return a.Select((x) => x * x).Sum()
      > b.Select((x) => x * x * x).Sum();
  }

  public static bool RefactoredFunctionalArrayMadness(int[] a, int[] b)
  {
    return a.Sum((x) => x * x) > b.Sum((x) => x * x * x);
  }
}