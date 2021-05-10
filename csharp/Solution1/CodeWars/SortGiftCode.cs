using System;

public partial class Kata
{
  public static string SortGiftCode(string code)
  {
    char[] split = code.ToCharArray();
    Array.Sort(split);
    return new string(split);
  }

}