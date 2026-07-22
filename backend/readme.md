# Backend API Documentation

## User Registration

### Endpoint
POST /user/register

### Description
Registers a new user by creating a user account with the provided information

### HTTP METHOD
 `POST`

### Request Body
the request body should be in JSON format and include the following fields:


```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john@example.com",
  "password": "123456"
}
```


### EXAMPLE RESPOND 
 - `user`(object).
  - `fullname`(object).
   - `firstname` (string):User's First name (minimum 3 characters).
   - `lastname` (string): User's last name (minimum 3 characters).
  - `email`(string): User's email address (must be a VALID email).
  - `password` (string): User's password(minimum 6 characters). 
 - `token`(string): JWT Token

### Success Response
- Status: 201 Created
- Response body:

```json
{
  "user": {
    "_id": "user_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john@example.com"
  },
  "token": "jwt_token"
}
```

### Error Responses
- Status: 400 Bad Request
  - Returned when validation fails or required fields are missing

- Status: 500 Internal Server Error
  - Returned if the server encounters an error while creating the user

## User Login

### Endpoint
POST /user/login

### Description
Authenticates an existing user and returns a JWT token upon success

### HTTP METHOD
`POST`

### Request Body
The request body should be in JSON format and include the following fields:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

### EXAMPLE RESPOND 
  - `email`(string): User's email address (must be a VALID email).
  - `password` (string): User's password(minimum 6 characters). 
 - `token`(string): JWT Token

### Success Response
- Status: 200 OK
- Response body:

```json
{
  "token": "jwt_token"
}
```

### Error Responses
- Status: 400 Bad Request
  - Returned when validation fails or required fields are missing

- Status: 401 Unauthorized
  - Returned when the email or password is incorrect

- Status: 500 Internal Server Error
  - Returned if the server encounters an error while logging in and if there is any syntax error 

## User Profile

### Endpoint
GET /user/profile

### Description
Returns the authenticated user's profile information.

### HTTP METHOD
`GET`

### Authentication
Requires a valid JWT token passed in the Authorization header as a Bearer token or in a cookie named `token`.

### Success Response
- Status: 200 OK
- Response body:

```json
{
  "_id": "user_id",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john@example.com"
}
```

### Error Responses
- Status: 401 Unauthorized
  - Returned when no token is provided, the token is invalid, or the token has been blacklisted

## User Logout

### Endpoint
GET /user/logout

### Description
Logs out the authenticated user by blacklisting the current token.

### HTTP METHOD
`GET`

### Authentication
Requires a valid JWT token passed in the Authorization header as a Bearer token or in a cookie named `token`.

### Success Response
- Status: 200 OK
- Response body:

```json
{
  "message": "logged out"
}
```

### Error Responses
- Status: 401 Unauthorized
  - Returned when no token is provided or the token is invalid

## Captain Registration

### Endpoint
POST /captains/register

### Description
Registers a new captain (driver) account with vehicle details and credentials.

### HTTP METHOD
`POST`

### Request Body
The request body should be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.captain@example.com",
  "password": "captainpassword",
  "vehicle": {
    "color": "Black",
    "plate": "NY-1234-AB",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response Fields
- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name (minimum 3 characters).
    - `lastname` (string): Captain's last name (minimum 3 characters).
  - `email` (string): Captain's email address (must be a valid email).
  - `status` (string): Account status (`active` or `inactive`, default: `inactive`).
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle license plate number.
    - `capacity` (number): Passenger capacity (minimum 1).
    - `vehicleType` (string): Type of vehicle (`car`, `auto`, or `motorcycle`).
- `token` (string): JWT Token

### Success Response
- Status: 201 Created
- Response body:

```json
{
  "token": "jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.captain@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Black",
      "plate": "NY-1234-AB",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Responses
- Status: 400 Bad Request
  - Returned when validation fails or captain already exists.
- Status: 500 Internal Server Error
  - Returned if the server encounters an error while creating the captain.

## Captain Login

### Endpoint
POST /captains/login

### Description
Authenticates an existing captain and returns a JWT token.

### HTTP METHOD
`POST`

### Request Body
The request body should be in JSON format and include the following fields:

```json
{
  "email": "jane.captain@example.com",
  "password": "captainpassword"
}
```

### Success Response
- Status: 200 OK
- Response body:

```json
{
  "token": "jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.captain@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Black",
      "plate": "NY-1234-AB",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Responses
- Status: 400 Bad Request
  - Returned when validation fails.
- Status: 401 Unauthorized
  - Returned when email or password is incorrect.

## Captain Profile

### Endpoint
GET /captains/profile

### Description
Returns the authenticated captain's profile information.

### HTTP METHOD
`GET`

### Authentication
Requires a valid JWT token passed in the `Authorization` header as a Bearer token or in a cookie named `token`.

### Success Response
- Status: 200 OK
- Response body:

```json
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.captain@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Black",
      "plate": "NY-1234-AB",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Responses
- Status: 401 Unauthorized
  - Returned when no token is provided, the token is invalid, or the token has been blacklisted.

## Captain Logout

### Endpoint
GET /captains/logout

### Description
Logs out the authenticated captain by blacklisting the current token.

### HTTP METHOD
`GET`

### Authentication
Requires a valid JWT token passed in the `Authorization` header as a Bearer token or in a cookie named `token`.

### Success Response
- Status: 200 OK
- Response body:

```json
{
  "message": "Logout successfully"
}
```

### Error Responses
- Status: 401 Unauthorized
  - Returned when no token is provided or the token is invalid.

