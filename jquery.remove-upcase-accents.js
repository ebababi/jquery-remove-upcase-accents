/*
 * jQuery Remove Uppercase Accents v1.0
 * http://github.com/ebababi/jquery-remove-upcase-accents/
 *
 * Automatically removes accented characters (currently greek) from elements
 * having their text content uppercase transformed through CSS.
 *
 * Copyright © 2012 Nikolaos Anastopoulos
 * All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function( jQuery ) {

jQuery.extend(jQuery.expr[":"], {
	uppercase: function( elem ) {
		var attr = jQuery( elem ).css( "text-transform" );
		return ( typeof attr !== "undefined" && attr === "uppercase" );
	}
});

jQuery.extend({
	removeAcc: function( elem ) {
		var text = elem.innerHTML;

		text = text.replace( /Ά/g, "Α" );
		text = text.replace( /ά/g, "α" );
		text = text.replace( /Έ/g, "ε" );
		text = text.replace( /έ/g, "ε" );
		text = text.replace( /Ή/g, "η" );
		text = text.replace( /ή/g, "η" );
		text = text.replace( /Ί/g, "ι" );
		text = text.replace( /Ϊ/g, "ι" );
		text = text.replace( /ί/g, "ι" );
		text = text.replace( /ϊ/g, "ι" );
		text = text.replace( /ΐ/g, "ι" );
		text = text.replace( /Ό/g, "ο" );
		text = text.replace( /ό/g, "ο" );
		text = text.replace( /Ύ/g, "υ" );
		text = text.replace( /Ϋ/g, "υ" );
		text = text.replace( /ύ/g, "υ" );
		text = text.replace( /ϋ/g, "υ" );
		text = text.replace( /ΰ/g, "υ" );
		text = text.replace( /Ώ/g, "ω" );
		text = text.replace( /ώ/g, "ω" );

		elem.innerHTML = text;
	}
});

jQuery.fn.extend({
	removeAcc: function() {
		return this.each(function() {
			jQuery.removeAcc( this );
		});
	}
});

})( jQuery );

jQuery( document ).ready(function($) {
	$(":uppercase").removeAcc();
	$(document).ajaxComplete(function( event, request, settings ) {
		$(":uppercase").removeAcc();
	});
});
