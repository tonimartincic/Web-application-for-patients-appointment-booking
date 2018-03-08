#!/bin/bash
mvn clean install
heroku deploy:jar backend/target/snarp-backend-0.0.1-SNAPSHOT.jar -a snarp
