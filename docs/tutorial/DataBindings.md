# Data Bindings
## One way binding
One way binding is simple and straight forward in Blazor and no need of any UI refresh/render. The following example shows the one way data binding,

``` csharp
//Counter.razor
@page "/counter"

<h1>Counter</h1>
<p>Current count: @currentCount</p>
<button class="btn btn-primary" onclick="@IncrementCount">Click me</button>

@functions {
    int currentCount = 0;
    void IncrementCount()
    {
        currentCount++;
    }
}
```
Here `@currentComponent` value increments based on the number of click on button `Click me`. The value in the `<p>` tag element automatically refreshes and no need for any component refresh. 

## Two way binding
Blazor provides multiple options for two way binding in blazor and elegant to write when compared to some popular JS languages,

### Same Component:
The `bind` attribute provides two way data binding in blazor. Below example on checkbox uses bind attribute in the same component,

``` csharp
//TwoWayBind.razor
@page "/two-way-binding"

<input type="checkbox" 
       bind="@updateString" />
<p>This string will get value from above text field : @updateString.ToString()</p>

@functions {
    Boolean updateString {get; set;} = true;
}
```
Also the two way binding is achieved using lamda expression in `onchange` attribute. Don’t worry, Blazor provides simple way along with `bind` attribute, more details below..

``` csharp
//TwoWayBind.razor
@page "/two-way-binding"

<input type="text" 
       value="@updateString" 
       onchange="@((UIChangeEventArgs __e) => updateString = __e.Value.ToString())"/>

<p>This string will get value from above text field: @updateString</p>

@functions {
    string updateString = "";
}
```
The `bind` attribute can be extended with value and events `bind-value-<onevents>`, the above example can be written as below and used `oninput` here instead of `onchange`, 

``` csharp
//TwoWayBind.razor
@page "/two-way-binding"

<input type="text" 
       bind-value-oninput="@updateString" />
<p>This string will get value from above text field : @updateString</p>

@functions {
    string updateString = "";
}
```

### Between Components:
#### Approach 1:
The data passed between components happens through Component attributes and its properties mapping, this approach uses `Action<TItem>` datatype.

``` csharp
//ParentComponent.razor
<h3> Parent Component</h3>
<p>String in Parent: @parentString</p>
<button onclick="@PassToChild">Pass String To Child</button>

<ChildComponent 
        ToChild=@parentString
        FromChild=@ReceivedFromChild>    
</ChildComponent>

@functions{
    private string parentString = "Initial Parent String";
    private void PassToChild()
    {
        parentString += "- To Child";
    }
    private void ReceivedFromChild(string str)
    {
        parentString = str;
        StateHasChanged();
    }
}
```
``` csharp
//ChildComponent.razor
<h4>Child Component</h4>
<button onclick="@PassToParent">Pass String to Parent</button>
<p>String received from Parent : @ToChild</p>

@functions{
    [Parameter]
    private string ToChild{get;set;}
    [Parameter]
    Action<string> FromChild{get;set;} 
    
    private string childString;
    
    private void PassToParent()
    {
        childString = ToChild + "- To Parent";
        FromChild(childString);
    }
}
```

Here `FromChild` attribute/property in ChildComponent uses `Action<string>` datatype to pass value from Child to Parent Component.
In Parent, there is corresponding receiver function `ReceivedFromChild` with string parameter and this will get triggered on button click in ChildComponent and inturn notify `PassToParent`, but to notify the state has changed in Parent Component we are using `StateHasChanged()` inbuilt Blazor function.

#### Approach 2:
This approach specifies any ChangeEvents using `EventCallback` datatype and we can pass between components instead of data, and there is no need for `StateHasChanged()` function to call here,

``` csharp
//ParentComponent.razor
<h3> Parent Component</h3>
<p>Logging Event triggered from Child: @logString</p>

<ChildComponent 
        Trigger=@TriggerFromChild>    
</ChildComponent>

@functions{
    private string logString = "";
    private void TriggerFromChild(UIMouseEventArgs e)
    {
        logString = e.ToString();        
    }
}
```
``` csharp
//ChildComponent.razor
<h4>Child Component</h4>
<button onclick="@Trigger">Trigger Parent</button>

@functions{
    [Parameter]
    private EventCallback<UIMouseEventArgs> Trigger { get; set; }     
}
```
Here in ChildComponent, the `Trigger` property call backs the corresponding `TriggerFromChild` method in ParentComponent with `UIMouseEventArgs` parameter and the event is logged as string in Parent.

