


let detect: number = 0


basic.forever(function () {

    detect = pins.digitalReadPin(DigitalPin.P8)

    //basic.showNumber(detect)

    if (detect == 0) {
    }
    else {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }


    //serial.writeValue("detect", 0)

})
