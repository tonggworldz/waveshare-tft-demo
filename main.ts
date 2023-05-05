let Temp = input.temperature()
LCD1IN8.LCD_ClearBuf(0)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(553)
LCD1IN8.DisNumber(
0,
0,
Temp,
LCD1IN8.LCD_Color(COLOR.GREEN)
)
LCD1IN8.DirectDisString(
0,
0,
"   °C",
LCD1IN8.LCD_Color(COLOR.GREEN)
)
LCD1IN8.LCD_Display()
basic.forever(function () {
    if (Temp < 24) {
        basic.showIcon(IconNames.Confused)
    } else if (Temp < 27) {
        basic.showIcon(IconNames.Happy)
    } else if (Temp < 30) {
        basic.showIcon(IconNames.Silly)
    } else if (Temp < 33) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
