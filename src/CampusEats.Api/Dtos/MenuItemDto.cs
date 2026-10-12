namespace CampusEats.Api.Dtos;

// Output DTO - returned to the client
public record MenuItemDto(
    int Id,
    string Name,
    decimal Price,
    string Category,
    bool Available
);
