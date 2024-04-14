#!/bin/bash
log_file=$(gum input --placeholder "Path to log file")
max_log_size=$(gum input --placeholder "Max log file size")
if [ -f "$log_file" ]; then
    current_size=$(du -b "$log_file" | awk '{print $1}')
    if [ "$current_size" -ge "$max_log_size" ]; then
        mv "$log_file" "$log_file.old"
        touch "$log_file"
    fi
fi
