const { createCanvas, loadImage }= require('canvas')
const fs = require('fs')

const width = 2000
const height = 2000

const canvas = createCanvas(width, height)
const ctx = canvas.getContext('2d')
ctx.fillStyle = 'rgb(37, 220, 240)'
ctx.fillRect(0, 0, width, height)

async function outpart() {
    const img11 = await loadImage('./content/11decBack/0.png')
    ctx.drawImage(img11, 0, 0)

    const img10 = await loadImage('./content/10body/0.png')
    ctx.drawImage(img10, 0, 0)

    // const img09 = await loadImage('./content/09suit/0.png')
    // ctx.drawImage(img09, 0, 0)

    const img08 = await loadImage('./content/08decR/0.png')
    ctx.drawImage(img08, 0, 0)
    
    const img07 = await loadImage('./content/07decL/0.png')
    ctx.drawImage(img07, 0, 0)

    const buffer = canvas.toBuffer("image/png")
    fs.writeFileSync("./out/out.png", buffer)
}

outpart()