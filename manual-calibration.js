// GND = Ground
// SIG = Pin 0
// VCC = Pin 16

let value1 = pins.analogReadPin(AnalogPin.P0)
let index = Math.map(value1, 6, 850, 4, 0)

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    value1 = pins.analogReadPin(AnalogPin.P0)
    index = Math.map(value1, 6, 850, 4, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.clearScreen()
    for (let y = 4; y >= index; y--) {
        led.plot(0, y)
        led.plot(1, y)
        led.plot(2, y)
        led.plot(3, y)
        led.plot(4, y)
    }
    basic.pause(500)
    basic.clearScreen()
})
