input.onPinPressed(TouchPin.P0, function () {
    j += 1
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
    check_x = x - 1
    while (check_x >= 0) {
        if (led.pointBrightness(check_x, y) == another_light) {
            while (check_x >= 0) {
                if (led.pointBrightness(check_x, y) == light2) {
                    return 1
                }
                check_x += -1
            }
        }
        check_x += -1
    }
    // 右方向
    check_x = x + 1
    while (check_x <= 4) {
        if (led.pointBrightness(check_x, y) == another_light) {
            while (check_x <= 4) {
                if (led.pointBrightness(check_x, y) == light2) {
                    return 1
                }
                check_x += 1
            }
        }
        check_x += 1
    }
    // ななめ右下方向
    check_x = x + 1
    check_y = y + 1
    while (check_x <= 4 && check_y <= 4) {
        if (led.pointBrightness(check_x, check_y) == another_light) {
            while (check_x <= 4 && check_y <= 4) {
                if (led.pointBrightness(check_x, check_y) == light2) {
                    return 1
                }
                check_x += 1
                check_y += 1
            }
        }
        check_x += 1
        check_y += 1
    }
    // ななめ右上方向
    check_x = x + 1
    check_y = y - 1
    while (check_x <= 4 && check_y >= 0) {
        if (led.pointBrightness(check_x, check_y) == another_light) {
            while (check_x <= 4 && check_y >= 0) {
                if (led.pointBrightness(check_x, check_y) == light2) {
                    return 1
                }
                check_x += 1
                check_y += 0 - 1
            }
        }
        check_x += 1
        check_y += 0 - 1
    }
    // ななめ左下方向
    check_x = x - 1
    check_y = y - 1
    while (check_x >= 0 && check_y >= 0) {
        if (led.pointBrightness(check_x, check_y) == another_light) {
            while (check_x >= 0 && check_y >= 0) {
                if (led.pointBrightness(check_x, check_y) == light2) {
                    return 1
                }
                check_x += 0 - 1
                check_y += 0 - 1
            }
        }
        check_x += 0 - 1
        check_y += 0 - 1
    }
    // ななめ左下方向
    check_x = x - 1
    check_y = y + 1
    while (check_x >= 0 && check_y <= 4) {
        if (led.pointBrightness(check_x, check_y) == another_light) {
            while (check_x >= 0 && check_y <= 4) {
                if (led.pointBrightness(check_x, check_y) == light2) {
                    return 1
                }
                check_x += 0 - 1
                check_y += 1
            }
        }
        check_x += 0 - 1
        check_y += 1
    }
    return 0
}
function Turn (x2: number, y2: number, light22: number, another_light2: number) {
    let i: number;
// 上方向
    check_y = y2 - 1
    while (check_y >= 0) {
        if (led.pointBrightness(x2, check_y) == another_light2) {
            while (check_y >= 0) {
                if (led.pointBrightness(x2, check_y) == light22) {
                    i = 0
                    while (i <= y2 - check_y) {
                        led.plotBrightness(x2, y2 - i - 1, light22)
                        i += 1
                    }
                }
                check_y += -1
            }
        }
        check_y += -1
    }
    // 下方向
    check_y = y2 + 1
    while (check_y <= 4) {
        if (led.pointBrightness(x2, check_y) == another_light2) {
            while (check_y <= 4) {
                if (led.pointBrightness(x2, check_y) == light22) {
                    return 1
                }
                check_y += 1
            }
        }
        check_y += 1
    }
    // 左方向
    check_x = x2 - 1
    while (check_x >= 0) {
        if (led.pointBrightness(check_x, y2) == another_light2) {
            while (check_x >= 0) {
                if (led.pointBrightness(check_x, y2) == light22) {
                    return 1
                }
                check_x += -1
            }
        }
        check_x += -1
    }
    // 右方向
    check_x = x2 + 1
    while (check_x <= 4) {
        if (led.pointBrightness(check_x, y2) == another_light2) {
            while (check_x <= 4) {
                if (led.pointBrightness(check_x, y2) == light22) {
                    return 1
                }
                check_x += 1
            }
        }
        check_x += 1
    }
    // ななめ右下方向
    check_x = x2 + 1
    check_y = y2 + 1
    while (check_x <= 4 && check_y <= 4) {
        if (led.pointBrightness(check_x, check_y) == another_light2) {
            while (check_x <= 4 && check_y <= 4) {
                if (led.pointBrightness(check_x, check_y) == light22) {
                    return 1
                }
                check_x += 1
                check_y += 1
            }
        }
        check_x += 1
        check_y += 1
    }
    // ななめ右上方向
    check_x = x2 + 1
    check_y = y2 - 1
    while (check_x <= 4 && check_y >= 0) {
        if (led.pointBrightness(check_x, check_y) == another_light2) {
            while (check_x <= 4 && check_y >= 0) {
                if (led.pointBrightness(check_x, check_y) == light22) {
                    return 1
                }
                check_x += 1
                check_y += 0 - 1
            }
        }
        check_x += 1
        check_y += 0 - 1
    }
    // ななめ左下方向
    check_x = x2 - 1
    check_y = y2 - 1
    while (check_x >= 0 && check_y >= 0) {
        if (led.pointBrightness(check_x, check_y) == another_light2) {
            while (check_x >= 0 && check_y >= 0) {
                if (led.pointBrightness(check_x, check_y) == light22) {
                    return 1
                }
                check_x += 0 - 1
                check_y += 0 - 1
            }
        }
        check_x += 0 - 1
        check_y += 0 - 1
    }
    // ななめ左下方向
    check_x = x2 - 1
    check_y = y2 + 1
    while (check_x >= 0 && check_y <= 4) {
        if (led.pointBrightness(check_x, check_y) == another_light2) {
            while (check_x >= 0 && check_y <= 4) {
                if (led.pointBrightness(check_x, check_y) == light22) {
                    return 1
                }
                check_x += 0 - 1
                check_y += 1
            }
        }
        check_x += 0 - 1
        check_y += 1
    }
    return 0
}
input.onButtonPressed(Button.AB, function () {
    if (j % 2 == 1) {
        light222 = 255
        another_light22 = 50
    } else {
        light222 = 50
        another_light22 = 255
    }
    if (0 <= カウンターx && カウンターx <= 4 && (0 <= カウンターy && カウンターy <= 4)) {
        if (!(led.point(カウンターx, カウンターy))) {
            if (CheckTurn(カウンターx, カウンターy, light222, another_light22) == 1) {
                led.plotBrightness(カウンターx, カウンターy, light222)
                j += 1
            }
        }
    }
    カウンターx = -1
    カウンターy = -1
})
input.onButtonPressed(Button.B, function () {
    カウンターy += 1
})
let another_light22 = 0
let light222 = 0
let check_x = 0
let check_y = 0
let カウンターy = 0
let カウンターx = 0
let j = 0
led.plotBrightness(2, 2, 50)
led.plotBrightness(1, 1, 50)
led.plotBrightness(2, 1, 255)
led.plotBrightness(1, 2, 255)
j = 1
カウンターx = -1
カウンターy = -1
