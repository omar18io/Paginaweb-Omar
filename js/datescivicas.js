const MAIN_PATH = "http://localhost:3000/api/";
const date = new Date();
let currentDate = date.getFullYear()+"-"+(date.getMonth() + 1)+"-"+date.getDate(); // como nos lo traeria en mYsql año mes y dia
let currentDateFormatted = date.getDate() + "/" + (date.getMonth() + 1)+"/"+date.getFullYear(); // reseteado vcomo es aharo seraia dia/mes/año
let dates = fetch(
    MAIN_PATH + "dates/" + currentDate
).then(
    res => res.json()
).then(
    data => {
        console.log("Mostrando data : " + data)
        if (data != null) {
            document.getElementById('showDate').innerHTML = `
            <p style="text-align: center;">Hoy es ${currentDateFormatted} - ${data.NAMECAL} y ${data.DESCAL} </p>
            <br>
            <div class="center-container">
                <img src="${data.IMAGEN}" alt="">
            </div>
            <br>
            <br>
            `
            // document.getElementById('showDate').innerHTML = `<p style="text-align: center;">${data.DESCAL}</p>`
        } else {
            document.getElementById('showDate').innerHTML = `<p>Hoy Es ${currentDateFormatted}</p>`
        }
        document.getElementById('showDate').classList.add('animated-border');
    }
)
