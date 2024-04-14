#!/bin/bash
url=$(gum input --placeholder "URL")
output_file=$(gum input --placeholder "Downloaded file name")
wget "$url" -O "$output_file"
