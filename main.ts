input.onPinPressed(TouchPin.P0, function () {
    カウンター += 1
    カウンターx = -1
    カウンターy = -1
})
function PutCheck (x: number, y: number, l: number, a_l: number) {
    // 上方向
    check_y = y - 1
    while (check_y >= 0) {
        if (led.pointBrightness(x, check_y) == a_l) {
            while (check_y >= 0) {
                if (!(led.point(x, check_y))) {
                    break;
                } else if (led.pointBrightness(x, check_y) == l) {
                    return 1
                } else {
                    check_y += -1
                }
            }
        } else {
            break;
        }
    }
    // 下方向
    check_y = y + 1
    while (check_y <= 4) {
        if (led.pointBrightness(x, check_y) == a_l) {
            while (check_y <= 4) {
                if (!(led.point(x, check_y))) {
                    break;
                } else if (led.pointBrightness(x, check_y) == l) {
                    return 1
                } else {
                    check_y += 1
                }
            }
        } else {
            break;
        }
    }
    // 左方向
    check_x = x - 1
    while (check_x >= 0) {
        if (led.pointBrightness(check_x, y) == a_l) {
            while (check_x >= 0) {
                if (!(led.point(check_x, y))) {
                    break;
                } else if (led.pointBrightness(check_x, y) == l) {
                    return 1
                } else {
                    check_x += -1
                }
            }
        } else {
            break;
        }
    }
    // 右方向
    check_x = x + 1
    while (check_x <= 4) {
        if (led.pointBrightness(check_x, y) == a_l) {
            while (check_x <= 4) {
                if (!(led.point(check_x, y))) {
                    break;
                } else if (led.pointBrightness(check_x, y) == l) {
                    return 1
                } else {
                    check_x += 1
                }
            }
        } else {
            break;
        }
    }
    // ななめ右下方向
    check_x = x + 1
    check_y = y + 1
    while (check_x <= 4 && check_y <= 4) {
        if (led.pointBrightness(check_x, check_y) == a_l) {
            while (check_x <= 4 && check_y <= 4) {
                if (!(led.point(check_x, check_y))) {
                    break;
                } else if (led.pointBrightness(check_x, check_y) == l) {
                    return 1
                } else {
                    check_x += 1
                    check_y += 1
                }
            }
        } else {
            break;
        }
    }
    // ななめ右上方向
    check_x = x + 1
    check_y = y - 1
    while (check_x <= 4 && check_y >= 0) {
        if (led.pointBrightness(check_x, check_y) == a_l) {
            while (check_x <= 4 && check_y >= 0) {
                if (!(led.point(check_x, check_y))) {
                    break;
                } else if (led.pointBrightness(check_x, check_y) == l) {
                    return 1
                } else {
                    check_x += 1
                    check_y += 0 - 1
                }
            }
        } else {
            break;
        }
    }
    // ななめ左上方向
    check_x = x - 1
    check_y = y - 1
    while (check_x >= 0 && check_y >= 0) {
        if (led.pointBrightness(check_x, check_y) == a_l) {
            while (check_x >= 0 && check_y >= 0) {
                if (!(led.point(check_x, check_y))) {
                    break;
                } else if (led.pointBrightness(check_x, check_y) == l) {
                    return 1
                } else {
                    check_x += 0 - 1
                    check_y += 0 - 1
                }
            }
        } else {
            break;
        }
    }
    // ななめ左下方向
    check_x = x - 1
    check_y = y + 1
    while (check_x >= 0 && check_y <= 4) {
        if (led.pointBrightness(check_x, check_y) == a_l) {
            while (check_x >= 0 && check_y <= 4) {
                if (!(led.point(check_x, check_y))) {
                    break;
                } else if (led.pointBrightness(check_x, check_y) == l) {
                    return 1
                } else {
                    check_x += 0 - 1
                    check_y += 1
                }
            }
        } else {
            break;
        }
    }
    return 0
}
input.onButtonPressed(Button.A, function () {
    カウンターx += 1
})
function Turn (x2: number, y2: number, li: number, a_li: number) {
    let i: number;
// 上方向
    check_y = y2 - 1
    while (check_y >= 0) {
        if (led.pointBrightness(x2, check_y) == a_li) {
            while (check_y >= 0) {
                if (led.pointBrightness(x2, check_y) == li) {
                    i = 1
                    while (i <= y2 - check_y - 1) {
                        led.plotBrightness(x2, y2 - i, li)
                        i += 1
                    }
                    break;
                } else if (!(led.point(x2, check_y))) {
                    break;
                } else {
                    check_y += -1
                    continue;
                }
            }
            break;
        } else {
            break;
        }
        check_y += -1
    }
    // 下方向
    check_y = y2 + 1
    while (check_y <= 4) {
        if (led.pointBrightness(x2, check_y) == a_li) {
            while (check_y <= 4) {
                if (led.pointBrightness(x2, check_y) == li) {
                    i = 1
                    while (i <= check_y - y2 - 1) {
                        led.plotBrightness(x2, y2 + i, li)
                        i += 1
                    }
                    break;
                } else if (!(led.point(x2, check_y))) {
                    break;
                } else {
                    check_y += 1
                    continue;
                }
            }
            break;
        } else {
            break;
        }
        check_y += 1
    }
    // 左方向
    check_x = x2 - 1
    while (check_x >= 0) {
        if (!(led.point(check_x, y2)) || led.pointBrightness(check_x, y2) == li) {
            break;
        } else if (led.pointBrightness(check_x, y2) == a_li) {
            while (check_x >= 0) {
                if (led.pointBrightness(check_x, y2) == li) {
                    i = 1
                    while (i <= x2 - check_x - 1) {
                        led.plotBrightness(x2 - i, y2, li)
                        i += 1
                    }
                    break;
                } else if (!(led.point(check_x, y2))) {
                    break;
                } else {
                    check_x += -1
                    continue;
                }
            }
            break;
        } else {
            break;
        }
        check_x += -1
    }
    // 右方向
    check_x = x2 + 1
    while (check_x <= 4) {
        if (led.pointBrightness(check_x, y2) == a_li) {
            while (check_x <= 4) {
                if (led.pointBrightness(check_x, y2) == li) {
                    i = 1
                    while (i <= check_x - x2 - 1) {
                        led.plotBrightness(x2 + i, y2, li)
                        i += 1
                    }
                    break;
                } else if (!(led.point(check_x, y2))) {
                    break;
                } else {
                    check_x += 1
                    continue;
                }
            }
            break;
        } else {
            break;
        }
        check_x += 1
    }
    // ななめ右下方向
    check_x = x2 + 1
    check_y = y2 + 1
    while (check_x <= 4 && check_y <= 4) {
        if (led.pointBrightness(check_x, check_y) == a_li) {
            while (check_x <= 4 && check_y <= 4) {
                if (led.pointBrightness(check_x, check_y) == li) {
                    i = 1
                    while (i <= check_x - x2 - 1 && i <= check_y - y2 - 1) {
                        led.plotBrightness(x2 + i, y2 + i, li)
                        i += 1
                    }
                    break;
                } else if (!(led.point(check_x, check_y))) {
                    break;
                } else {
                    check_x += 1
                    check_y += 1
                    continue;
                }
            }
            break;
        } else {
            break;
        }
        check_x += 1
        check_y += 1
    }
    // ななめ右上方向
    check_x = x2 + 1
    check_y = y2 - 1
    while (check_x <= 4 && check_y >= 0) {
        if (led.pointBrightness(check_x, check_y) == a_li) {
            while (check_x <= 4 && check_y >= 0) {
                if (led.pointBrightness(check_x, check_y) == li) {
                    i = 1
                    while (i <= check_x - x2 - 1 && i <= y2 - check_y - 1) {
                        led.plotBrightness(x2 + i, y2 - i, li)
                        i += 1
                    }
                    break;
                } else if (!(led.point(check_x, check_y))) {
                    break;
                } else {
                    check_x += 1
                    check_y += -1
                    continue;
                }
            }
            break;
        } else {
            break;
        }
        check_x += 1
        check_y += -1
    }
    // ななめ左下方向
    check_x = x2 - 1
    check_y = y2 + 1
    while (check_x >= 0 && check_y <= 4) {
        if (led.pointBrightness(check_x, check_y) == a_li) {
            while (check_x >= 0 && check_y <= 4) {
                if (led.pointBrightness(check_x, check_y) == li) {
                    i = 1
                    while (i <= x2 - check_x - 1 && i <= check_y - y2 - 1) {
                        led.plotBrightness(x2 - i, y2 + i, li)
                        i += 1
                    }
                    break;
                } else if (!(led.point(check_x, check_y))) {
                    break;
                } else {
                    check_x += -1
                    check_y += 1
                    continue;
                }
            }
            break;
        } else {
            break;
        }
        check_x += -1
        check_y += 1
    }
    // ななめ左上方向
    check_x = x2 - 1
    check_y = y2 - 1
    while (check_x >= 0 && check_y >= 0) {
        if (led.pointBrightness(check_x, check_y) == a_li) {
            while (check_x >= 0 && check_y >= 0) {
                if (led.pointBrightness(check_x, check_y) == li) {
                    i = 1
                    while (i <= x2 - check_x - 1 && i <= y2 - check_y - 1) {
                        led.plotBrightness(x2 - i, y2 - i, li)
                        i += 1
                    }
                    break;
                } else if (!(led.point(check_x, check_y))) {
                    break;
                } else {
                    check_x += -1
                    check_y += -1
                    continue;
                }
            }
            break;
        } else {
            break;
        }
        check_x += -1
        check_y += -1
    }
    return 0
}
input.onButtonPressed(Button.AB, function () {
    if (カウンター % 2 == 1) {
        light2 = 255
        another_light = 50
    } else {
        light2 = 50
        another_light = 255
    }
    if (0 <= カウンターx && カウンターx <= 4 && (0 <= カウンターy && カウンターy <= 4)) {
        if (!(led.point(カウンターx, カウンターy))) {
            if (PutCheck(カウンターx, カウンターy, light2, another_light) == 1) {
                led.plotBrightness(カウンターx, カウンターy, light2)
                put += 1
                basic.pause(500)
                Turn(カウンターx, カウンターy, light2, another_light)
                カウンター += 1
                if (put == 21) {
                    player1 = 0
                    for (let index = 0; index <= 4; index++) {
                        for (let index2 = 0; index2 <= 4; index2++) {
                            if (led.pointBrightness(index, index2) == 255) {
                                player1 += 1
                            }
                        }
                    }
                    basic.pause(500)
                    if (player1 >= 13) {
                        basic.showString("Player1 win!")
                    } else {
                        basic.showString("Player2 win!")
                    }
                }
            }
        }
    }
    カウンターx = -1
    カウンターy = -1
})
input.onButtonPressed(Button.B, function () {
    カウンターy += 1
})
input.onPinPressed(TouchPin.P1, function () {
    player1 = 0
    player2 = 0
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            if (led.pointBrightness(index, index2) == 255) {
                player1 += 1
            } else if (led.pointBrightness(index, index2) == 50) {
                player2 += 1
            } else {
                continue;
            }
        }
    }
    if (player1 > player2) {
        basic.showString("Player1 win!")
    } else if (player1 < player2) {
        basic.showString("Player2 win!")
    } else {
        basic.showString("Draw!")
    }
})
let player2 = 0
let player1 = 0
let another_light = 0
let light2 = 0
let check_x = 0
let check_y = 0
let put = 0
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
put = 0
