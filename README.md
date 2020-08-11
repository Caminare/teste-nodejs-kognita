# NodeJS API built with express and typeORM

Steps to run this project:

1. Run `docker-compose up` command
2. Run `npm install` command
3. Run `npm start` command


# API Documentation
All responses come in standard JSON. All requests must include a content-type of application/json and the body must be valid JSON.

# Auth

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
