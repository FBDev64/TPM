#!/bin/bash
input_csv=$(gum input --placeholder "file.csv")
output_xlsx=$(gum input --placeholder "file.xlsx")
ssconvert "$input_csv" "$output_xlsx"
