$(document).ready(function() {
  $('.change-devoured').on('click', function(event) {
    event.preventDefault();
    console.log('test');
    var id = parseInt($(this).data('id'));
    var newDevoured = $(this).data('newdevoured');
    console.log('original devoured: ' + newDevoured);
    if (newDevoured === true) {
      newDevoured = false;
    } else {
      newDevoured = true;
    }
    var newDevouredState = {
      devoured: newDevoured,
    };
    console.log('new: ' + newDevoured);

    // Send the PUT request.
    $.ajax({
      url: '/api/burgers/' + id,
      type: 'PUT',
      data: newDevouredState,
    }).then(function(data) {
      console.log(data);
      console.log('changed devoured to', newDevoured);
      $(this).attr('data-newdevoured', newDevouredState.devoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $('.create-form').on('submit', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $('#burger_name')
        .val()
        .trim(),
    };

    // Send the POST request.
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then(function() {
      console.log('created new burger');
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