Below are the supported Event arguments,
* UIEventArgs
* UIChangeEventArgs
* UIKeyboardEventArgs
* UIMouseEventArgs

#### Approach 3:
Here is an another approach for two way binding between components, where we can `Invoke` an `Action` properties manually based on any events/method execution,

```csharp
//ParentComponent.razor
<h3> Parent Component</h3>
<p>Logging Event triggered from Child: @logString</p>

<ChildComponent 
        EventFromChild=@TriggerFromChild>    
</ChildComponent>

@functions{
    private string logString = "";
    private void TriggerFromChild()
    {
        logString = "Triggered From Child using Action and Invoke";  
        StateHasChanged();      
    }
}
```
``` csharp
//ChildComponent.razor
<h4>Child Component</h4>
<button onclick="@Trigger">Trigger Parent</button>

@functions{
    [Parameter]
    private Action EventFromChild{get;set;}

    private void Trigger()
    {
        EventFromChild?.Invoke();
    }       
}
```
Here in ChildComponent the Action property `EventFromChild` is manually triggered using `Invoke` inbuilt function and the corresponding method `TriggerFromChild` in ParentComponent is called and we need to use `StateHasChanged()` to notify the state changed in Parent.

We can achieve two way bindings using `Action<>` and `EventCallback<>` and one thing to notify here is whenever we use `Action` we are manually notifying `StateHasChanged()`, but its not the case for `EventCallback`.


## Cascading values and parameters

Blazor provides a way to pass data can across the entire RenderTree(all components) using `CascadingValue` and `CascadingParameter` without the need to pass as component attributes and the value can be received in RenderTree (Sub Components) by decorating property as `[CascadingParameter]` instead of `[Parameter]`.

``` csharp
//RootComponent.razor
@page "/base-component"
<h3> App Base Component</h3>

<CascadingValue Value="@pName" Name="ProfileName">
    <CascadingValue Value="@pAge" Name="ProfileAge">
        <ParentComponent/>
    </CascadingValue>    
</CascadingValue>

@functions {
    private string pName {get;set;} = "New To Blazor";
    private int pAge {get;set;} =  35;
}
```

``` csharp
//ParentComponent.razor
<h3> Parent Component</h3>
<p> Profile Name is : @Name  and Age is : @Age.ToString(); </p>

@functions{
    [CascadingParameter(Name = "ProfileName")] 
    string Name { get; set; }
    [CascadingParameter(Name = "ProfileAge")] 
    int Age {get;set;}
}
```

Here in `CascadingParameter`, the `Name` parameter have to match with `Name` attribute with `CascadingValue` component, if we not mentioned any Name, the variable type in CascadingParameter got matches with the Value attribute in CascadingValue.

It's always better to always mention `Name` parameter to avoid confusion and its useful while application grows.



## Render Fragments (Dynamic Content)
Instead of passing any content from Parent to Child components using attributes, we can pass content within component tag elements and can be rendered in child components using `RenderFragment` property.
	
### Approach 1: 
Here `ChildContent` is the naming convention we need to use in Child component for RenderFragment property to get the content from Parent,

``` csharp
//ParentComponent.razor
<h3> Parent Component</h3>
<ChildComponent>
    The line here is passed to child from Parent!!!
</ChildComponent>
```
``` csharp
//ChildComponent.razor
<h4>Child Component</h4>
<p>@ChildContent</p>

@functions{
    [Parameter]
    private RenderFragment ChildContent { get; set; }   
}
```

### Approach 2:
`RenderFragment` mostly used for Templating purpose and render the content based on logics inside Child Component.

```csharp
//ParentComponent.razor
<h3> Parent Component</h3>
<ChildComponent>
    <SampleText>
        <p>
            <b>Bold Text here!!!</b>
        </p>
    </SampleText>    
</ChildComponent>
```
```csharp
//ChildComponent.razor
<h4>Child Component</h4>
<div>
    @for(var i = 1; i <= 3; i++)
    {
        <h5>Line No : @i</h5>
        <div>@SampleText</div>
    }
</div>

@functions{
    [Parameter]
    private RenderFragment SampleText { get; set; }   
}
```

Here `SampleText` is not an existing component, its newly created here in Parent component inside `ChildComponent` tag element and property with same name `SampleText` created inside Child component.

The text inside `SampleText` is rendered 3 times inside the for loop in Child Component, and this will be helpful creating template components, tables, etc.,  
