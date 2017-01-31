$(function(){

$('button[data-type="hotel"]').click(function(event) {
        console.log('clicky!!!')
        let choice = $('#hotel-choices')[0].selectedIndex;
        let choiceText = $('#hotel-choices option')[choice].textContent
        console.log (typeof choiceText)
        let listTarget = $('.list-group[data-type = "hotelList"]')
        let elementToAdd =  `<div class="itinerary-item"><span class="title">${choiceText}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>`
        listTarget.append(elementToAdd)

      })

})
