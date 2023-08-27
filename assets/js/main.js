(function($) {
    "use strict";

        // modal video
        $(".order-video").modalVideo({channel:'youtube'});

         // tab js
         $('.tab-header').click(function() {
          const tabId = $(this).data('tab');
          $('.tab-header').removeClass('active');
          $(this).addClass('active');
          $('.tab-content').removeClass('active-tab').hide();
          $('#' + tabId).addClass('active-tab').show();
        });

        $('.tab-header[data-tab="tab1"]').click();
        
        // slider
        var swiper = new Swiper(".myswiper", {
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
        });
        

})($);