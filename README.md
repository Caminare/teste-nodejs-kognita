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
    "message": ""
  },
  "success": false
}
``` 

**Failed Response when E-mail is already registered:**
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
Person JSON Object

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
**Failed Response:**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
  "error": {
    "message": ""
  },
  "success": false
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

**Failed Response:**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
  "error": {
    "message": ""
  },
  "success": false
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

/* find */

## Find

### Find one
**You send:**  An id
**You get:** The person object with a success.

**Request:**
```json
POST /person/find/1
Accept: application/json
Content-Type: application/json

```
**Successful Response:**
```json
HTTP 200 OK
Content-Type: application/json
{
    "person": {
        "createdAt": "2020-08-11T15:16:17.596Z",
        "updatedAt": "2020-08-11T15:16:17.596Z",
        "id": "1",
        "companyName": "Gabriel Vitor",
        "fantasyName": "Caminare",
        "CNPJ": "09.746.104/0001-14",
        "openDate": "1997-10-24T00:00:00.000Z"
    },
    "success": true
}
```
**Failed Response**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
  "error": {
      "message": ""
  },
  "success": false
}

``` 

### Find many

**You send:** Optional query parameters page and quantityPerPage
**You get:** An array of persons objects


**Request:**
```json
POST /person/find-many?page=1&quantityPerPage=3
Accept: application/json
Content-Type: application/json

```
**Successful Response:**
```json
HTTP 200 OK
Content-Type: application/json
{
  "persons": [
      {
          "createdAt": "2020-08-11T15:16:17.596Z",
          "updatedAt": "2020-08-11T15:16:17.596Z",
          "id": "1",
          "companyName": "Gabriel Vitor",
          "fantasyName": "Caminare",
          "CNPJ": "09.746.104/0001-14",
          "openDate": "1997-10-24T00:00:00.000Z"
      },
      {
          "createdAt": "2020-08-11T15:18:38.644Z",
          "updatedAt": "2020-08-11T15:18:38.644Z",
          "id": "2",
          "companyName": "Gabriel Vitor",
          "fantasyName": "Caminare",
          "CNPJ": "09.746.104/0001-14",
          "openDate": "1997-10-24T00:00:00.000Z"
      },
      {
          "createdAt": "2020-08-11T15:18:38.663Z",
          "updatedAt": "2020-08-11T15:18:38.663Z",
          "id": "3",
          "companyName": "Gabriel Vitor 2",
          "fantasyName": "Caminare 2",
          "CNPJ": "09.746.104/0001-14",
          "openDate": "1997-10-24T00:00:00.000Z"
      }
  ],
  "success": true
}
```
**Failed Response:**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
    "error": {
        "message": ""
    },
    "success": false
}
``` 

/* Delete */

## Delete

### Delete one
**You send:**  An id
**You get:** An success message.

**Request:**
```json
POST /person/delete/1
Accept: application/json
Content-Type: application/json

```
**Successful Response:**
```json
HTTP 200 OK
Content-Type: application/json
{
    "message": "The user was succesfully deleted",
    "success": true
}
```
**Failed Response**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
  "error": {
      "message": ""
  },
  "success": false
}

``` 

### Delete many

**You send:** An array of ids
**You get:** A success message.


**Request:**
```json
POST /person/delete-many
Accept: application/json
Content-Type: application/json

{
    "ids": [1,2,3]
}

```
**Successful Response:**
```json
HTTP 200 OK
Content-Type: application/json
{
    "message": "The users were succesfully deleted",
    "success": true
}
```
**Failed Response:**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
    "error": {
        "message": ""
    },
    "success": false
}
``` 


/* Update */

## Update

### Update one
**You send:**  An json person object
**You get:** The object with a success.

**Request:**
```json
POST /person/update
Accept: application/json
Content-Type: application/json

{
    "createdAt": "2020-08-10T21:07:38.730Z",
    "updatedAt": "2020-08-10T21:07:38.730Z",
    "id": "5",
    "companyName": "gxvitor5.1997@hotmail.com",
    "fantasyName": "",
    "CNPJ": "56.903.156/0001-37",
    "openDate": "1997-10-25T00:00:00.000Z"
}

```
**Successful Response:**
```json
HTTP 200 OK
Content-Type: application/json
{
    "person": {
        "createdAt": "2020-08-10T21:07:38.730Z",
        "updatedAt": "2020-08-10T21:07:38.730Z",
        "id": "5",
        "companyName": "gxvitor5.1997@hotmail.com",
        "fantasyName": "",
        "CNPJ": "56.903.156/0001-37",
        "openDate": "1997-10-25T00:00:00.000Z"
    },
    "success": true
}
```
**Failed Response**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
  "error": {
      "message": ""
  },
  "success": false
}

``` 

