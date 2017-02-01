$(function(){

  //Handles ADD buttons
  ['hotel', 'restaurant', 'activity'].forEach((ele) => {
    $(`button[data-type="${ele}"]`).click(function(event) {
      let choice = $(`#${ele}-choices`)[0].selectedIndex;
      let choiceText = $(`#${ele}-choices option`)[choice].textContent;
      let listTarget = $(`.list-group[data-type = "${ele}List"]`);
      //adjust logic for including multiple activities per day
      if (!listTarget.children().length){
        let elementToAdd = `<div class="itinerary-item"><span class="title">${choiceText}</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>`;
        listTarget.append(elementToAdd);
      } else {
        alert(`You have already booked a/an ${ele} for this day. (delete your choice of hotel to add a new one)`);
      }
    });
  });

  //remove items from itinerary
  $( "#itinerary" ).on( "click", ".remove", function( event ) {
    $(this).parent().remove();
  });

  //add new days to itinerary
  $('#day-add').on( 'click', function(){
    let dayNumber = $('.day-buttons').children().length;
    $(`<button class="btn btn-circle day-btn">${dayNumber}</button>`).insertBefore($(this));
  });

  //change current day
  $('body').on('click', '.day-btn',function(){
    $('.current-day').removeClass('current-day');
    $(this).addClass('current-day')
  });
});
