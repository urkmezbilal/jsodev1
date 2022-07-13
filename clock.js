let name = prompt("Adınızı Giriniz:")

let myName = document.querySelector("#myName")
myName.innerHTML = `
${myName.innerHTML} ${name}
`

function date(){
    let momentary = new Date()

    let saat = momentary.getHours()


    let dakika = momentary.getMinutes()

    let saniye = momentary.getSeconds()

    let d = new Date()
    
    let gunler = [ "Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

    let cekme = document.querySelector("#myClock")

    cekme.innerHTML = saat+":"+dakika+":"+saniye+" "+gunler[d.getDay()]
}

let actual = setInterval(date,100)



