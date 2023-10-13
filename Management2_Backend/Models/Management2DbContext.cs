using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Management2_Backend.Models;

public partial class Management2DbContext : DbContext
{
    public Management2DbContext(DbContextOptions<Management2DbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Course> Courses { get; set; }

    public virtual DbSet<User> Users { get; set; }
}
