input.onButtonPressed(Button.A, function () {
    count += 1
    LCD1IN8.DirectDrawRectangle(
    43,
    43,
    87,
    77,
    0,
    DRAW_FILL.DRAW_FULL,
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.DirectDisNumber(
    54,
    52,
    count,
    65535
    )
})
let count = 0
count = 0
LCD1IN8.LCD_ClearBuf(0)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(553)
LCD1IN8.DisString(
0,
0,
"It works!",
65535
)
LCD1IN8.LCD_Display()
basic.forever(function () {
	
})
