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
