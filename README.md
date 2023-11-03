# Backend Challenge by AFFORD Medical Technologies Private Limited

Develop an API to display all trains in the next 12 hours with their seat availability & pricing.


As a developer, you have received pilot access to the APIs of John Doe Railways. Using the APIs provided by the server, develop an API that displays the real-time train schedule of all trains in the next 12 hours.

. Display real-time train schedules of all trains along with seat availability, prices

User shouldn't be asked to register to view the train schedules from your server

. You are free to use any backend framework of your choice.

Each train contains seat availability and prices for 2 train coach types - sleeper and AC

Trains departing in the next 30 minutes should be ignored.


Trains should be displayed in the ascending order of price, descending order of tickets and descending order of departure time(after considering delays in minutes)

The prices, seats Availability of all tickets are subject to change based on market conditions such as demand,

supply, departure time.

⚫ The response given to the user has to be ordered based on the current values of the above three values.

Trains that fulfil the allowed time window after delays should also be included in the API response

Access to the APIs requires you to register your company

Roll Number used while registering your company must match your university/college roll number

Access Code will be available in the email you would have received

APIS to obtain data of all trains or a specific train require an authentication token API calls to the server are chargeable (number of calls to the Railway server has to be minimised)

API server built by you has to be performant providing users a timely and effective response in the shortest

possible time You are expected to handle the evolution in the train data

John Doe Railway Server APIs

http://20.244.56.144/train/register (POST)


This is an API to register your company with the John Doe Railway Server.

{
"companyName": "Train Central",

"ownerName": "Ram", "rollNo": "1",

"ownerEmail": "ram@abc.edu",

"accessCode": "FKDLTg"
}

Response Expected: (Status Code: 200)

You can register only once and cannot get the credentials again. DON'T FORGET TO SAVE THIS!

{

"companyName": "Train Central",

"clientID": "b46128a0-fbde-4c16-a4b1-6ae6ad718e27",

"clientSecret": "XOyolORPayKBODAN"


}

http://20.244.56.144/train/auth (POST)

This is an API to obtain the Authorisation Token for your company from the John Doe Railway Server.

Request


{

"companyName": "Train Central",

"clientID": "b46128a0-fbde-4c16-a4b1-6ae6ad718e27",

"ownerName": "Ram",

"ownerEmail": "ram@abc.edu",

"rollNo": "1",

"clientSecret": "XOyol0RPayKBODAN"

}

Response Expected: (Status Code: 200)
{

"token_type"

: "Bearer",

"access_token":

"eyJhbGci0iJIUZI1NiIsInR5cC161kpXVC39.eyJleнAiOjE20012MjkyNjQs ImNvbXBhbn10YW1lIjoiVHhai4gQ2Vud HJhbCIsImNsaWVudE1EIjoiYjQ2MTE4ZjAtZmJkZSeeYjE2LWEOYjEtNmFINFkNzEBY5131ne.v93QcxrZHWDTnTwm8-6t toTGI4C65Grhn3гIJDC8fу8",

"expires in": 1682629264

}

http://20.244.56.144/train/trains (GET)

This is an API which returns all the train details from the John Doe Railway Server. This is a protected route and requires you to provide the Authorisation Token in the Header.

Response Expected: (Status Code: 200)

[
{

"trainName": "Chennai Exp", "trainNumber": "2344",

"departureTime": {

"Hours": 21,

"Minutes":35,

"Seconds": 0

},

"seatsAvailable": {

"sleeper": 3,

"AC": 1
},

"price": {

"sleeper": 2,

"AC": 5


},

delayedBy": 15

},

{

"trainName": "Hyderabad Exp",

"trainNumber": "2341",

"departureTime": {

Hours": 23,

"Minutes" : 55,

"Seconds": 0

"seatsAvailable": {

"sleeper": 6,

"AC": 7

},

"price": {

"sleeper": 554,

"AC": 1854

},

"delayedBy": 5
}
]

http://20.244.56.144/train/trains/2344 (GET)

This is an API which returns the details of a particular train from the John Doe Railway Server. This is a protected route and requires you to provide the Authorisation Token in the Header.

Response Expected: (Status Code: 200).
{

"trainName": "Delhi Door Hai Exp",

"trainNumber": "2344",

"departureTime": {

"Hours": 9,

"Minutes" : 45,

"Seconds":0
},

"seats Available": {

"sleeper": 32,

"AC": 1
}

"price":{

"sleeper": 1,

"AC": 723
},

"delayedBy": 3
}


# React fronEnd
- Coudnt Complete fronend

Develop a React based Frontend Web Application to display the Trains Schedule

Build a responsive React based Frontend Web App to display the Trains Schedule

Your application must contain 2 pages, one for displaying all trains and one for displaying a single train and both pages must fulfil all the specifications

. Your frontend application should consume the backend API that you have built and not the API provided by the John Doe Railways Server.

You need to use any CSS library of your choice such as Material UI (preferred), Tailwind CSS, Bootstrap, etc Not using a CSS library or using native CSS only will be scored lower

UI must consider the user experience and ensure you prominently display train delays, expensive and cheap trains, seat availability and train coach class

![Screenshot](Screenshot%202023-08-15%20132649.png)

<!--![Screenshot](Screenshot%202023-08-15%133228.png) -->
