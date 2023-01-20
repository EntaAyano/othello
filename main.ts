function CheckTurn () {
	
}
input.onButtonPressed(Button.A, function () {
    カウンターx += 1
})
input.onButtonPressed(Button.AB, function () {
    if (0 <= カウンターx && カウンターx <= 4 && (0 <= カウンターy && カウンターy <= 4)) {
        if (!(led.point(カウンターx, カウンターy))) {
            led.plotBrightness(カウンターx, カウンターy, 明るさの配列[カウンター % 2])
            カウンター += 1
        }
    }
    カウンターx = -1
    カウンターy = -1
})
input.onButtonPressed(Button.B, function () {
    カウンターy += 1
})
let 明るさの配列: number[] = []
let カウンターy = 0
let カウンターx = 0
let カウンター = 0
led.plotBrightness(2, 2, 50)
led.plotBrightness(1, 1, 50)
led.plotBrightness(2, 1, 255)
led.plotBrightness(1, 2, 255)
カウンター = 1
カウンターx = -1
カウンターy = -1
明るさの配列 = [50, 255]
