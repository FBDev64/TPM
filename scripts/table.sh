#!/bin/bash

input_file=$(gum input --placeholder "Input file name.xlsx")

xlsx2csv
ssconvert file.xlsx file.csv
libreoffice --headless --convert-to csv $input_file
