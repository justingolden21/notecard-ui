$( ()=> {
	$('.card-header').click( (evt)=> {
		if(evt.target.tagName!='BUTTON')
			$(evt.target).find('.btn').click();
	});

	$('.collapse.show').parent().find('.card-header').addClass('open');

	$('.card-header .btn').click( (evt)=> {
		let has = $(evt.target).parent().parent().hasClass('open');
		$('.card-header').removeClass('open');
		if(has)
			$(evt.target).parent().parent().removeClass('open');
		else
			$(evt.target).parent().parent().addClass('open');
	});

	$('.carousel').carousel('pause');


// https://stackoverflow.com/a/35992958/4907950
	$('.collapse').on('show.bs.collapse', function(e) {
		let $card = $(this).closest('.card');
		let $open = $($(this).data('parent') ).find('.collapse.show');
		let additionalOffset = 0;
		if($card.prevAll().filter($open.closest('.card') ).length !== 0) {
			additionalOffset =  $open.height();
		}
		$('html,body').prop('scrollTop', $card.offset().top - additionalOffset);
	});
});