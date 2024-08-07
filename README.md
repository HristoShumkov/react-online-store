React Online Store
==================

About The Project
-----------------

The React Online Store is a web application built using React.js. It provides a platform for users to browse products, add them to their cart, and manage their purchases. The project demonstrates the use of React for building dynamic and responsive web applications.

### Built With

*   [React](https://reactjs.org/)
*   [React Router](https://reactrouter.com/)
*   [Vite](https://vitejs.dev/)

Getting Started
---------------

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have npm installed. You can install npm by following the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Server Integration

This project uses the SoftUni Practice Server for backend functionality. The SoftUni Practice Server provides a set of APIs for educational purposes, allowing you to practice and develop your skills in a real-world environment. You can find more information about the server here: https://github.com/softuni-practice-server/softuni-practice-server/tree/master

### Installation

1.  **Clone the repository:**
    
        git clone https://github.com/HristoShumkov/react-online-store.git
    
2.  **Navigate to the project directory:**
    
        cd react-online-store
    
3.  **Install dependencies:**
    
        npm install
    

### Running the Application

To start the application, navigate to the following:

 **Navigate to the client directory:**
    
        cd ./client

        npm run dev
        
        This will start the development server, and you can view the application in your browser at `http://localhost:5173`.
        
 **Navigate to the server directory:**
    
        cd ./server

        node server.js

        This will start the development server, and you can make requests to the practice server at `http://localhost:3030`.    

Project Structure
-----------------

    
    react-online-store/
    ├── client/
    ├── public/
    ├── src/
    │   ├── api/
    │   ├── common/
    │   ├── components/
    │   ├── contexts/
    │   ├── hooks/
    │   ├── public/
    │   ├── utils/
    │   ├── App.css
    │   ├── App.jsx
    │   ├── App.test.js
    │   ├── README.md
    │   ├── index.css
    │   ├── main.jsx
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── setupTests.js
    ├── .eslintrc.cjs
    ├── .gitattributes
    ├── .gitignore
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── vite.config.js
    ├── server/
        

Features
--------

*   **Product Listing:** Displays a list of products fetched from an API.
*   **Shopping Cart:** Allows users to add products to their cart and manage their selections.
*   **Buy Items (WIP):** This feature will allow users to purchase items.
*   **User Authentication:** Provides login and registration functionality.


API Integration
---------------

The application integrates with an API to fetch product and user data. The API integration is handled in the `src/api/itemsAPI.js` and `src/api/authAPI.js` files. Data is fetched using custom hooks.


Contact
-------

Hristo Shumkov - [GitHub Profile](https://github.com/HristoShumkov)

Project Link: [https://github.com/HristoShumkov/react-online-store](https://github.com/HristoShumkov/react-online-store)
