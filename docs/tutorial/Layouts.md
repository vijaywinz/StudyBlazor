
<GoogleAdsense
  ad-client="ca-pub-9955716341281227"
  ad-slot="7904298842" />
 
# Page Layouts
The boilerplate code uses bootstrap CSS, in the MainLayout component based on the routing specified in the NavMenu components,the corresponding components are rendered in `@Body` div element.
`NavLink` is the inbuilt blazor component which provides routing to the list of components as specified in _href_ attribute.

```csharp
//MainLayout.razor
@inherits LayoutComponentBase
<div>
    <NavMenu />
</div>
<div >
    @Body   
</div>
```
```csharp
///NavMenu.razor
<NavLink class="nav-link" href="" Match="NavLinkMatch.All">
   Home
</NavLink>
<NavLink class="nav-link" href="counter">
   Counter
</NavLink>
<NavLink class="nav-link" href="fetchdata">
   Fetch data
</NavLink>
```
<GoogleAdsense
  ad-client="ca-pub-9955716341281227"
  ad-slot="7904298842" />