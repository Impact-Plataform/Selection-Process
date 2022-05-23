#!/bin/bash

docker rm -f virtual-database
docker rmi -f intelitrader/virtual-database
docker build -t intelitrader/virtual-database .
docker run -d -p 1433:1433 --name virtual-database intelitrader/virtual-database