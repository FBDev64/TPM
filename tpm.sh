#!/bin/sh

now=$(date)
echo "A little shell that runs in a shell"

while true
	do

	# Input
	VHS=$(gum input --placeholder " Enter Command")

	case $VHS in

		exit)
			exit
			;;
		cls)
			clear
			;;
		help)
			gum pager < ./cmd.txt
			;;
		edit)
			$EDITOR $(gum file $TPM)
			;;
		date)
			echo "$now"
			;;
		*)
			echo -n "Command unknown or not implemented yet."
			;;
	esac
done
