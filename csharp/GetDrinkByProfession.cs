using System.Collections.Generic;

public class Kata
{
  public static string GetDrinkByProfession(string profession)
  {
    return new Dictionary<string, string>()
    {
      { "jabroni", "Patron Tequila" },
      { "school counselor", "Anything with Alcohol" },
      { "programmer", "Hipster Craft Beer" },
      { "bike gang member", "Moonshine" },
      { "politician", "Your tax dollars" },
      { "rapper", "Cristal" },
      { "default", "Beer" },
    }.TryGetValue(profession.ToLower(), out string drink) ? drink : "Beer";
  }
}