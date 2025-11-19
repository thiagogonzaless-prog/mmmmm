pins.servoWritePin(AnalogPin.P0, 0)
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    if (input.temperature() > 22) {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.showString("Abrir ventanas ")
    } else if (input.temperature() > 15) {
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.showString("Encender calefacción ")
    } else {
        basic.showString("Todo normal ")
    }
})
