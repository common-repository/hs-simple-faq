/*
Custom js for accordion
 */
jQuery(function() {
    var icons = {
      header: "ui-icon-plus",
      activeHeader: "ui-icon-minus"
    };
    jQuery( ".hs-faq-accordion" ).accordion({
        icons: false,
	    collapsible: true,
		active: false,
		heightStyle: "content"
    });
   jQuery( "#toggle" ).button().click(function() {
      if ( jQuery( ".hs-faq-accordion" ).accordion( "option", "icons" ) ) {
        jQuery( ".hs-faq-accordion" ).accordion( "option", "icons", null );
      } else {
        jQuery( ".hs-faq-accordion" ).accordion( "option", "icons", icons );
      }
    });
  });