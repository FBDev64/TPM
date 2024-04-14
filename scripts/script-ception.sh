#!/bin/bash

outscript=$(mktemp).sh
cat $0 > $outscript
chmod a+x $outscript
