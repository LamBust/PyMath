let para = document.querySelector("p")
let anses = document.querySelector("select")
let btn = document.querySelector(".button1")
let mistake = document.querySelector(".warning")
let o1 = document.querySelector(".fs")
let o2 = document.querySelector(".sn")
let o3 = document.querySelector(".td")
let o4 = document.querySelector(".ft")
let anss = document.querySelector("ol")

var answered = 0

para.textContent = "Что возвращает функция math.sqrt(x)?"
o1.textContent = "Квадрат числа"
o2.textContent = "Кубический корень"
o3.textContent = "Квадратный корень числа"
o4.textContent = "Модуль числа"

function ans(){
    let chosen = anses.value
    if (chosen == "n"){
        mistake.textContent = "Выберите ответ"
        return
    }
    else if (answered == 0 & chosen == 3){
        mistake.textContent = "Верный ответ"
        ++answered
        para.textContent = "Какое значение вернёт math.pi?"
        o1.textContent = "3"
        o2.textContent = "3.14"
        o3.textContent = "Точное значение π"
        o4.textContent = "Приближённое значение π"
    }
    else if (answered == 1 & chosen == 4){
        mistake.textContent = "Верный ответ"
        ++answered
        para.textContent = "Что делает функция math.floor(4.9)?"
        o1.textContent = "Округляет до ближайшего целого"
        o2.textContent = "Округляет вверх"
        o3.textContent = "Возвращает 4.9"
        o4.textContent = "Округляет вниз до 4"
    }
    else if (answered == 2 & chosen == 4){
        mistake.textContent = "Верный ответ"
        ++answered
        para.textContent = ("Вопросов больше нет!")
        anss.remove()
    }
    else if (answered != 3){
        mistake.textContent = "Вы ответили неверно, попробуйте ещё раз"
    }
}

btn.addEventListener("click", ans);