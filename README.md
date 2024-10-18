<h1>Backend Architectures</h1>

This repository contains 4 major backend applications designed to demonstrate various aspects of handling student-related data and flow of information. Each application showcases different backend architectures and technologies, giving a comprehensive view of how to manage common tasks like authentication, file upload, and inter-model connectivity.

1. <h3>Auth App</h3>

	.	This app demonstrates the sign-up and login processes using JWT (JSON Web Tokens).
		It highlights how JWT tokens and cookies are implemented to securely manage authentication.
	.	<h4>Core Features:</h4>
	-	User Registration
	-	Login & Logout with JWT
	-	Cookie-based session management

2. <h3>To-Do App</h3>

	•	This app demonstrates different API requests for task management.
		Provides a comprehensive view of how to create, read, update, and delete (CRUD) operations in a to-do list app.
	•	<h4>Core Features:</h4>
	-	Add, edit, and delete tasks
	-	API-based interactions using RESTful architecture

3. <h3>File Upload App</h3>

	•	Focuses on how to upload images and videos to Cloudinary, a cloud-based media management platform.
		Demonstrates the use of Nodemailer for sending emails, making it a robust solution for handling file uploads and notifications.
	•	<h4>Core Features:</h4>
	-	Image and video uploads to Cloudinary
	-	Sending notifications via Nodemailer

4. <h3>Blog App</h3>

	•	This app highlights the concept of references between models, showcasing connectivity between different schemas in a backend architecture.
	•	Provides a clear example of how to relate data across models such as users and posts.
	•	<h4>Core Features:</h4>
	-	Blog creation with connected user accounts
	-	Reference-based schema relatiionships.
## Installation

1.Clone this repository to your local machine using:

```bash
  https://github.com/Anonymousundefined/Backend
```
2.Navigate to the project directory /Particular app:

```bash
  cd <project_folder>
```
3. Install the required dependencies :

```bash
 npm install express nodemon jsonwebtoken mongooswe dotenv cloudinary
```
4. Set up your environment variables for JWT, Cloudinary, and Nodemailer in a .env file according to the requirement of project/particular app:

```bash
  JWT_SECRET=<your_jwt_secret>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
NODEMAILER_USER=<your_nodemailer_user>
NODEMAILER_PASS=<your_nodemailer_pass>
```
5. connect to MongoDb locally and  run server using
```bash
 nodemon index.js
```
