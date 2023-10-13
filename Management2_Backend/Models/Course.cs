using System;
using System.Collections.Generic;

namespace Management2_Backend.Models;

public partial class Course
{
    public long Id { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? Path { get; set; }
}
