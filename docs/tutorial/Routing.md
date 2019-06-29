# Routing
Client side routing can be done in blazor by decorating the component with `@page` directive as we already seen in previous examples,
```csharp
//ParentComponent.razor
@page "/parent-component"

<h3> Parent Component</h3>
<p>String in Parent: @parentString</p>
<button onclick="@PassToChild">Pass String To Child</button>
```
Here `/parent-component` is the routing path from root URI.
The routing still works if we move those components _*.razor_ files to any sub folders inside _Pages_ folder.

## Route Parameters
Parameters can be passed as query strings to the components using Route Parameters, below code specifies `RouteId` of type `int` can be passed along with _/bindings/_ routing path,

```csharp
//RouteParamComponent.razor
@page "/bindings/{RouteId:int}"

<p>Route Parameter: @RouteId.ToString()</p> 

@functions {
    [Parameter]
    private int RouteId { get; set; }
}
```

A component can have multiple routings
```csharp
//MultipleRouteComponent.razor
@page "/bind"
@page "/bindings"
@page "/one-way-bindings"

<p>Routing</p> 

@functions {
    [Parameter]
    private int sample { get; set; } = 100;
}
```

<GoogleAdsense
  ad-client="ca-pub-9955716341281227"
  ad-slot="7904298842" />