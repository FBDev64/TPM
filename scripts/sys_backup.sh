#!/bin/env bash

source_dir="/"
backup_dir=$(gum input --placeholder "Backup directory")
timestamp=$(date +%Y%m%d%H%M%S)
backup_file="backup_$timestamp.tar.gz"
tar -czvf "$backup_dir/$backup_file" "$source_dir"
