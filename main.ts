input.onPinPressed(TouchPin.P0, function () {
    カウンター += 1
    カウンターx = -1
    カウンターy = -1
})
input.onButtonPressed(Button.A, function () {
    カウンターx += 1
})
function CheckTurn (x: number, y: number, light2: number, another_light: number) {
    // 上方向
    check_y = y - 1
    while (check_y >= 0) {
        if (led.pointBrightness(x, check_y) == another_light) {
            while (check_y >= 0) {
                if (led.pointBrightness(x, check_y) == light2) {
                    return 1
                }
                check_y += -1
            }
        }
        check_y += -1
    }
    // 下方向
    check_y = y + 1
    while (check_y <= 4) {
        if (led.pointBrightness(x, check_y) == another_light) {
            while (check_y <= 4) {
                if (led.pointBrightness(x, check_y) == light2) {
                    return 1
                }
                check_y += 1
            }
        }
        check_y += 1
    }
    // 左方向
    check_y = x - 1
    return 0
}
input.onButtonPressed(Button.AB, function () {
    if (カウンター % 2 == 1) {
        light22 = 255
        another_light2 = 50
    } else {
        light22 = 50
        another_light2 = 255
    }
    if (0 <= カウンターx && カウンターx <= 4 && (0 <= カウンターy && カウンターy <= 4)) {
        if (!(led.point(カウンターx, カウンターy))) {
            if (CheckTurn(カウンターx, カウンターy, light22, another_light2) == 1) {
                led.plotBrightness(カウンターx, カウンターy, light22)
                カウンター += 1
            }
        }
    }
    カウンターx = -1
    カウンターy = -1
})
input.onButtonPressed(Button.B, function () {
    カウンターy += 1
})
let another_light2 = 0
let light22 = 0
let check_y = 0
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
