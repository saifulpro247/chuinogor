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
      

})($);