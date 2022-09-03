#!/bin/bash
NOWTIME=$(date +%F_%H-%M-%S)
mysqldump -u admin -p --all-databases | gzip > mariadb-dump-$NOWTIME.sql.gz