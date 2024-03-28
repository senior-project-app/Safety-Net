while true
do
	if [[ $(netstat -peanut 2>/dev/null | grep ":5000")  ]]; then
		break
	else
		continue
	fi
done
