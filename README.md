# NodeJS API built with express and typeORM

Steps to run this project:

1. Run `docker-compose up` command
2. Run `npm install` command
3. Run `npm start` command


# API Documentation
All responses come in standard JSON. All requests must include a content-type of application/json and the body must be valid JSON.

# Auth

Api to register a user and generate a token to make requests to other API's.

## Login

**You send:**  Your  login credentials.
**You get:** An `token` with wich you can make requests.

**Request:**
```json
POST /user/auth/login
Accept: application/json
Content-Type: application/json

{
   "email": "gxvitor.1997@hotmail.com",
   "password": "12345678"
}
```
**Successful Response:**
```json
HTTP 200 OK
Content-Type: application/json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOiIyMDIwLTA4LTExVDA2OjM5OjMwLjcwNFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA4LTExVDA2OjM5OjMwLjcwNFoiLCJpZCI6IjEiLCJlbWFpbCI6Imd4dml0b3IuMTk5N0Bob3RtYWlsLmNvbSIsIm5hbWUiOiJHYWJyaWVsIFZpdG9yIiwiaWF0IjoxNTk3MTIwOTUxLCJleHAiOjE1OTcxMjQ1NTF9.vTHuI2dEP1OgBIprHRTYOkF9h0YVoClU_o8NkAZ4_aI",
  "success": true
}
```
**Failed Response:**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
  "error": {
    "message": "Invalid credentials."
  },
  "success": false
}
``` 

## Register

**You send:**  Your user data.
**You get:** An `token` with wich you can make requests.

**Request:**
```json
POST /user/auth/register
Accept: application/json
Content-Type: application/json

{
   "name": "Gabriel Vitor",
   "email": "gxvitor.1997@hotmail.com",
   "password": "12345678"
}
```
**Successful Response:**
```json
HTTP 200 OK
Content-Type: application/json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOiIyMDIwLTA4LTExVDA2OjM5OjMwLjcwNFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA4LTExVDA2OjM5OjMwLjcwNFoiLCJpZCI6IjEiLCJlbWFpbCI6Imd4dml0b3IuMTk5N0Bob3RtYWlsLmNvbSIsIm5hbWUiOiJHYWJyaWVsIFZpdG9yIiwiaWF0IjoxNTk3MTIwOTUxLCJleHAiOjE1OTcxMjQ1NTF9.vTHuI2dEP1OgBIprHRTYOkF9h0YVoClU_o8NkAZ4_aI",
  "success": true
}
```
**Failed Response:**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
  "error": {
    "message": "This e-mail already exists."
  },
  "success": false
}
``` 


# Person

API to perform CRUD operations on a person/persons, all requests must have a authorization bearer with a valid token.

```json
Person Json Object

{
  "id": 0,
  "companyName": "string",
  "fantasyName": "string",
  "CNPJ": "string",
  "openDate": "AAAA-MM-DD"
}

```

## Create

### Create one
**You send:**  An json person object
**You get:** The object with a success.

**Request:**
```json
POST /person/create
Accept: application/json
Content-Type: application/json

{
  "companyName": "Gabriel Vitor",
  "fantasyName": "Caminare",
  "CNPJ": "09.746.104/0001-14",
  "openDate": "1997-10-24"
}
```
**Successful Response:**
```json
HTTP 200 OK
Content-Type: application/json
{
    "person": {
        "companyName": "Gabriel Vitor",
        "fantasyName": "Caminare",
        "CNPJ": "09.746.104/0001-14",
        "openDate": "1997-10-24",
        "createdAt": "2020-08-11T15:16:17.596Z",
        "updatedAt": "2020-08-11T15:16:17.596Z",
        "id": "1"
    },
    "success": true
}
```
**Failed Response in Case of Invalid CNPJ:**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
  "error": [
      {
          "target": {
              "companyName": "Gabriel Vitor",
              "fantasyName": "Caminare",
              "CNPJ": "235.295.280-80",
              "openDate": "1997-10-24"
          },
          "value": "235.295.280-80",
          "property": "CNPJ",
          "children": [],
          "constraints": {
              "validCNPJ": "Must be a valid CNPJ"
          }
      }
  ],
  "success": false
}
``` 

### Create many

**You send:**  An array of persons object
**You get:** The objects with a success.


**Request:**
```json
POST /person/create-many
Accept: application/json
Content-Type: application/json

{
  "persons": [
    {
      "companyName": "Gabriel Vitor",
      "fantasyName": "Caminare",
      "CNPJ": "09.746.104/0001-14",
      "openDate": "1997-10-24"
    },
    {
      "companyName": "Gabriel Vitor 2",
      "fantasyName": "Caminare 2",
      "CNPJ": "09.746.104/0001-14",
      "openDate": "1997-10-24"
    },
    {
      "companyName": "Gabriel Vitor 3",
      "fantasyName": "Caminare 3",
      "CNPJ": "09.746.104/0001-14",
      "openDate": "1997-10-24"
    }
  ]
}
```
**Successful Response:**
```json
HTTP 200 OK
Content-Type: application/json
{
    "persons": [
        {
            "companyName": "Gabriel Vitor",
            "fantasyName": "Caminare",
            "CNPJ": "09.746.104/0001-14",
            "openDate": "1997-10-24",
            "createdAt": "2020-08-11T15:18:38.644Z",
            "updatedAt": "2020-08-11T15:18:38.644Z",
            "id": "2"
        },
        {
            "companyName": "Gabriel Vitor 2",
            "fantasyName": "Caminare 2",
            "CNPJ": "09.746.104/0001-14",
            "openDate": "1997-10-24",
            "createdAt": "2020-08-11T15:18:38.663Z",
            "updatedAt": "2020-08-11T15:18:38.663Z",
            "id": "3"
        },
        {
            "companyName": "Gabriel Vitor 3",
            "fantasyName": "Caminare 3",
            "CNPJ": "09.746.104/0001-14",
            "openDate": "1997-10-24",
            "createdAt": "2020-08-11T15:18:38.665Z",
            "updatedAt": "2020-08-11T15:18:38.665Z",
            "id": "4"
        }
    ],
    "success": true
}
```
**Failed Response in Case of Invalid CNPJ:**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
  "error": [
      {
          "target": {
              "companyName": "Gabriel Vitor",
              "fantasyName": "Caminare",
              "CNPJ": "235.295.280-80",
              "openDate": "1997-10-24"
          },
          "value": "235.295.280-80",
          "property": "CNPJ",
          "children": [],
          "constraints": {
              "validCNPJ": "Must be a valid CNPJ"
          }
      }
  ],
  "success": false
}
``` 

