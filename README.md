`***libraryapp-api***` is a simple api endpoint for library application built with Node.js, Express Js as a framework of Node.js and MySQL as a database which has [features](https://github.com/rifanid98/libraryapp-api#features) such as login / register using JWT, pasword hashing, CORS, etc. 

## :memo: Table Of Content
* [Prerequisites](https://github.com/MuhammadRizkyRamadhan24/LIBRARYAPP-API#prerequisites)
* [Installation](https://github.com/MuhammadRizkyRamadhan24/LIBRARYAPP-API#installation)
* [Features](https://github.com/MuhammadRizkyRamadhan24/LIBRARYAPP-API#features)
* [Examples](https://github.com/MuhammadRizkyRamadhan24/LIBRARYAPP-API#examples)
* [Built wtih](https://github.com/MuhammadRizkyRamadhan24/LIBRARYAPP-API#features)
* [Author](https://github.com/MuhammadRizkyRamadhan24/LIBRARYAPP-API#author)
* [License](https://github.com/MuhammadRizkyRamadhan24/LIBRARYAPP-API#license)

## Prerequisites
- Node.js installed on the local machine
- MySQL intalled on the local machine (ex. XAMPP)

## Installation
1. Clone this repository:
    `git clone https://github.com/MuhammadRizkyRamadhan24/LIBRARYAPP-API`
2. Start XAMPP
3. Database configuration:
    * Open http://localhost/phpmyadmin in the browser
    * Import database, select `libraryapp.sql` file from project folder
4. Start the server:
    * Open root project folder with command line (terminal, linux. cmd, windows. etc.)
    * Type and run this command `npm start` to start the server.
    * Make sure there are no other processes that use port 3000
5. Run app with api testing tools like postman, etc. on http://localhost:3000/

## Features
- [x] CRUD
- [x] Search, Sort, Pagination
- [x] CORS allowed
- [x] Login/Register with JWT
- [x] Password hashing

## Examples
[How to use](https://www.getpostman.com/collections/87e72bdb02d5c6c8d466)

## Built with
- [Node.js](http://nodejs.org/) - JavaScript runtime environment
- [Express.js](https://expressjs.com/) - Node.js framework
- [MySQL](https://www.mysql.com/) Database
- [JWT](https://jwt.io/) - Login/Register authentication
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Password Hashing

## Author
- [Muhammad Rizky Ramadhan](https://www.linkedin.com/in/muhammad-rizky-ramadhan-258a8b194/)

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/rifanid98/libraryapp-api/blob/master/LICENSE) file for details

Thanks to [Daniel Saputra](https://www.linkedin.com/in/danielwetan/) for the readme layout.