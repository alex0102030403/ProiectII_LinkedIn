using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<Domain.AppUser>
    {
        
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Domain.Job> Jobs { get; set; }

        public DbSet<Domain.JobApplication> JobApplications { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Domain.JobApplication>(x => x.HasKey(aa => new {aa.AppUserId, aa.JobId}));

            builder.Entity<Domain.JobApplication>()
                .HasOne(u => u.AppUser)
                .WithMany(j => j.Applications)
                .HasForeignKey(u => u.AppUserId);

            builder.Entity<Domain.JobApplication>()
                .HasOne(j => j.Job)
                .WithMany(u => u.Applicants)
                .HasForeignKey(j => j.JobId);
            
        }

    }
}