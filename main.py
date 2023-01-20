def on_pin_pressed_p0():
    global カウンター, カウンターx, カウンターy
    カウンター += 1
    カウンターx = -1
    カウンターy = -1
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    global カウンターx
    カウンターx += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def CheckTurn(x: number, y: number, light2: number, another_light: number):
    
        return 1

def on_button_pressed_ab():
    global light22, another_light2, カウンター, カウンターx, カウンターy
    if カウンター % 2 == 1:
        light22 = 255
        another_light2 = 50
    else:
        light22 = 50
        another_light2 = 255
    if 0 <= カウンターx and カウンターx <= 4 and (0 <= カウンターy and カウンターy <= 4):
        if not (led.point(カウンターx, カウンターy)):
            if CheckTurn(カウンターx, カウンターy, light22, another_light2) == 1:
                led.plot_brightness(カウンターx, カウンターy, light22)
                カウンター += 1
    カウンターx = -1
    カウンターy = -1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global カウンターy
    カウンターy += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

another_light2 = 0
light22 = 0
カウンターy = 0
カウンターx = 0
カウンター = 0
led.plot_brightness(2, 2, 50)
led.plot_brightness(1, 1, 50)
led.plot_brightness(2, 1, 255)
led.plot_brightness(1, 2, 255)
カウンター = 1
カウンターx = -1
カウンターy = -1