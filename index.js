const { createCanvas, loadImage }= require('canvas')
const fs = require('fs')
const { exit } = require('process')
var a = require('./cPart')

for (let i = 0; i < a.d; i++) {
    const canvas = createCanvas(a.width, a.height)
    const ctx = canvas.getContext('2d')
 
    ctx.fillStyle = 'rgb(' + a.r + ', ' + a.g + ', ' + a.b + ')'

    ctx.fillRect(0, 0, a.width, a.height)

    async function outpart() {
        console.log('Starting Pic' + i)

        const img11 = await loadImage('./content/11decBack/' + a.part11 + '.png')
        ctx.drawImage(img11, 0, 0)

        const img10 = await loadImage('./content/10body/' + a.part10 + '.png')
        ctx.drawImage(img10, 0, 0)

        const img09 = await loadImage('./content/09suit/' + a.part09 + '.png')
        ctx.drawImage(img09, 0, 0)

        const img08 = await loadImage('./content/08decR/' + a.part08 + '.png')
        ctx.drawImage(img08, 0, 0)

        const img07 = await loadImage('./content/07decL/' + a.part07 + '.png')
        ctx.drawImage(img07, 0, 0)

        const img06 = await loadImage('./content/06ear/' + a.part06 + '.png')
        ctx.drawImage(img06, 0, 0)

        const img05 = await loadImage('./content/05head/' + a.part05 + '.png')
        ctx.drawImage(img05, 0, 0)

        const img04 = await loadImage('./content/04mouth/' + a.part04 + '.png')
        ctx.drawImage(img04, 0, 0)

        const img03 = await loadImage('./content/03eye/' + a.part03 + '.png')
        ctx.drawImage(img03, 0, 0)

        const img02 = await loadImage('./content/02decEye/' + a.part02 + '.png')
        ctx.drawImage(img02, 0, 0)

        const img01 = await loadImage('./content/01hair/' + a.part01 + '.png')
        ctx.drawImage(img01, 0, 0)

        const img00 = await loadImage('./content/00headdec/' + a.part00 + '.png')
        ctx.drawImage(img00, 0, 0)

        const buffer = canvas.toBuffer("image/png")
        fs.writeFileSync("./out/" + i + ".png", buffer)

        console.log('Finished ' + i + ' Pics')
        if(i === d) {
            exit(1);
        }
    }    

    outpart()
}