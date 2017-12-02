$(document).ready(function() {

	//menu_media
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$(".main-footer .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	//EqualHeights для выравнивания блоков
	$(".section-content .info-item").equalHeights();
	$(".s1_bottom .info-item").equalHeights();

	//Waypoint для последовательной анимации 
	$(".section_4").waypoint(function() {

		$(".section_4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});


	$(".section_5").waypoint(function() {

		$(".section_5 .tc-item").each(function(index) {
			var ths = $(this);
			setTimeout(function() {
				//svg animation прорисовывание
				var myAnimation = new DrawFillSVG({
					elementId: "tc-svg-" + index 
				});
				ths.removeClass("").addClass("");
			}, 700*index);
		});
		//svg animation works first time
		this.destroy();
	}, {
		offset : "20%"
	});


	//owl-slider
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "", 
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
