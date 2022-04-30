# typegraphql

## Login example:
```
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
```
**Params(keep in mind that only these creds are valid(hardcoded) right now):**
```
{
  "email": "admin@gmail.com",
  "password": "admin"
}
```
**On every protected request add HTTP header with the JWT Token to authorize, example header:**
```
{
  "Authorization": "Bearer {generatedTokeHere}"
}
```

## Create car mutation example:
```
mutation CreateCar($data: CarInput!) {
  createCar(data: $data) {
    brand {
    name
    },
    model,
    horsePower
  }
}
```
**Params:**
```
{
  "data": {
    "brand": {
        "_id": "626c4a971b1ec5085a1f9acf",
        "name": "Mercedes",
        "description": "Mercedes-Benz"
    },
    "fuel": {
        "_id": "626c4c2bc20bf89f5f270c80",
        "name": "Diesel",
        "description": ""
    },
    "countryOfOrigin": {
        "_id": "626c5518c20bf89f5f270c8a",
        "name": "Germany",
        "capital": "Berlin"
    },
    "model": "ML 320",
    "releaseYear": 2010,
    "horsePower": 224
	}
}
```
## Query cars example:
```
query Cars {
  cars {
    _id,
  	model,
 }
}
```
## Edit Country mutation example:
```
mutation EditCountry($data: EditCountryInput!, $_id: String!) {
  editCountry(data: $data, _id: $_id) {
    _id,
    name,
    capital
  }
}
```
**Params:**
```
{
  "_id": "626c5518c20bf89f5f270c8a",
  "data": {
    "capital": "Berlin"
    }
}
```

## Delete car mutation example:
```
mutation DeleteCar($_id: String!) {
  deleteCar(_id: $_id) {
    model
  }
}
```
**Params:**
```
{
  "_id": "626c5edd3ecdfc712fc936aa"
}
```
