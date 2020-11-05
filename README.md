# Contacts App
It is an application that allows to authenticate a user to access to his contact area. In this area his contacts will appear ordered alphabetically and paginated. The user can filter by initial letter or through the superior searchbar.
Each contact will show their connections that will appear on the right side, also ordered alphabetically and also with a searchbar to filter them.
By selecting a contact from this list of connections, their connections will be shown in turn, and so on, the path followed will appear in the breadcrumb being marked in the upper margin of the list.
The user has the possibility of logging out, entering in the user section in the upper right margin of the screen.


# Quick Start

Clone this repo:

`$ git clone https://github.com/juliacanas/contacts-client.git`

Install all necessary dependencies:

`$ npm install`

Finally run:

`$ npm start`

# Folder Structure

```bash
├── public
├── src
│   ├── api
│   |   └── api.js
│   |   ├── auth.api.js
│   |   └── contacts.api.js
│   └── assets
│   |   ├── defaultAvatar.png
│   |   └── minimal.jpg
│   ├── components
│   |   └── alphabet
│   |   |   ├── Alphabet.jsx
│   |   |   └── Alphabet.module.scss
│   |   ├── breadcrumb
│   |   |   ├── Breadcrumb.jsx
│   |   |   └── Breadcrumb.module.scss
│   |   └── common
│   |   |   ├── AnonRoute.jsx
│   |   |   └── PrivateRoute.jsx
│   |   ├── connections
│   |   |   ├── Connections.jsx
│   |   |   └── Connections.module.scss
│   |   └── image
│   |   |   ├── Image.jsx
│   |   |   └── Image.module.scss
│   |   ├── profileOptions
│   |   |   ├── ProfileOptions.jsx
│   |   |   └── ProfileOptions.module.scss
│   |   └── pagination
│   |   |   ├── Pagination.jsx
│   |   |   └── Pagination.module.scss
│   |   ├── searchBar
│   |   |   ├── SearchBar.jsx
│   |   |   └── SearchBar.module.scss
│   |   └── sidebar
│   |   |   ├── Sidebar.jsx
│   |   |   └── Sidebar.module.scss
│   └── constants
│   |   └── index.js
│   ├── context
│   |   ├── auth
│   |   |   ├── authContext.js
│   |   |   ├── authReducer.js
│   |   |   └── authState.js
│   |   └── contacts
│   |   |   ├── contactsContext.js
│   |   |   ├── contactsReducer.js
│   |   |   └── contactsState.js
│   └── pages
│   |   ├── contacts
│   |   |   ├── ContactsPage.jsx
│   |   |   └── ContactsPage.module.scss
│   |   └── login
│   |   |   ├── LoginPage.jsx
│   |   |   └── LoginPage.module.scss
│   ├── sass
│   |   └── base.scss
│   └── App.jsx
│   ├── index.js
│   └── index.scss
├── package.json
├── package-lock.json
├── rest.http
└── server.js

```
