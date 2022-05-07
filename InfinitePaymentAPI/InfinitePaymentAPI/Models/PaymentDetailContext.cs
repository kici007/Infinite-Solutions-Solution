using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace InfinitePaymentAPI.Models
{
    public class PaymentDetailContext:IdentityDbContext
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options):base(options)
        {

        }
        
        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}
