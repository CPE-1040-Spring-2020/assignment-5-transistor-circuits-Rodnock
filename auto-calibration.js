// GND = Ground
// SIG = Pin 0
// VCC = Pin 16

let low1: number = 0
let low2: number = 0
let low3: number = 0
let high1: number = 0
let high2: number = 0
let high3: number = 0
let minAverage: number = 0
let maxAverage: number = 0

let timing: number = 2000
let value1 = pins.analogReadPin(AnalogPin.P0)
let index = Math.map(value1, 6, 850, 4, 0)

basic.showArrow(4)
basic.pause(timing)
pins.digitalWritePin(DigitalPin.P16, 1)
low1 = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P16, 0)

basic.showArrow(0)
basic.pause(timing)
pins.digitalWritePin(DigitalPin.P16, 1)
high1 = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P16, 0)

basic.showArrow(4)
basic.pause(timing)
pins.digitalWritePin(DigitalPin.P16, 1)
low2 = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P16, 0)

basic.showArrow(0)
basic.pause(timing)
pins.digitalWritePin(DigitalPin.P16, 1)
high2 = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P16, 0)

basic.showArrow(4)
basic.pause(timing)
pins.digitalWritePin(DigitalPin.P16, 1)
low3 = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P16, 0)

basic.showArrow(0)
basic.pause(timing)
pins.digitalWritePin(DigitalPin.P16, 1)
high3 = pins.analogReadPin(AnalogPin.P0)
pins.digitalWritePin(DigitalPin.P16, 0)

minAverage = (low1 + low2 + low3) / 3
maxAverage = (high1 + high2 + high3) / 3

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    value1 = pins.analogReadPin(AnalogPin.P0)
    index = Math.map(value1, minAverage, maxAverage, 4, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.clearScreen()
    for (let y = 4; y >= index; y--) {
        led.plot(0, y)
        led.plot(1, y)
        led.plot(2, y)
        led.plot(3, y)
        led.plot(4, y)
    }
    // led.plot(0, index)
    // led.plot(1, index)
    // led.plot(2, index)
    // led.plot(3, index)
    // led.plot(4, index)
    basic.pause(500)
    basic.clearScreen()
})
