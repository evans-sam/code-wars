using System.Linq;

public static partial class Kata
{
  public static int WordsToMarks(string word)
  {
    return word.Sum((c) => (int)c - 96);
  }
}