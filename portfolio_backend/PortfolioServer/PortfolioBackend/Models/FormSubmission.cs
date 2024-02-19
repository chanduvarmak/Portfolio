using System.ComponentModel.DataAnnotations;

namespace PortfolioBackend.Models
{
  public class FormSubmission
  {
    public int Id { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string Message { get; set; }
  }
}
