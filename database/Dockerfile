FROM mcr.microsoft.com/mssql/server:2019-latest

USER root
ENV SA_PASSWORD="selection-service!"
ENV ACCEPT_EULA="Y"

WORKDIR /files/
ADD . /files/
RUN chmod +x /files/import-data.sh
RUN chown mssql /files/

USER mssql
ENTRYPOINT /bin/bash ./entrypoint.sh