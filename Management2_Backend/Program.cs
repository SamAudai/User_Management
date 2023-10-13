using Management2_Backend.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Defination connection string
builder.Services.AddDbContext<Management2DbContext>(option =>
{
  option.UseSqlite(builder.Configuration.GetConnectionString("ManagementDB"));
});

//Defination CORS policy
builder.Services.AddCors(option =>
{
  option.AddPolicy("ManagementPolicy", result =>
  {
    result.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
  });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors("ManagementPolicy");

app.Run();
