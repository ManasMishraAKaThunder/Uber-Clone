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

### Required Fields
- fullName.firstName: required string, minimum 3 characters
- fullName.lastName: required string, minimum 3 characters
- email: required valid email address
- password: required string, minimum 6 characters

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
Authenticates an existing user and returns a JWT token.

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

### Required Fields
- email: required valid email address
- password: required string

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
  - Returned if the server encounters an error while logging in
