def on_pin_pressed_p0():
    global j, カウンターx, カウンターy
    j += 1
    カウンターx = -1
    カウンターy = -1
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    global カウンターx
    カウンターx += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def CheckTurn(x: number, y: number, light2: number, another_light: number):
    global check_y, check_x
    # 上方向
    check_y = y - 1
    while check_y >= 0:
        if not (led.point(x, check_y)):
            break
        elif led.point_brightness(x, check_y) == another_light:
            while check_y >= 0:
                if not (led.point(x, check_y)):
                    break
                elif led.point_brightness(x, check_y) == light2:
                    return 1
                else:
                    check_y += -1
        else:
            check_y += -1
    # 下方向
    check_y = y + 1
    while check_y <= 4:
        if not (led.point(x, check_y)):
            break
        elif led.point_brightness(x, check_y) == another_light:
            while check_y <= 4:
                if not (led.point(x, check_y)):
                    break
                elif led.point_brightness(x, check_y) == light2:
                    return 1
                else:
                    check_y += 1
        else:
            check_y += 1
    # 左方向
    check_x = x - 1
    while check_x >= 0:
        if not (led.point(check_x, y)):
            break
        elif led.point_brightness(check_x, y) == another_light:
            while check_x >= 0:
                if not (led.point(check_x, y)):
                    break
                elif led.point_brightness(check_x, y) == light2:
                    return 1
                else:
                    check_x += -1
        else:
            check_x += -1
    # 右方向
    check_x = x + 1
    while check_x <= 4:
        if not (led.point(check_x, y)):
            break
        elif led.point_brightness(check_x, y) == another_light:
            while check_x <= 4:
                if not (led.point(check_x, y)):
                    break
                elif led.point_brightness(check_x, y) == light2:
                    return 1
                else:
                    check_x += 1
        else:
            check_x += 1
    # ななめ右下方向
    check_x = x + 1
    check_y = y + 1
    while check_x <= 4 and check_y <= 4:
        if not (led.point(check_x, check_y)):
            break
        elif led.point_brightness(check_x, check_y) == another_light:
            while check_x <= 4 and check_y <= 4:
                if not (led.point(check_x, check_y)):
                    break
                elif led.point_brightness(check_x, check_y) == light2:
                    return 1
                else:
                    check_x += 1
                    check_y += 1
        else:
            check_x += 1
            check_y += 1
    # ななめ右上方向
    check_x = x + 1
    check_y = y - 1
    while check_x <= 4 and check_y >= 0:
        if not (led.point(check_x, check_y)):
            break
        elif led.point_brightness(check_x, check_y) == another_light:
            while check_x <= 4 and check_y >= 0:
                if not (led.point(check_x, check_y)):
                    break
                elif led.point_brightness(check_x, check_y) == light2:
                    return 1
                else:
                    check_x += 1
                    check_y += 0 - 1
        else:
            check_x += 1
            check_y += 0 - 1
    # ななめ左上方向
    check_x = x - 1
    check_y = y - 1
    while check_x >= 0 and check_y >= 0:
        if not (led.point(check_x, check_y)):
            break
        elif led.point_brightness(check_x, check_y) == another_light:
            while check_x >= 0 and check_y >= 0:
                if not (led.point(check_x, check_y)):
                    break
                elif led.point_brightness(check_x, check_y) == light2:
                    return 1
                else:
                    check_x += 0 - 1
                    check_y += 0 - 1
        else:
            check_x += 0 - 1
            check_y += 0 - 1
    # ななめ左下方向
    check_x = x - 1
    check_y = y + 1
    while check_x >= 0 and check_y <= 4:
        if not (led.point(check_x, check_y)):
            break
        elif led.point_brightness(check_x, check_y) == another_light:
            while check_x >= 0 and check_y <= 4:
                if not (led.point(check_x, check_y)):
                    break
                elif led.point_brightness(check_x, check_y) == light2:
                    return 1
                else:
                    check_x += 0 - 1
                    check_y += 1
        else:
            check_x += 0 - 1
            check_y += 1
    return 0
