$(document).ready(function(){var o={isModalShow:!1,scrollPos:0},s=window.innerWidth-$(document).width(),i=function(){$(".modal-layer").hasClass("modal-layer-show")||($(".modal-layer").addClass("modal-layer-show"),o.scrollPos=$(window).scrollTop(),$("body").css({overflowY:"hidden",top:-o.scrollPos,width:"100%",paddingRight:s})),o.isModalShow=!0},l=function(){$(".modal-layer").removeClass("modal-layer-show"),$("body").css({overflow:"",position:"",top:o.scrollPos,paddingRight:0}),$(window).scrollTop(o.scrollPos),$(".modal").addClass("modal-hide-animation"),setTimeout(function(){$(".modal").removeClass("modal-hide-animation"),$(".modal").removeClass("modal__show")},600),o.isModalShow=!1},e=function(o){i(),$(".modal").each(function(){$(this).data("modal")===o?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var s=$(window).height();$(".modal-filter").height(s)};$(".modal-get").click(function(){var o=$(this).data("modal");e(o)}),$(".modal-close, .modal-hide").click(function(){l()}),$(".modal-wrap").click(function(o){"modal-wrap"===o.target.className&&l()});var a=250,t=$(".toolbar--header"),d=t.height();$(window).scroll(function(){var o=$(this).scrollTop();o>=a?($("body").css("paddingTop",d),t.addClass("shrink")):($("body").css("paddingTop",0),t.removeClass("shrink"))});var n;(n=function(){$("body").on("click",".js-tick",function(){var o=$(this).closest(".js-tick-cont");o.find(".js-tick").removeClass("active"),$(this).addClass("active")})})();var c;(c=function(){$("body").on("click",".js-tab",function(){var o=$(this).index(),s=$(this).closest(".js-tab-wrap");s.find(".js-tab-cont").removeClass("active"),s.find(".js-tab-cont").eq(o).addClass("active")})})(),$(".dropdown").click(function(){$(this).attr("tabindex",1).focus(),$(this).toggleClass("active"),$(this).find(".dropdown-menu").slideToggle(300)}),$(".dropdown").focusout(function(){$(this).removeClass("active"),$(this).find(".dropdown-menu").slideUp(300)}),$(".dropdown .dropdown-menu__el").click(function(){var o=$(this).parents(".dropdown");o.find(".dropdown-current__val").html($(this).html()),o.find("input").attr("value",$(this).data("value"))});var r=$(document).width()<769?100:58;$("a[rel='m_PageScroll2id']").mPageScroll2id({offset:r,highlightClass:"nav__el--active",onComplete:function(){$(".slide-block").removeClass("slide-block--open"),$(".head-toggle").removeClass("slide-block-toggle--open")}}),$(".slider-card").slick({slidesToShow:1,speed:500,dots:!0,arrows:!1,rows:0,adaptiveHeight:!0,customPaging:function(o,s){return'<span class="dot"></span>'}}),$(".gallery-slider").each(function(){$(this).slick({slidesToShow:1,speed:500,dots:!1,arrows:!1,asNavFor:".gallery-slider-nav",draggable:!1});var o=$(this),s=$(this).closest(".card-img").find(".gallery-slider-nav");s.slick({slidesToShow:3,speed:500,dots:!1,arrows:!1,rows:0,asNavFor:o,focusOnSelect:!0})}),$(".slider-review").slick({slidesToShow:1,speed:500,dots:!0,arrows:!1,focusOnSelect:!0,adaptiveHeight:!0,customPaging:function(o,s){return'<span class="dot"></span>'}}),$(".slider-partner").slick({slidesToShow:5,speed:500,dots:!0,arrows:!1,customPaging:function(o,s){return'<span class="dot"></span>'},responsive:[{breakpoint:800,settings:{arrows:!1,centerMode:!0,slidesToShow:3,slidesToScroll:3,dots:!1}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:1}}]}),$(".slider-control--right").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickNext")}),$(".slider-control--left").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickPrev")}),$(".fancybox").fancybox(),$(".js-slide-block-toggle").click(function(o){$(".js-slide-block-toggle").not(this).removeClass("slide-block-toggle--open");var s=$(this).data("menu");$(".slide-block").each(function(){$(this).data("menu")===s?$(this).toggleClass("slide-block--open"):$(this).removeClass("slide-block--open")}),$(this).toggleClass("slide-block-toggle--open")})});