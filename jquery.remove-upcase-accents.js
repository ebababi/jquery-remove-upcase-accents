/*
 * jQuery Remove Uppercase Accents v1.0.2
 * http://github.com/ebababi/jquery-remove-upcase-accents/
 *
 * Automatically removes accented characters (currently greek) from elements
 * having their text content uppercase transformed through CSS.
 *
 * Copyright © 2012-2013 Nikolaos Anastopoulos
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
		},
	smallcaps: function( elem ) {
		var attr = jQuery( elem ).css( "font-variant" );
		return ( typeof attr !== "undefined" && attr === "small-caps" );
	}
});

jQuery.extend({
	removeAcc: function( elem ) {
		var text = elem.is( "input" ) ? elem.value : elem.innerHTML;

		text = text.replace( /Ά/g, "Α" );
		text = text.replace( /ά/g, "α" );
		text = text.replace( /Έ/g, "Ε" );
		text = text.replace( /έ/g, "ε" );
		text = text.replace( /Ή/g, "Η" );
		text = text.replace( /ή/g, "η" );
		text = text.replace( /Ί/g, "Ι" );
		text = text.replace( /Ϊ/g, "Ι" );
		text = text.replace( /ί/g, "ι" );
		text = text.replace( /ϊ/g, "ι" );
		text = text.replace( /ΐ/g, "ι" );
		text = text.replace( /Ό/g, "Ο" );
		text = text.replace( /ό/g, "ο" );
		text = text.replace( /Ύ/g, "Υ" );
		text = text.replace( /Ϋ/g, "Υ" );
		text = text.replace( /ύ/g, "υ" );
		text = text.replace( /ϋ/g, "υ" );
		text = text.replace( /ΰ/g, "υ" );
		text = text.replace( /Ώ/g, "Ω" );
		text = text.replace( /ώ/g, "ω" );

		elem.is( "input" ) ? ( elem.value = text ) : ( elem.innerHTML = text );
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
	$(":uppercase, :smallcaps").removeAcc();
	$(document).ajaxComplete(function( event, request, settings ) {
		$(":uppercase, :smallcaps").removeAcc();
	});
});
