(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{200:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"about-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-components","aria-hidden":"true"}},[t._v("#")]),t._v(" About Components")]),t._v(" "),a("p",[t._v("The basic structure of a component in blazor can be segregated into 3 sections as below,")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Counter.razor")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Directives section")]),t._v("\n@page "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/counter"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Razor HTML section")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Counter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Current")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" @currentCount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btn btn-primary"')]),t._v(" onclick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@IncrementCount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Click")]),t._v(" me"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Function sections")]),t._v("\n@functions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" currentCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("IncrementCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        currentCount"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"directives-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directives-section","aria-hidden":"true"}},[t._v("#")]),t._v(" Directives section:")]),t._v(" "),a("p",[t._v("The Directive section in a Blazor component is used to configure routing for current component, Imports any external class library or for dependency injection,")]),t._v(" "),a("ul",[a("li",[t._v("Routing - "),a("code",[t._v("@page")])]),t._v(" "),a("li",[t._v("DI - "),a("code",[t._v("@inject")])]),t._v(" "),a("li",[t._v("Import Library - "),a("code",[t._v("@using")])])]),t._v(" "),a("h3",{attrs:{id:"razor-html-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#razor-html-section","aria-hidden":"true"}},[t._v("#")]),t._v(" Razor HTML section:")]),t._v(" "),a("p",[t._v("Razor HTML syntax is a combination of C# code with HTML. This section finally renders in the browser.")]),t._v(" "),a("h3",{attrs:{id:"function-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function-section","aria-hidden":"true"}},[t._v("#")]),t._v(" Function section:")]),t._v(" "),a("p",[t._v("The functions section in a component hold user action functions(Event methods), local variables and properties which passed from/to parent/child components.")]),t._v(" "),a("h2",{attrs:{id:"attributes-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes-parameters","aria-hidden":"true"}},[t._v("#")]),t._v(" Attributes & parameters")]),t._v(" "),a("p",[t._v("Lets understand the basic terminologies used in general for SPA,")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btnClickMe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn btn-primary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@IncrementCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Click me"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("Here in the button element, the "),a("code",[t._v("id")]),t._v(", "),a("code",[t._v("class")]),t._v(" and "),a("code",[t._v("onclick")]),t._v(" are called as HTML attributes.")]),t._v(" "),a("p",[t._v("Similarly the components are defined in the same way as HTML elements,")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ParentComponent.razor")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Parent Component")]),t._v("\n@page "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ParentComponent"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChildComponent")]),t._v(" Title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Title from Parent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ChildComponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("Here in Parent Component the Child Component is placed and "),a("code",[t._v("Title")]),t._v(" is component attributes")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Child Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Title")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parent")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" @Title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n@functions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parameter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" Title "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Here in Child Component the attribute "),a("code",[t._v("Title")]),t._v(" matches with property in child component functions section decorated with "),a("code",[t._v("[Parameter]")])])])},[],!1,null,null,null);s.default=e.exports}}]);