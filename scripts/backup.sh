#!/bin/bash
source_dir=$(gum input --placeholder "Path")
backup_dir=$(gum input --placeholder "Backup dir")
timestamp=$(date +%Y%m%d%H%M%S)
backup_file="backup_$timestamp.tar.gz"
tar -czvf "$backup_dir/$backup_file" "$source_dir"
straw
