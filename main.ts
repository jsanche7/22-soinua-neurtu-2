basic.forever(function () {
    if (input.soundLevel() > 50) {
        basic.showNumber(5)
    } else if (input.soundLevel() > 40) {
        basic.showNumber(4)
    } else if (input.soundLevel() > 30) {
        basic.showNumber(3)
    } else if (input.soundLevel() > 20) {
        basic.showNumber(2)
    } else {
        basic.showNumber(1)
    }
})
