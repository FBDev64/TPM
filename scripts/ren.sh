#!/bin/bash
old_name=$(gum input --placeholder "Old Name")
new_name=$(gum input --placeholder "New Name")
mv "$old_name" "$new_name"
