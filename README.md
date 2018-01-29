# Reuseable ES6 Template Literals

A reuseable ES6 template

## Useage

### Basic
```javascript
const greetingTemplate = Template(() => `
  <span>Hello, ${name}!</span>
`);
greetingTemplate({ name: 'Brian' }); // returns "<span>Hello, Brian!</span>"
```

### With Logic 👍
```javascript
const greetingTemplate = Template(() => `
  <span>Hello, ${name ? ', ' + name + '!' : '!'}!</span>
`);
greetingTemplate(); // returns "<span>Hello!</span>"
greetingTemplate({ name: 'Brian' }); // returns "<span>Hello, Brian!</span>"
```

## Rationale
ES6 template literals are awesome, but they aren't reuseable. When they are defined, they are interpolated and become strings immediately. There are various approaches to turn template literals into reuseable templates, but most have some annoying flaw. Tagged Template Literals are somewhat helpful, but you have to pass variables in a certain order. Another solution is to wrap the template literal in a function, which is helpful, but that requires namespacing the referenced variables, which feels a little cumbersome.

*** No more namespacing ***
```javascript
// Template requiring all variables to be prefixed by 'data.'
const template = data => `
  <span>Hello, ${data.username}!</span> // <-- NOT SO GREAT
`;
template({ name: "brian, who doesn't like namespacing his variable names"});
```

This approach uses a wrapping arrow function, but allows you to pass a single object to the template without having to namespace the properties.
