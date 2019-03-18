# Pizza-delivery-app-gui
This repository is for the Assignment #3 of Pizza Delivery app of NodeJs Master Class
## Api Documentation
| Route | Description |
| --- | --- |
|`/user`| [documentation](documentation/User.md) |
|`/token`| [documentation](documentation/Token.md) |
|`/menu`| [documentation](documentation/Menu.md) |
|`/cart`| [documentation](documentation/Cart.md) |
|`/order`| [documentation](documentation/Order.md) |

## CLI Documentation
| Command | Description |
| --- | --- |
|`menu`| Show the current menu |
|`orders`| Get recent orders in the system (orders placed in the last 24 hours) |
|`more order info --{orderId}`| Get the detail of the order |
|`singup`| Get all the users who have signed up in the last 24 hours |
|`more user info --{email}`| Get the detail of the user |

## App Configurations
All the properties are in the `config/param.js` file
* Change the port if it´s need it
* Change the stripe.com configurations with your own values
* Change the mailGun configurations with your own values

## Start the Application
* `node index.js`
* `host:port/index`
