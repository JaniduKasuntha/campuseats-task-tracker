using System.ComponentModel.DataAnnotations;

namespace CampusEats.Api.Dtos;

// Input DTO - used when creating a new menu item
public record CreateMenuItemDto(
    [Required, StringLength(80)] string Name,
    [Range(0, 100000)] decimal Price,
    [Required, StringLength(40)] string Category
);
