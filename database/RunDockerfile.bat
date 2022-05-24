@ECHO OFF

docker rm -f selection-service-database
docker rmi -f plataforma/selection-service-database
docker build -t plataforma/selection-service-database .
docker run -d -p 1433:1433 --name selection-service-database plataforma/selection-service-database