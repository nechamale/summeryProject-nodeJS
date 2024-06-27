
# Volunteer Coordination System

This project implements a server-side application for coordinating volunteers with people in need of assistance. The system is built with Node.js and MongoDB and provides RESTful APIs for managing help requests and volunteer information.

## Table of Contents
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Setup](#setup)
- [Usage](#usage)
- [Postman Collection](#postman-collection)
- [Contributing](#contributing)

## Features
1. **Help Requests List**: View unaddressed help requests with filters for location, status, and priority.
2. **Help Request Details**: Display detailed information about a specific help request with an option to volunteer.
3. **Volunteer Registration**:
   - Existing volunteers can sign in and update the request status.
   - New volunteers can register and receive a unique code to sign in.

## API Endpoints

### Help Requests
- `GET /api/requests`: Get a list of all help reqest
- `GET /api/requests/:id`: Get details of a specific help request.
- `GET /api/requests/noReply`: Get a list of unaddressed help requests with optional filters.
- `POST /api/volunteers`: Register a new volunteer.

### Volunteers
- `GET /api/volunteers`: Get a list of all volunteers.
- `GET /api/volunteers/:id`: Get details of a specific volunteer.
- `POST /api/volunteers`: Register a new volunteer.
- `PUT /api/volunteers/:id`: Update the a specific volunteer.
- `DELETE /api/volunteers/:id`: Delete a specific volunteer.

### location
- `GET /api/locations`: Get a list of all locations.
- `GET /api/locations/:id`: Get details of a specific location.
- `POST /api/locations`: Register a new location.
- `PUT /api/locations/:id`: Update the a specific location.
- `DELETE /api/locations/:id`: Delete a specific location.



## Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/nechamale/volunteersPlacement.git
   cd volunteersPlacement/server
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Setup environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   HOST='127.0.0.1'
   PORT=8080
   MONGODB_URI = 'mongodb+srv://sw0504147596:1234@cluster.vtbpacr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'
   ```

4. **Start the server:**
   ```sh
   npm start
   ```

## Usage
Use the provided Postman collection to test the API endpoints. Ensure your server is running and import the collection into Postman to make API requests with predefined data.

## Postman Collection
A Postman collection with all the API endpoints and sample data is provided in the repository. Import the collection into Postman to test the API.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
