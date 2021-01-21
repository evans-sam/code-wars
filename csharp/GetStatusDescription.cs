   public class Kata
    {
        public enum Status
        {
            Default = 0,
            New = 1,
            Active = 2,
            Deactivated = 3
        }
    
        private readonly Status _status;

        public Kata()
        {
        }

        public Kata(Status status)
        {
            _status = status;
        }

        public string GetStatusDescription()
        {
          return new Dictionary<string, string>()
          {
            { "Default", "I have never been set" },
            { "New", "I am new!" },
            { "Active", "I am active" },
            { "Deactivated", "I have been deactivated" }
          }.TryGetValue(_status, out string status) ? status : throw new InvalidOperationException("Invalid status encountered");
            switch (_status)
            {
                case Status.Default:
                    return "I have never been set";

                case Status.New:
                    return "I am new!";

                case Status.Active:
                    return "I am active";

                case Status.Deactivated:
                    return "I have been deactivated";

                default:
                    throw new InvalidOperationException("Invalid status encountered");
            }
        }
    }