**Failed Response when invalid CNPJ:**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
  "error": [
      {
          "target": {
              "createdAt": "2020-08-11T15:18:38.663Z",
              "updatedAt": "2020-08-11T15:18:38.663Z",
              "id": "3",
              "companyName": "Gabriel Vitor 2",
              "fantasyName": "Caminare 2",
              "CNPJ": "111111",
              "openDate": "1997-10-24T00:00:00.000Z"
          },
          "value": "111111",
          "property": "CNPJ",
          "children": [],
          "constraints": {
              "validCNPJ": "Must be a valid CNPJ",
              "minLength": "CNPJ must be longer than or equal to 14 characters"
          }
      }
  ],
  "success": false
}
``` 

### Delete many

**You send:**  An array of persons object
**You get:** The objects with a success.


**Request:**
```json
POST /person/update-many
Accept: application/json
Content-Type: application/json

{
    "persons": [
        {
            "createdAt": "2020-08-11T15:18:38.663Z",
            "updatedAt": "2020-08-11T15:18:38.663Z",
            "id": "3",
            "companyName": "Gabriel Vitor 2",
            "fantasyName": "Caminare 2",
            "CNPJ": "09.746.104/0001-14",
            "openDate": "1997-10-24T00:00:00.000Z"
        },
        {
            "createdAt": "2020-08-10T21:07:38.730Z",
            "updatedAt": "2020-08-10T21:07:38.730Z",
            "id": "5",
            "companyName": "gxvitor5.1997@hotmail.com",
            "fantasyName": "",
            "CNPJ": "56.903.156/0001-37",
            "openDate": "1997-10-25T00:00:00.000Z"
        },
        {
            "createdAt": "2020-08-11T15:20:25.197Z",
            "updatedAt": "2020-08-11T15:20:25.197Z",
            "id": "6",
            "companyName": "Gabriel Vitor 2",
            "fantasyName": "Caminare 2",
            "CNPJ": "09.746.104/0001-14",
            "openDate": "1997-10-24T00:00:00.000Z"
        }
    ],
    "success": true
}
```
**Successful Response:**
```json
HTTP 200 OK
Content-Type: application/json
{
    "persons": [
        {
            "createdAt": "2020-08-11T15:18:38.663Z",
            "updatedAt": "2020-08-11T15:18:38.663Z",
            "id": "3",
            "companyName": "Gabriel Vitor 2",
            "fantasyName": "Caminare 2",
            "CNPJ": "09.746.104/0001-14",
            "openDate": "1997-10-24T00:00:00.000Z"
        },
        {
            "createdAt": "2020-08-10T21:07:38.730Z",
            "updatedAt": "2020-08-10T21:07:38.730Z",
            "id": "5",
            "companyName": "gxvitor5.1997@hotmail.com",
            "fantasyName": "",
            "CNPJ": "56.903.156/0001-37",
            "openDate": "1997-10-25T00:00:00.000Z"
        },
        {
            "createdAt": "2020-08-11T15:20:25.197Z",
            "updatedAt": "2020-08-11T15:20:25.197Z",
            "id": "6",
            "companyName": "Gabriel Vitor 2",
            "fantasyName": "Caminare 2",
            "CNPJ": "09.746.104/0001-14",
            "openDate": "1997-10-24T00:00:00.000Z"
        }
    ],
    "success": true
}
```
**Failed Response:**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
    "error": {
        "message": ""
    },
    "success": false
}
``` 

**Failed Response when invalid CNPJ:**
```json
HTTP 400 Bad Request
Content-Type: application/json

{
  "error": [
      {
          "target": {
              "createdAt": "2020-08-11T15:18:38.663Z",
              "updatedAt": "2020-08-11T15:18:38.663Z",
              "id": "3",
              "companyName": "Gabriel Vitor 2",
              "fantasyName": "Caminare 2",
              "CNPJ": "1111111",
              "openDate": "1997-10-24T00:00:00.000Z"
          },
          "value": "1111111",
          "property": "CNPJ",
          "children": [],
          "constraints": {
              "validCNPJ": "Must be a valid CNPJ",
              "minLength": "CNPJ must be longer than or equal to 14 characters"
          }
      }
  ],
  "success": false
}
``` 