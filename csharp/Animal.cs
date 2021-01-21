public class Shark : Animal
{
  public Shark(string name, int age, string status) : base(name, age, 0, "shark", status) {}
}

public class Cat : Animal
{
  public Cat(string name, int age, string status) : base(name, age, 4, "cat", status) {}

  public override string Introduce()
  {
    return base.Introduce() + "  Meow meow!";
  }
}

public class Dog : Animal
{
  public string Master;
  public Dog(string name, int age, string status, string master) : base(name, age, 4, "dog", status)
  {
    this.Master = master;
  }

  public virtual string GreetMaster()
  {
    return $"Hello {this.Master}";
  }
}