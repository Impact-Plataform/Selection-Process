#!/bin/bash
if [ ! -f /files/.firstrun ];
then
    for i in {1..50};
    do
        /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P $SA_PASSWORD -Q "SELECT 1"
        if [[ $? -eq 0 ]]
        then
            for i in `/bin/ls /files/Tables`; do
            echo "Rodando $i"
                /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P $SA_PASSWORD -d master -i /files/Tables/$i
            done
            echo "Criando sinalizador .firstrun para evitar rodar multiplas vezes"
            touch .firstrun
            break
        else
            echo "Database não subiu ainda"
            sleep 1
        fi
    done
fi