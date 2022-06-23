#!/bin/bash
hash=$(curl -X GET --header "Accept: */*" "${3}")

echo https://app.endtest.io/results?hash="$hash"

for run in {1.."${4}"}
do
  sleep 30
  result=$(curl -X GET --header "Accept: */*" "https://app.endtest.io/api.php?action=getResults&appId=${1}&appCode=${2}&hash=${hash}&format=json")
  if [ "$result" == "Test is still running." ]
  then
    status=$result
    # Don't print anything
  elif [ "$result" == "Processing video recording." ]
  then
    status=$result
    # Don't print anything
  elif [ "$result" == "Stopping." ]
  then
    status=$result
  elif [ "$result" == "Erred." ]
  then
    status=$result
    echo $status
  elif [ "$result" == "" ]
  then
    status=$result
    # Don't print anything
  else
     echo "$result" | jq
     exit 0
  fi
done
exit
