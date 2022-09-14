// Tenemos magma subiendo por el cuello de un volcan.
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(250)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        # # # # #
        `)
    basic.pause(250)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(250)
    basic.showLeds(`
        # . . . #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(250)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(250)
}
// Lava eruptando
// 
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.pause(250)
    basic.showLeds(`
        # . # . #
        . . # . .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.pause(250)
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.pause(250)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . # . # .
        # . . . #
        `)
    basic.pause(250)
}
