/* This is the data we will be using, study it but don't change anything, yet. */
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const menuDrop = document.querySelector('.header')

menuItems.forEach(items => {
            menuDrop.append(createMenu(items))
        })

function createMenu(items) {
    const menu = document.createElement('div')
    const menuList = document.createElement('ul')
    const menuItem1 = document.createElement('li')
    const menuItem2 = document.createElement('li')
    const menuItem3 = document.createElement('li')
    const menuItem4 = document.createElement('li')
    const menuItem5 = document.createElement('li')
    const menuItem6 = document.createElement('li')
    const menuButton = document.querySelector('.menu-button')

    menu.appendChild(menuList)
    menuList.appendChild(menuItem1)
    menuList.appendChild(menuItem2)
    menuList.appendChild(menuItem3)
    menuList.appendChild(menuItem4)
    menuList.appendChild(menuItem5)
    menuList.appendChild(menuItem6)

    menu.classList.add('menu')

    menuItem1.textContent = menuItems[0]
    menuItem2.textContent = menuItems[1]
    menuItem3.textContent = menuItems[2]
    menuItem4.textContent = menuItems[3]
    menuItem5.textContent = menuItems[4]
    menuItem6.textContent = menuItems[5]

    menuButton.addEventListener('click', event => {
        menu.classList.toggle('menu--open')

    })

    return menu
}
