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
"   Celsius",
LCD1IN8.LCD_Color(COLOR.GREEN)
)
LCD1IN8.DisNumber(
0,
20,
input.lightLevel(),
LCD1IN8.LCD_Color(COLOR.YELLOW)
)
LCD1IN8.DirectDisString(
0,
20,
"   Light ",
LCD1IN8.LCD_Color(COLOR.YELLOW)
)
LCD1IN8.DisNumber(
0,
40,
input.soundLevel(),
LCD1IN8.LCD_Color(COLOR.RED)
)
LCD1IN8.DirectDisString(
0,
40,
"   Sound ",
LCD1IN8.LCD_Color(COLOR.RED)
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
