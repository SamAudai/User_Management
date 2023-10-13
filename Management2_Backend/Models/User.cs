using System;
using System.Collections.Generic;

namespace Management2_Backend.Models;

public partial class User
{
    public long Id { get; set; }

    public string? FullName { get; set; }

    public string? City { get; set; }

    public string? Password { get; set; }

    public string? Type { get; set; }

    public string? UserName { get; set; }
}
