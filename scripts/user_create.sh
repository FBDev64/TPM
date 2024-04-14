#!/bin/bash
username=$(gum input --placeholder "Username")
password=$(gum log --placeholder "Passwd")
useradd "$username"
echo "$username:$password" | chpasswd
