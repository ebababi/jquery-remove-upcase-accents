/*
 * jQuery Remove Uppercase Accents v1.1.1
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
		// Replace uppercase accented greek characters
		function removeAccEL( text ) {
			return typeof text !== "string" ?
				// handle cases that text is not a string
				text :
				// global replace of uppercase accented characters
				text.
					replace( /\u0386/g, "\u0391" ). // 'Ά':'Α'
					replace( /\u0388/g, "\u0395" ). // 'Έ':'Ε'
					replace( /\u0389/g, "\u0397" ). // 'Ή':'Η'
					replace( /\u038A/g, "\u0399" ). // 'Ί':'Ι'
					replace( /\u038C/g, "\u039F" ). // 'Ό':'Ο'
					replace( /\u038E/g, "\u03A5" ). // 'Ύ':'Υ'
					replace( /\u038F/g, "\u03A9" ). // 'Ώ':'Ω'
					replace( /\u0390/g, "\u03B9" ). // 'ΐ':'ι'
					replace( /\u03AA/g, "\u0399" ). // 'Ϊ':'Ι'
					replace( /\u03AB/g, "\u03A5" ). // 'Ϋ':'Υ'
					replace( /\u03AC/g, "\u03B1" ). // 'ά':'α'
					replace( /\u03AD/g, "\u03B5" ). // 'έ':'ε'
					replace( /\u03AE/g, "\u03B7" ). // 'ή':'η'
					replace( /\u03AF/g, "\u03B9" ). // 'ί':'ι'
					replace( /\u03B0/g, "\u03C5" ). // 'ΰ':'υ'
					replace( /\u03CA/g, "\u03B9" ). // 'ϊ':'ι'
					replace( /\u03CB/g, "\u03C5" ). // 'ϋ':'υ'
					replace( /\u03CC/g, "\u03BF" ). // 'ό':'ο'
					replace( /\u03CD/g, "\u03C5" ). // 'ύ':'υ'
					replace( /\u03CE/g, "\u03C9" ); // 'ώ':'ω'
		}

		jQuery( elem ).each(function() {
			this.value = removeAccEL( this.value );
		}).contents().filter(function() {
			return this.nodeType === 3; // Node.TEXT_NODE
		}).each(function() {
			this.nodeValue = removeAccEL( this.nodeValue );
		});
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
	$( ":uppercase:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
	$( ":smallcaps:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
	$( ".remove-accents, .remove-accents > *:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
	$( document ).ajaxComplete(function( event, request, settings ) {
		$( ":uppercase:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
		$( ":smallcaps:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
		$( ".remove-accents, .remove-accents > *:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
	});
});
