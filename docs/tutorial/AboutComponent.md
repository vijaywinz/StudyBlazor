
<GoogleAdsense
  ad-client="ca-pub-9955716341281227"
  ad-slot="7904298842" />
 
# About Components

The basic structure of a component in blazor can be segregated into 3 sections as below,

``` csharp
//Counter.razor
//Directives section
@page "/counter"

//Razor HTML section
<h1>Counter</h1>
<p>Current count: @currentCount</p>
<button class="btn btn-primary" onclick="@IncrementCount">Click me</button>

//Function sections
@functions {
    private int currentCount = 0;
    private void IncrementCount()
    {
        currentCount++;
    }
}
```

### Directives section:
The Directive section in a Blazor component is used to configure routing for current component, Imports any external class library or for dependency injection,
* Routing - `@page`
* DI - `@inject`
* Import Library - `@using`

### Razor HTML section:
Razor HTML syntax is a combination of C# code with HTML. This section finally renders in the browser.

### Function section:
The functions section in a component hold user action functions(Event methods), local variables and properties which passed from/to parent/child components.

<GoogleInarticle
  ad-client="ca-pub-9955716341281227"
  ad-slot="8912739123" />

## Attributes & parameters
Lets understand the basic terminologies used in general for SPA,

``` html
<button id="btnClickMe" class="btn btn-primary" 
onclick="@IncrementCount">Click me</button>
```
Here in the button element, the `id`, `class` and `onclick` are called as HTML attributes.

Similarly the components are defined in the same way as HTML elements,

``` csharp
//ParentComponent.razor
//Parent Component
@page "/ParentComponent"
<ChildComponent Title="Title from Parent">
</ChildComponent>
```
Here in Parent Component the Child Component is placed and `Title` is component attributes

``` csharp
//Child Component
<div>
    <p>Title from Parent Component : @Title</p>
</div>
@functions {
    [Parameter]
    private string Title { get; set; }
}
```
Here in Child Component the attribute `Title` matches with property in child component functions section decorated with `[Parameter]`

<GoogleAdsense
  ad-client="ca-pub-9955716341281227"
  ad-slot="7904298842" />