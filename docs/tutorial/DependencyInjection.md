# Dependency Injection
Dependency injection(DI) is achieved in blazor for each component level by using `@inject` directives.


We can inject dependencies same way as MVC application in Startup.cs > `ConfigureServices` function as below and can be used in blazor component. The lifetime of those services is of similar MVC application, such as `Singleton`, `Transient` and `Scoped` and we are using existing ASP.Net ecosystem here,

```csharp
// In Startup.cs
public void ConfigureServices(IServiceCollection services)
{
    services.AddSingleton<IDataAccess, DataAccess>();
}
```
```csharp
//DiComponent.razor
@page '/dependency-inject'
@using Services
@inject IDataAccess DataObject

@if (Students != null)
{
    Total Student: @Students.Count.ToString();
}

@functions {
    private List<Student> Students;
    protected override async Task OnInitAsync()
    {
        Students = await DataObject.GetStudentData();
    }
}
```

## Consuming REST API Service

Below in the default boilerplate application provided by blazor, in that the `FetchData` component uses `HttpClient` System class, that can be injected using `@inject` and further extended to access REST API services,

```csharp
//FetchData.razor
@page "/fetchdata"
@inject HttpClient Http

<h1>Weather forecast</h1>
<p>This component demonstrates fetching data from the server.</p>

@if (forecasts == null)
{
    <p><em>Loading...</em></p>
}
else
{
    <table class="table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Temp. (C)</th>
                <th>Temp. (F)</th>
                <th>Summary</th>
            </tr>
        </thead>
        <tbody>
            @foreach (var forecast in forecasts)
            {
                <tr>
                    <td>@forecast.Date.ToShortDateString()</td>
                    <td>@forecast.TemperatureC</td>
                    <td>@forecast.TemperatureF</td>
                    <td>@forecast.Summary</td>
                </tr>
            }
        </tbody>
    </table>
}

@functions {
    WeatherForecast[] forecasts;
    protected override async Task OnInitAsync()
    {
        forecasts = await Http.GetJsonAsync<WeatherForecast[]>("sample-data/weather.json");
    }
    class WeatherForecast
    {
        public DateTime Date { get; set; }
        public int TemperatureC { get; set; }
        public int TemperatureF { get; set; }
        public string Summary { get; set; }
    }
}
```
<GoogleAdsense
  ad-client="ca-pub-9955716341281227"
  ad-slot="7904298842" />