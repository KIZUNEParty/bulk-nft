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

    const img06 = await loadImage('./content/06ear/0.png')
    ctx.drawImage(img06, 0, 0)

    const img05 = await loadImage('./content/05head/0.png')
    ctx.drawImage(img05, 0, 0)

    const img04 = await loadImage('./content/04mouth/0.png')
    ctx.drawImage(img04, 0, 0)

    const img03 = await loadImage('./content/03eye/0.png')
    ctx.drawImage(img03, 0, 0)

    const img02 = await loadImage('./content/02decEye/0.png')
    ctx.drawImage(img02, 0, 0)

    const img01 = await loadImage('./content/01hair/0.png')
    ctx.drawImage(img01, 0, 0)

    // const img00 = await loadImage('./content/00headdec/0.png')
    // ctx.drawImage(img00, 0, 0)

    const buffer = canvas.toBuffer("image/png")
    fs.writeFileSync("./out/out.png", buffer)
}

outpart()