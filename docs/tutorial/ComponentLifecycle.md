# Lifecycle Methods
Blazor provides life cycle methods for a component, as the same way the page life cycle events available in ASP.Net Web Forms.

These methods names are self explanatory,
### OnInit / OnInitAsync
This method is called only once and first time the component is loaded and before any parameters are set.
``` csharp
protected override void OnInit()
{
    // Step 1
}
```

### OnParametersSet / OnParametersSetAsync
This method is called post all parameter values are set initially and called again the parameters are updated from the render tree.
```csharp
protected override void OnParametersSet()
{
    // Step 2
}
```

### OnAfterRender / OnAfterRenderAsync
This method is called post component is completely rendered and can be used to integrate with DOM using Javascript Interoperability
``` csharp
protected override void OnAfterRender()
{
    // Step 3
}
```

### SetParameters
```csharp
public override void SetParameters(ParameterCollection parameters)
{
    base.SetParameters(parameters);
    //...
}
```

### ShouldRender
```csharp
protected override bool ShouldRender()
{
    bool renderUI = true;
    //...
    return renderUI;
}
```

<GoogleAdsense
  ad-client="ca-pub-9955716341281227"
  ad-slot="7904298842" />