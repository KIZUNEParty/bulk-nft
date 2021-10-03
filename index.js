const { createCanvas, loadImage }= require('canvas')
const fs = require('fs')
const { exit } = require('process')
var a = require('./cPart')

for (let i = 0; i < a.d; i++) {
    const canvas = createCanvas(a.width, a.height)
    const ctx = canvas.getContext('2d')
 
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    ctx.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')'
    console.log(r+', '+g+', '+b);

    ctx.fillRect(0, 0, a.width, a.height)

    async function outpart() {
        console.log('Starting Pic' + i)

        const part11 = Math.floor(Math.random() * a.pa11)
        const img11 = await loadImage('./content/11decBack/' + part11 + '.png')
        console.log('decBack : '+ part11);
        ctx.drawImage(img11, 0, 0)

        const part10 = Math.floor(Math.random() * a.pa10)
        const img10 = await loadImage('./content/10body/' + part10 + '.png')
        console.log('body : '+ part10)
        ctx.drawImage(img10, 0, 0)

        const part09 = Math.floor(Math.random() * a.pa09)
        const img09 = await loadImage('./content/09suit/' + part09 + '.png')
        console.log('suit : '+ part09);
        ctx.drawImage(img09, 0, 0)

        const part08 = Math.floor(Math.random() * a.pa08)
        const img08 = await loadImage('./content/08decR/' + part08 + '.png')
        console.log('decR : '+ part08);
        ctx.drawImage(img08, 0, 0)

        const part07 = Math.floor(Math.random() * a.pa07)
        const img07 = await loadImage('./content/07decL/' + part07 + '.png')
        console.log('decL : '+ part07);
        ctx.drawImage(img07, 0, 0)

        const part06 = Math.floor(Math.random() * a.pa06)
        const img06 = await loadImage('./content/06ear/' + part06 + '.png')
        console.log('ear : ' + part06);
        ctx.drawImage(img06, 0, 0)

        const part05 = Math.floor(Math.random() * a.pa05)
        const img05 = await loadImage('./content/05head/' + part05 + '.png')
        console.log('head : '+ part05)
        ctx.drawImage(img05, 0, 0)

        const part04 = Math.floor(Math.random() * a.pa04)
        const img04 = await loadImage('./content/04mouth/' + part04 + '.png')
        console.log('mouth : '+ part04);
        ctx.drawImage(img04, 0, 0)

        const part03 = Math.floor(Math.random() * a.pa03)
        const img03 = await loadImage('./content/03eye/' + part03 + '.png')
        console.log('eye : ' + part03);
        ctx.drawImage(img03, 0, 0)

        const part02 = Math.floor(Math.random() * a.pa02)
        const img02 = await loadImage('./content/02decEye/' + part02 + '.png')
        console.log('decEye : ' + part02);
        ctx.drawImage(img02, 0, 0)

        const part01 = Math.floor(Math.random() * a.pa01)
        const img01 = await loadImage('./content/01hair/' + part01 + '.png')
        console.log('hair : ' + part01);
        ctx.drawImage(img01, 0, 0)

        const part00 = Math.floor(Math.random() * a.pa00)
        const img00 = await loadImage('./content/00decH/' + part00 + '.png')
        console.log('decH : ' + part00);
        ctx.drawImage(img00, 0, 0)

        const buffer = canvas.toBuffer("image/png")
        fs.writeFileSync("./out/" + i + ".png", buffer)

        console.log('Finished ' + i+1 + ' Pics')
        if(i === a.d) {
            exit(1);
        }
    }    

    outpart()
}