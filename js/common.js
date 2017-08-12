$(function () {

    $(document).ready(function () {
        $('.image-link').magnificPopup({type: 'image'});
    });
    $("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "../mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Thanks! oceanfuturestudio test work");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
});