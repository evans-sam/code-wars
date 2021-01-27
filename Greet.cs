using System;
using System.Globalization;

public static class Kata
{
  public static string Greet(string name)
  {
    TextInfo myTI = new CultureInfo("en-US",false).TextInfo;
    return myTI.ToTitleCase($"Hello {name.ToLower()}!");
  }
}