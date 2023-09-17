function Start () {
    index = 0
    for (let index2 = 0; index2 < 3; index2++) {
        index += 1
        basic.pause(200)
        basic.showNumber(index)
    }
    basic.showString("GO!")
}
input.onButtonPressed(Button.A, function () {
    Points = 0
    basic.showString("Sports")
    if (input.buttonIsPressed(Button.B)) {
        Start()
        Looping_1()
    } else {
        basic.showString("Food")
        if (input.buttonIsPressed(Button.B)) {
            Start()
            Looping_2()
        } else {
            basic.showString("Animals")
            if (input.buttonIsPressed(Button.B)) {
                Start()
                Looping_3()
            } else {
                basic.showString("Movies")
                if (input.buttonIsPressed(Button.B)) {
                    Start()
                    Looping_4()
                } else {
                    basic.showString("Incorrect Choice")
                }
            }
        }
    }
    basic.showNumber(Points)
})
function Looping_3 () {
    Animals_List = [
    "Dog",
    "Cat",
    "Raccoon",
    "Squirrel",
    "Tiger",
    "Hoarse",
    "Snake",
    "Mouse",
    "Frog",
    "Fish"
    ]
    for (let index2 = 0; index2 < 10; index2++) {
        basic.showString("" + (Animals_List._pickRandom()))
        basic.pause(count)
        Timer()
    }
}
function Looping_1 () {
    Sport_list = [
    "Hockey",
    "Basketball",
    "Volleyball",
    "Soccer",
    "Football",
    "Chess",
    "Tennis",
    "Archery",
    "Rugby",
    "Swimming"
    ]
    for (let index2 = 0; index2 < 10; index2++) {
        basic.showString("" + (Sport_list._pickRandom()))
        basic.pause(count)
        Timer()
    }
}
input.onGesture(Gesture.ScreenUp, function () {
    Points += 0
})
function Looping_2 () {
    Food_List = [
    "Pizza",
    "Pasta",
    "Sandwitch",
    "Tacos",
    "Apple",
    "Soup",
    "Chocolate",
    "Burger",
    "Banana",
    "Carrot"
    ]
    for (let index2 = 0; index2 < 10; index2++) {
        basic.showString("" + (Food_List._pickRandom()))
        basic.pause(count)
        Timer()
    }
}
input.onGesture(Gesture.ScreenDown, function () {
    Points += 1
})
function Looping_4 () {
    Movies_List = [
    "Harry Potter",
    "Beauty & Beast",
    "Little Mermaid",
    "Sleeping Beauty",
    "Frozen",
    "Mulan",
    "Aladin",
    "Moana",
    "Cinderella",
    "Brave"
    ]
    for (let index2 = 0; index2 < 10; index2++) {
        basic.showString("" + (Movies_List._pickRandom()))
        basic.pause(count)
        Timer()
    }
}
function Timer () {
    while (true) {
        count = 0
        count += 1
        basic.pause(1000)
        if (input.isGesture(Gesture.ScreenUp) || input.isGesture(Gesture.ScreenDown)) {
            break;
        } else {
            if (count == 60) {
                Points += -1
                break;
            } else {
                continue;
            }
        }
    }
}
let Movies_List: string[] = []
let Food_List: string[] = []
let Sport_list: string[] = []
let count = 0
let Animals_List: string[] = []
let Points = 0
let index = 0
basic.showString("Welcome!")
