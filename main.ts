input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0x000000)
    music.stopMelody(MelodyStopOptions.All)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 - C5 - C5 - C5 - ", 120)
    basic.setLedColor(0xff0000)
})
basic.forever(function () {
	
})
