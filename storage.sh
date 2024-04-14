#!/bin/bash
threshold=90
current_usage=$(df -h / | awk 'NR==2 {print $5}' | tr -d '%')
if [ "$current_usage" -ge "$threshold" ]; then
    gum log --level info "Disk space is low!"
else
    gum log --level info "Disk space is okay."
fi
