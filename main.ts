let LED = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
let Humidity = 0
basic.forever(function () {
    Humidity = pins.analogReadPin(AnalogPin.P2)
    if (Humidity < 500) {
        basic.showIcon(IconNames.Sad)
        LED.showColor(neopixel.colors(NeoPixelColors.Red))
        music.ringTone(262)
    } else {
        basic.showIcon(IconNames.Happy)
        LED.clear()
        LED.show()
        music.stopAllSounds()
    }
})
