public class Fraction
{
  private long Top { get; set; }
  private long Bottom { get; set; }
    
  public Fraction(long numerator, long denominator)
  {
    Top = numerator;
    Bottom = denominator;
  }
  
  // Equality checking
  public override int GetHashCode() => this.GetHashCode(); // not actually used
  public override bool Equals(object o) => Compare(this, o as Fraction) == 0;
  public static bool operator ==(Fraction f1, Fraction f2) => Compare(f1, f2) == 0;
  public static bool operator !=(Fraction f1, Fraction f2) => Compare(f1, f2) != 0;
  private static long Compare(Fraction f1, Fraction f2) => f1.Top * f2.Bottom - f2.Top * f1.Bottom;
  
  // Your work here!
}