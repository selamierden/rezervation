// YARIM BIRAKILAN PROJE



const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

container.addEventListener("click",function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected");
        calculateTotal();    
    }
});

select.addEventListener("change",function(e) {
    calculateTotal();
})

function calculateTotal() {
    const selectedSeats = container.querySelectorAll(".seat.selected");

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeatsArr.forEach(function(seat) {
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function(seat) {
        seatsArr.push(seat);
    });


    let selectedSeatIndeks = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    });

    console.log(selectedSeatIndeks);
    


    let selectedSeatCount = selectedSeats.length;
    amount.innerText = selectedSeatCount * select.value;
    count.innerText = selectedSeatCount;
}