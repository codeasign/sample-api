# sample-api
This is a sample api bult using Express and node. you can utilize this api to evaluate parsers , api testing tools or a sample to start off. 

```
Build on Node.js v12.16.2 and Express.Js v4.17.1
API server listens on port 9090
```

HTTP Request Method implemented
1. GET
2. POST

```
Response Format: JSON
```
### Sample Headers

![image](https://user-images.githubusercontent.com/49246927/127783673-f391661e-c711-4062-8b40-130f72778b28.png)


##  API Endpoints

|Methods| Endpoints| RequestBody| |
| ------------- | ------------- | ------------- |------------- |
|GET|/api/getArtists     ||Gets detail of artists stored in sqlite|
|POST|/api/addArtist     |{"artist":"val","genre":"val"}|Adds a new artist in the sqlite|
|GET|/api/getFeed/{feedId}   ||Returns JSON responses with different structures. Replace {feedId} with values 1-3|

### Get Artists
http://localhost:9090/api/GetArtists

```
[
  {
    "artist_name": "Elton John",
    "genre": "pop"
  },
  {
    "artist_name": "Green Day",
    "genre": "punk rock"
  },
  {
    "artist_name": "Beethoven",
    "genre": "classical"
  },
  {
    "artist_name": "Iron Maiden",
    "genre": "metal"
  },
  {
    "artist_name": "Metallica",
    "genre": "metal"
  },
  {
    "artist_name": "Coldplay",
    "genre": "pop"
  }
]
```

### Get Feeds

http://localhost:9090/api/getFeed/1

```
[
  {
    "name": "metalllica",
    "genre": "metal",
    "tocontact": "contanct@metallica.com"
  },
  {
    "name": "gnr",
    "genre": "rock",
    "tocontact": "contanct@gnr.com"
  }
]
```

http://localhost:9090/api/getFeed/2

```{
  "pop": {
    "artists": [
      {
        "name": "elton john",
        "famousSongs": [
          {
            "title": "tuny dancer"
          },
          {
            "title": "candle in the wind"
          }
        ]
      }
    ]
  },
  "metal": {
    "artists": [
      {
        "name": "metallica",
        "famousSongs": [
          {
            "title": "creeping death"
          },
          {
            "title": "enter sandman"
          }
        ]
      }
    ]
  }
}
```

http://localhost:9090/api/getFeed/3

```
[
  {
    "id": 1,
    "name": "metallica",
    "founded": "1981",
    "genre": "metal",
    "best_albums": [
      {
        "title": "master of puppets",
        "year": "1986"
      },
      {
        "title": "metallica",
        "year": "1995"
      }
    ]
  },
  {
    "id": 2,
    "name": "iron maiden",
    "founded": "1971",
    "genre": "metal",
    "best_albums": [
      {
        "title": "iron maiden",
        "year": "1967"
      },
      {
        "title": "number of beast",
        "year": "1985"
      }
    ]
  },
  {
    "id": 3,
    "name": "gnr",
    "founded": "1986",
    "genre": "rock n roll",
    "best_albums": [
      {
        "title": "live n era",
        "year": "2003"
      },
      {
        "title": "Appetite for destruction",
        "year": "1995"
      }
    ]
  },
  {
    "id": 4,
    "name": "rush",
    "founded": "1976",
    "genre": "rock n roll",
    "best_albums": [
      {
        "title": "everything",
        "year": "1800"
      }
    ]
  }
]
```
#### Adding More Json Responses ####
To add more sample responses - Add more hardcoded JSON files in ##SampleJson.js## and define the getters as shown below

![image](https://user-images.githubusercontent.com/49246927/127784011-4e1c5329-39dd-4f8a-b71b-e35d44ff5b7c.png)

And in the ##Routes.js## add more cases for If statement

![image](https://user-images.githubusercontent.com/49246927/127783999-50bf3231-5f2f-4f61-8512-2245ef675066.png)








