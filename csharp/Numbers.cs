using System;

public class Numbers
{
  public static double TwoDecimalPlaces(double number)
  {
    return Math.Round(number, 2);
  }

  public static long? RangeSum(long n)
  {
    if (n <= 0 || n % 1 != 0) return null;
    return(n * (n + 1)) / 2;
  }
}