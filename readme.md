# About

Commandline script that pings a url and logs the response with status-code and time. Interval and protocol (http/https) can be specified.


# Description

### Use case

Websites hosted on free domains like heroku can take forever to load (first load) since they are put to sleep after a duration of inactivity. This tool is designed to constantly ping the website and prevent the backend from sleeping.

### Language, Frameworks and libraries

- JavaScript
- NodeJS

### Feature highlights:

- Ping any url
- http or https protocols
- Log response status and time to file


# How to run

Run the start script using

```sh
$ npm run start
```
