$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		arrows: false,
		infinite: false
	});

	$('.message').on('click', function(){
		alert('Вы написали (условно)');
	});

	$('.description-container span').on('click', function(){
		if ($('.description-container span').data('expand')) {
			$('.description-container span').data('expand', false);
			$('.description').css('max-height', '100px');
			$('.description-container span').html('показать полностью');
		} else {
			$('.description-container span').data('expand', true);
			$('.description').css('max-height', 'none');
			$('.description-container span').html('скрыть');
		}
	});

	var idPage = $('#idPage').val();
	var favourites = [];

	if (localStorage.getItem('favourites') !== null) {
		favourites = JSON.parse(localStorage['favourites']);
	} else {
		localStorage.setItem('favourites', JSON.stringify(favourites));
	}

	if (favourites.indexOf(idPage) !== -1) {
		$('.favourites').data('favourites', true);
		$('.favourites').css('color', '#ef0000');
	}

	$('.favourites').on('click', function(){
		if ($('.favourites').data('favourites')) {
			$('.favourites').data('favourites', false);
			$('.favourites').css('color', '#007bff');
			favourites.splice(favourites.indexOf(idPage), 1);
			localStorage['favourites'] = JSON.stringify(favourites);
		} else {
			$('.favourites').data('favourites', true);
			$('.favourites').css('color', '#ef0000');
			favourites.push(idPage);
			localStorage['favourites'] = JSON.stringify(favourites);
		}
	});

});