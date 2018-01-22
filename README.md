<h1 style="text-align: center; font-weight: lighter;">Mei.js</h1>
<h3 style="text-align: center; font-weight: lighter;"> a minimal, simple and helpful library for you</h3>


## Documentation

You can also find the documentation [on the website](https://germancutraro.github.io/Meijs/).  

### DOM Manipulation: <small>Get Elements</small>

```html
  <h1 id="title">Mei.Js</h1>
  <ul id="list-container">
    <li class="item">Item-1</li>
    <li class="item">Item-2</li>
    <li class="item">Item-3</li>
  </ul>
```

```javascript
 // Return, if exist, the element, if not return null
 let element = Mei.getElement('#title');
 // Return an array of all selected elements
 let elements = Mei.getElements('.item'); 
 ```

### Events: ####Set Events

```html
  <h1 id="title">Mei.Js</h1>
  <ul id="list-container">
    <li class="item">Item-1</li>
    <li class="item">Item-2</li>
    <li class="item">Item-3</li>
  </ul>
```

```javascript
 // Event for the h1 
 Mei.getElement('#title', 'click', () => {
   console.log('#title clicked!');
 });

 // This is not so recommended, use event delegation instead.
 Mei.getElements('.item', 'click', () => {
   console.log('item clicked!');
 });
 ```

### Elements: 

#### Creation:

```html
  <div id="container">

  </div>
  <ul id="list">

  </ul>
```

```javascript
 // This will create a 'h1'
 Mei.createElement('h1', {
   textContent: 'Hello World!',
   className: 'title',
   id: 'title-js',
   parent: Mei.getElement('#container')
 });

 // Create Children's
 Mei.createElement('li', {
   textContent: 'Item',
   className: 'item',
   parent: Mei.getElement('#list'),
   children: [
     {element: 'a', textContent: ' x', href: '#'}
   ]
 });
 ```

#### Removing:

```html
  <h1 id="title">Title</h1>
```

```javascript
 // This will remove the 'h1'
 Mei.removeElement(Mei.getElement('#title'));
 ```

#### Cloning:

```html
  <h1 id="title">Title 1</h1>
```

```javascript
 // Cloning the 'h1'
 let copiedH1 = Mei.cloneElement(Mei.getElement('#title'));
 // output
 console.log(copiedH1);
 ```

### Storage: <small>Work with the API storage in a more easy way</small>

#### Save data:

```javascript
 
  let users = [{name: 'John'}, {name: 'Nick'}];
  // This will create a 'users' item/collection in a localStorage way.      
  Mei.store({
    store: 'local',
    item: 'users',
    data: users
  });

  // This will create a 'users' item/collection in a sessionStorage way.
  Mei.store({
    store: 'session',
    item: 'users',
    data: users
   });
 ```

#### Clear all the stored data:

```javascript
  // This will delete all the localStorage data     
  Mei.clearStore('local');

  // This will delete all the sessionStorage data  
  Mei.clearStore('session');
 ```

#### Remove a specified item from the store:

```javascript
  // This will delete only the 'users' item (if exist) from localStorage     
  Mei.removeItemStore('local', 'users');

  // This will delete only the 'users' item (if exist) from sessionStorage     
  Mei.removeItemStore('session', 'users');
 ```

#### Get all the records, if is empty returns a empty array:

```javascript
  // This will display the 'users' item (if exist) from localStorage     
  let allUsersFromLocal = Mei.displayStore('local', 'users');
  console.log(allUsersFromLocal);
  
  // This will display the 'users' item (if exist) from sessionStorage     
  let allUsersFromSession = Mei.displayStore('session', 'users');
  console.log(allUsersFromSession);
 ```
 

