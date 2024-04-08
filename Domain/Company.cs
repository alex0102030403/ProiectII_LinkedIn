namespace Domain
{
    public class Company
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Image { get; set; }

        
        public ICollection<Job> Jobs { get; set; }
    }
}