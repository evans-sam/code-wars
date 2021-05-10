using System;

public partial class Kata
{
  public static char GetGrade(int s1, int s2, int s3)
  {
    double average = (s1 + s2 + s3) / 3;
    if (average <= 100 && average >= 90) return 'A';
    else if (average >= 80) return 'B';
    else if (average >= 70) return 'C';
    else if (average >= 60) return 'D';
    else return 'F';
  }

}