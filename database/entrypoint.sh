#!/bin/bash
/opt/mssql/bin/sqlservr & PID=$! & /files/import-data.sh
wait $PID