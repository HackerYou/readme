#!/bin/sh

fileNameRegex='/([a-z]+).bson'
if [[ $# -eq 0 ]]
    then
    echo "No folder path provided. Make sure you provide a path to the location of the .bson files."
    exit 1
fi
for file in $1/*.bson; do 
    if [[ $file =~ $fileNameRegex ]]
    then
        collection="${BASH_REMATCH[1]}"
        mongorestore --db notes --collection $collection --drop $file
    fi
done