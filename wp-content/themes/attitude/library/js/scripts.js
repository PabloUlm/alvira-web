jQuery( function() {
		// Enable menu toggle for small screens.
		( function() {
			var nav = jQuery( '#branding' ), button, menu;
			if ( ! nav ) {
				return;
			}

			button = nav.find( '.menu-toggle' );
			if ( ! button ) {
				return;
			}

			// Hide button if menu is missing or empty.
			menu = nav.find( '.root' );
			if ( ! menu || ! menu.children().length ) {
				button.hide();
				return;
			}

			jQuery( '.menu-toggle' ).on( 'click', function() {
				nav.toggleClass( 'toggled-on' );
			} );
		} )();
} );

openBlock = function (element) {
    parent = jQuery(element.closest('.read-more-block'));
	parent.toggleClass('open');
	var openerText = 'More';
    if (parent.hasClass('open')) {
    	if (jQuery(element).data('less')) {
            openerText = jQuery(element).data('less');
		} else {
            openerText = 'Less';
		}
	} else {
    	if (jQuery(element).data('more')) {
            openerText = jQuery(element).data('more');
		} else {
    		openerText = 'More'
		}
	}
    jQuery(element).text(openerText);
};