#!/bin/bash

input_file=$(gum input --placeholder "Input file name.xlsx")
new_name=$(gum nput --placeholder "Input the desired new name, without extesion")

ssconvert $input_file $new_nme

gum table <  $new_nme | cut -d ',' -f 1
