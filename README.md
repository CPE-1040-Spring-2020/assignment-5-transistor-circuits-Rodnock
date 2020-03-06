# CPE 1040 - Spring 2020

## Assignment 5: Transistors

Author: Ivo Georgiev, PhD  
Last updated: 2020-02-22  
Code: 98ffb5e9c5964e27028001933faec10caa0e4709  

---

_**NOTE:** This assignment [README](README.md) is _intentionally_ blank. It is part of the assignment to fill it. Refer to the [submission template](submission-template.md) for expectations and guidance. Read the [requirements](requirements.md) and [criteria](criteria.md) for the assignment proper._

```
  _           _       _   _       _       _                 _    
 | |         | |     | \ | |     | |     | |               | |   
 | |     __ _| |__   |  \| | ___ | |_ ___| |__   ___   ___ | | __
 | |    / _` | '_ \  | . ` |/ _ \| __/ _ \ '_ \ / _ \ / _ \| |/ /
 | |___| (_| | |_) | | |\  | (_) | ||  __/ |_) | (_) | (_) |   < 
 |______\__,_|_.__/  |_| \_|\___/ \__\___|_.__/ \___/ \___/|_|\_\
                                                                                                                      
```
Art acknowledgement: [taag](http://patorjk.com/software/taag/)

**NPN transistor circuit:**

**Switch off Voltage:**

3. i. 0V

3. ii. 2.7V

3. iii. 0V

3. iv. 0V

**Switch off Current:**

4. i. 0uA

4. ii. 0uA

4. iii. 0uA

**Switch on Voltage:**

5. i. 2.1V

5. ii. 57mV

5. iii. 0.7V

5. iv. 6mV

**Switch on Current:**

5. i. 6.3 mA

5. ii. .375 mA

5. iii. 6.6 mA

6. The current changes depending on which way the transistor is channeling electricity.

7. .95 mA

[Drawing](https://imgur.com/a/isEa4ux)

**PNP transistor circuit:**

1. It lights up when the switch is off. The transistor is getting voltage from the emitter, and sending it to the collector, bypassing the base.

**Switch off voltage:**

Across resistor: .333 mV

At Collector: 5V

At Base: 4.3V

At Emitter: 5V

**Switch off current:**

Collector: 6.4 mA

At Base: .4 mA

At Emitter: 6.8 mA

**Switch on voltage:**

Across resistor: 5V

At Collector: 0V

At Base: 5V

At Emitter: 5V

**Switch on current:**

Collector: 0uA

Base: 0uA

Emitter: 0uA

[Drawing](https://imgur.com/a/hSB7P5D)

**Soil Sensor**

1. There is less resistance the higher the moisture content of the soil. The soil sensor sends electricity down probe 2, and then depending on the resistance of the soil, probe 1 conducts electricity. If the voltage is high enough on probe 1, it trips the transistor and begins sending a signal back to the controller.

2. Fully soaked soil can be emulated by a small cup of water, with wires dipped in it leading back to the multimeter, simulating the soil sensor. [Image](https://imgur.com/a/5NOqWF2)

Dry Soil: Infinite Resistance

Slightly Wet Soil: .7M Ohms

Fully Soaked Soil: .3M Ohms

3. You can emulate the soil in the same was as when you measure resistance, but the soil sensor needs to be hooked up to power to measure the voltage on probe 1, and probe 2. [Image](https://imgur.com/a/yEDpfTt)

Dry Soil: 0 V

Slightly Wet Soil: 4.1 V

Fully Soaked Soil: 5 V

4. Digital In LED [Video](https://imgur.com/a/KN89csu)



