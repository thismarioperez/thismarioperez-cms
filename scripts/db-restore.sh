#!/bin/bash
# Pass the database dump file to restore from as a command line argument.
gunzip < $0 | mysql -u admin -p