Temp = input.temperature()
LCD1IN8.LCD_ClearBuf(0)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(553)
LCD1IN8.dis_number(0, 0, Temp, LCD1IN8.LCD_Color(COLOR.GREEN))
LCD1IN8.direct_dis_string(0, 0, "   Celsius / ", LCD1IN8.LCD_Color(COLOR.GREEN))
LCD1IN8.dis_number(0, 0, input.light_level(), LCD1IN8.LCD_Color(COLOR.YELLOW))
LCD1IN8.direct_dis_string(0, 0, "   Light ", LCD1IN8.LCD_Color(COLOR.YELLOW))
LCD1IN8.LCD_Display()

def on_forever():
    if Temp < 24:
        basic.show_icon(IconNames.CONFUSED)
    elif Temp < 27:
        basic.show_icon(IconNames.HAPPY)
    elif Temp < 30:
        basic.show_icon(IconNames.SILLY)
    elif Temp < 33:
        basic.show_icon(IconNames.ASLEEP)
    else:
        basic.show_icon(IconNames.SKULL)
basic.forever(on_forever)
