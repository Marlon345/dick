input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Generate_Kex()
})
input.onButtonPressed(Button.A, function () {
    ui_counter += 1
    Limit_counter()
    basic.showString("" + (all_letters[ui_counter]))
})
function Limit_counter () {
    if (ui_counter == -1) {
        ui_counter = 25
    } else if (ui_counter == 26) {
        ui_counter = 0
    }
}
input.onButtonPressed(Button.AB, function () {
    lettr = all_letters[ui_counter]
    text_list.push(lettr)
    Text_in_ziffer.push(ui_counter + 1)
})
input.onButtonPressed(Button.B, function () {
    ui_counter += -1
    Limit_counter()
    basic.showString("" + (all_letters[ui_counter]))
})
function Generate_Kex () {
    for (let Wert of text_list) {
        Key.push(all_letters[randint(0, 25)])
    }
}
let lettr = ""
let all_letters: string[] = []
let Key: string[] = []
let text_list: string[] = []
let ui_counter = 0
let Text_in_ziffer: number[] = []
Text_in_ziffer = []
ui_counter = 0
text_list = []
Key = []
all_letters = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
basic.forever(function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