def Turn(x2: number, y2: number, light22: number, another_light2: number):
    global check_y, check_x
    # 上方向
    check_y = y2 - 1
    while check_y >= 0:
        if led.point_brightness(x2, check_y) == another_light2:
            while check_y >= 0:
                if led.point_brightness(x2, check_y) == light22:
                    i = 0
                    while i <= y2 - check_y - 1:
                        led.plot_brightness(x2, y2 - i - 1, light22)
                        i += 1
                check_y += -1
        check_y += -1
    # 下方向
    check_y = y2 + 1
    while check_y <= 4:
        if led.point_brightness(x2, check_y) == another_light2:
            while check_y <= 4:
                if led.point_brightness(x2, check_y) == light22:
                    i = 0
                    while i <= check_y - y2 - 1:
                        led.plot_brightness(x2, y2 - i + 1, light22)
                        i += 1
                check_y += 1
        check_y += 1
    # 左方向
    check_x = x2 - 1
    while check_x >= 0:
        if not (led.point(check_x, y2)) or led.point_brightness(check_x, y2) == light22:
            break
        elif led.point_brightness(check_x, y2) == another_light2:
            while check_x >= 0:
                if led.point_brightness(check_x, y2) == light22:
                    i = 0
                    while i <= x2 - check_x - 1:
                        led.plot_brightness(x2 - i - 1, y2, light22)
                        i += 1
                elif led.point_brightness(check_x, y2) == another_light2:
                    check_x += -1
                else:
                    break
        else:
            check_x += -1
    # 右方向
    check_x = x2 + 1
    while check_x <= 4:
        if led.point_brightness(check_x, y2) == another_light2:
            while check_x <= 4:
                if led.point_brightness(check_x, y2) == light22:
                    i = 0
                    while i <= check_x - x2 - 1:
                        led.plot_brightness(x2 - i + 1, y2, light22)
                        i += 1
                check_x += 1
        check_x += 1
    # ななめ右下方向
    check_x = x2 + 1
    check_y = y2 + 1
    while check_x <= 4 and check_y <= 4:
        if led.point_brightness(check_x, check_y) == another_light2:
            while check_x <= 4 and check_y <= 4:
                if led.point_brightness(check_x, check_y) == light22:
                    i = 0
                    while i <= check_x - x2 - 1 and i <= check_y - y2 - 1:
                        led.plot_brightness(x2 - i + 1, y2 - i + 1, light22)
                        i += 1
                check_x += 1
                check_y += 1
        check_x += 1
        check_y += 1
    # ななめ右上方向
    check_x = x2 + 1
    check_y = y2 - 1
    while check_x <= 4 and check_y >= 0:
        if led.point_brightness(check_x, check_y) == another_light2:
            while check_x <= 4 and check_y >= 0:
                if led.point_brightness(check_x, check_y) == light22:
                    i = 0
                    while i <= check_x - x2 - 1 and i <= y2 - check_y - 1:
                        led.plot_brightness(x2 - i + 1, y2 - i - 1, light22)
                        i += 1
                check_x += 1
                check_y += -1
        check_x += 1
        check_y += -1
    # ななめ左下方向
    check_x = x2 - 1
    check_y = y2 - 1
    while check_x >= 0 and check_y >= 0:
        if led.point_brightness(check_x, check_y) == another_light2:
            while check_x >= 0 and check_y >= 0:
                if led.point_brightness(check_x, check_y) == light22:
                    return 1
                check_x += -1
                check_y += -1
        check_x += 0 - 1
        check_y += 0 - 1
    # ななめ左下方向
    check_x = x2 - 1
    check_y = y2 + 1
    while check_x >= 0 and check_y <= 4:
        if led.point_brightness(check_x, check_y) == another_light2:
            while check_x >= 0 and check_y <= 4:
                if led.point_brightness(check_x, check_y) == light22:
                    return 1
                check_x += -1
                check_y += 1
        check_x += -1
        check_y += 1
    return 0

def on_button_pressed_ab():
    global light222, another_light22, j, カウンターx, カウンターy
    if j % 2 == 1:
        light222 = 255
        another_light22 = 50
    else:
        light222 = 50
        another_light22 = 255
    if 0 <= カウンターx and カウンターx <= 4 and (0 <= カウンターy and カウンターy <= 4):
        if not (led.point(カウンターx, カウンターy)):
            if CheckTurn(カウンターx, カウンターy, light222, another_light22) == 1:
                led.plot_brightness(カウンターx, カウンターy, light222)
                basic.pause(500)
                Turn(カウンターx, カウンターy, light222, another_light22)
                j += 1
    カウンターx = -1
    カウンターy = -1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global カウンターy
    カウンターy += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

another_light22 = 0
light222 = 0
check_x = 0
check_y = 0
カウンターy = 0
カウンターx = 0
j = 0
led.plot_brightness(2, 2, 50)
led.plot_brightness(1, 1, 50)
led.plot_brightness(2, 1, 255)
led.plot_brightness(1, 2, 255)
j = 1
カウンターx = -1
カウンターy = -1