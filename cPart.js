// edit frame width and height
const w = 2000
const h = 2000
// img gen amount
const iA = 3

// amount of part 00
const p00 = 1
// amount of part 01
const p01 = 1
// amount of part 02
const p02 = 1
// amount of part 03
const p03 = 1
// amount of part 04
const p04 = 1
// amount of part 05
const p05 = 1
// amount of part 06
const p06 = 1
// amount of part 07
const p07 = 1
// amount of part 08
const p08 = 1
// amount of part 09
const p09 = 1
// amount of part 10
const p10 = 1
// amount of part 11
const p11 = 1

// No Edit Part!
module.exports = Object.freeze ({
    width: w,
    height: h,
    d: iA,

    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255),

    part00: Math.floor(Math.random() * p00),
    part01: Math.floor(Math.random() * p01),
    part02: Math.floor(Math.random() * p02),
    part03: Math.floor(Math.random() * p03),
    part04: Math.floor(Math.random() * p04),
    part05: Math.floor(Math.random() * p05),
    part06: Math.floor(Math.random() * p06),
    part07: Math.floor(Math.random() * p07),
    part08: Math.floor(Math.random() * p08),
    part09: Math.floor(Math.random() * p09),
    part10: Math.floor(Math.random() * p10),
    part11: Math.floor(Math.random() * p11)
})