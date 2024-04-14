#!/bin/bash
input_file=$(gum input --placeholder "Document.docx")
output_file=$(gum input --placeholder "Document.pdf")	
libreoffice --headless --convert-to pdf "$input_file"
