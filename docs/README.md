---
home: true
heroImage: /studyblazor.png
heroText: Blazor Tutorial
tagline: Blazor - New .Net core UI framework for SPA
actionText: Tutorials →
actionLink: /tutorial/
features:
- title: For Beginners
  details: In simple and easy steps starting from basics to advanced concepts.
- title: Code Snippets
  details: More details on data bindings with code snippets.
- title: Prerequisite
  details: Basic understanding on Razor syntax and C# language.
- title: Code Maintenance & Portablity
  details: Access to .Net ecosystem, easy to maintain code and cross platform.
- title: Javascript Alternative
  details: Client side coding can be done using C# with WebAssembly open standard instead of Javascript.
- title: Performant
  details: Provides near native performance using open source .net core platform in browser.
footer: Copyright © 2019 - studyblazor.com
---

### Sample Blazor Component
``` csharp
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
::: tip Preview Release
Client side Blazor is in preview release and no longer an experiment project. 
:::