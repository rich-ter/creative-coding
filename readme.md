files inserted into the p5js directory use p5js library

files on the vanilla js directory use vanilla js in addition to an npm module called canvas-sketch

to do that: npm i canvas-sketch-cli -g

To create a new sketch from the library use:
canvas-sketch nameofyourfile.js --new

to install the utility functions for the canvas-sketch

npm i canvas-sketch-util

to run the server of the script just call the file name i.e.

canvas-sketch nameofyourfile.js

to export an image:

to export a video:

npm i @ffmpeg-installer/ffmpeg --global
