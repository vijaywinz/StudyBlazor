# Installation
Please find below the steps for installation to start working in blazor,

1. Install latest .Net Core 3.0 Preview version from [here](https://dotnet.microsoft.com/download/dotnet-core/3.0). for respective OS platform.

2. Verfiy the latest version successfully install in machine using .Net Core cli,
```bash
dotnet --version
```
3. Create boilerplate code provided by using below commands,
```bash
dotnet new blazor -o WebApplication1
```
4. Navigate to _WebApplication1_ folder,
```bash
cd WebApplication1
```
5. Build and Run _WebApplication1_ project,
```bash
dotnet build
dotnet run
```
6. The blazor app is running in localhost either in port 5000 or 5001,
> http://localhost:5000
>
> http://localhost:5001

## View from Browser Dev tools

The below image shows the list of files got loaded while blazor application loads, 

![View from Browser Devtools](/devtools.png)

1. Initially static files got loaded ( *.css , *.js / *.json ).
2. With the help of mono.js, the webassembly file (mono.wasm) got loaded into browser.
3. FirstBlazorApp.dll is the actual website dll file and remaining all other dlls are part of .Net framework.

::: warning 
In current preview release, the initial framework dll takes some extra bytes during page load and size may reduce later in actual release.
:::