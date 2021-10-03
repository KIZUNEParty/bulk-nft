const fs = require('fs')
const { createCanvas }= require('canvas')

const width = 2000
const height = 2000

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')
context.fillStyle = 'rgb(37, 220, 240)'
context.fillRect(0, 0, width, height)

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("./out/out.png", buffer);