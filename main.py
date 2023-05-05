def on_button_pressed_a():
    global count
    count += 1
    LCD1IN8.direct_draw_rectangle(43,
        43,
        87,
        77,
        0,
        DRAW_FILL.DRAW_FULL,
        DOT_PIXEL.DOT_PIXEL_1)
    LCD1IN8.direct_dis_number(54, 52, count, 65535)
input.on_button_pressed(Button.A, on_button_pressed_a)

count = 0
count = 0
LCD1IN8.LCD_ClearBuf(0)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(553)
LCD1IN8.dis_string(0, 0, "It works!", 65535)
LCD1IN8.LCD_Display()

def on_forever():
    pass
basic.forever(on_forever)
