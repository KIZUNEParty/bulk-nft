const { createCanvas, loadImage }= require('canvas')
const fs = require('fs')
const { exit } = require('process')

const width = 2000
const height = 2000
const d = 3

for (let i = 0; i < d; i++) {
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    ctx.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')'

    ctx.fillRect(0, 0, width, height)

    async function outpart() {
        console.log('Starting Pic' + i)

        const part11 = Math.floor(Math.random() * 1);
        const img11 = await loadImage('./content/11decBack/' + part11 + '.png')
        ctx.drawImage(img11, 0, 0)

        const part10 = Math.floor(Math.random() * 1);
        const img10 = await loadImage('./content/10body/' + part10 + '.png')
        ctx.drawImage(img10, 0, 0)

        const part09 = Math.floor(Math.random() * 1);
        // const img09 = await loadImage('./content/09suit/' + part09 + '.png')
        // ctx.drawImage(img09, 0, 0)

        const part08 = Math.floor(Math.random() * 1);
        const img08 = await loadImage('./content/08decR/' + part08 + '.png')
        ctx.drawImage(img08, 0, 0)

        const part07 = Math.floor(Math.random() * 1);
        const img07 = await loadImage('./content/07decL/' + part07 + '.png')
        ctx.drawImage(img07, 0, 0)

        const part06 = Math.floor(Math.random() * 1);
        const img06 = await loadImage('./content/06ear/' + part06 + '.png')
        ctx.drawImage(img06, 0, 0)

        const part05 = Math.floor(Math.random() * 1);
        const img05 = await loadImage('./content/05head/' + part05 + '.png')
        ctx.drawImage(img05, 0, 0)

        const part04 = Math.floor(Math.random() * 1);
        const img04 = await loadImage('./content/04mouth/' + part04 + '.png')
        ctx.drawImage(img04, 0, 0)

        const part03 = Math.floor(Math.random() * 1);
        const img03 = await loadImage('./content/03eye/' + part03 + '.png')
        ctx.drawImage(img03, 0, 0)

        const part02 = Math.floor(Math.random() * 1);
        const img02 = await loadImage('./content/02decEye/' + part02 + '.png')
        ctx.drawImage(img02, 0, 0)

        const part01 = Math.floor(Math.random() * 2);
        const img01 = await loadImage('./content/01hair/' + part01 + '.png')
        ctx.drawImage(img01, 0, 0)

        const part00 = Math.floor(Math.random() * 0);
        // const img00 = await loadImage('./content/00headdec/' + part00 + '.png')
        // ctx.drawImage(img00, 0, 0)

        const buffer = canvas.toBuffer("image/png")
        fs.writeFileSync("./out/" + i + ".png", buffer)

        console.log('Finished ' + i + ' Pics')
        if(i === d) {
            exit(1);
        }
    }    

    outpart()
}