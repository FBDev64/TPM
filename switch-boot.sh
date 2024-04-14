#!/bin/env bash

NAM=$(gum input --placeholder "Enter service name (name.service)")

# If/Else choice

function choice () {
	CHO=$(gum input --placeholder "Choose : [E]nable or [D]isable")

	if [ "$CHO" = "E" ]; then
  	sudo systemctl stary "$NAM"
  	sudo systemctl enable "$NAM"
	fi
	if [ "$CHO" = "D" ]; then
  	sudo systemctl stop "$NAM"
	fi
}

choice
