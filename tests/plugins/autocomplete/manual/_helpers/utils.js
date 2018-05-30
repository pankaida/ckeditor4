/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */


( function() {
	'use strict';

	var DATA = [
		{ id: 1, name: '@john' },
		{ id: 2, name: '@thomas' },
		{ id: 3, name: '@anna' },
		{ id: 4, name: '@cris' },
		{ id: 5, name: '@julia' }
	];

	window.autocompleteUtils = {
		getTextTestCallback: function() {
			return function( range ) {
				return CKEDITOR.plugins.textMatch.match( range, matchCallback );
			};

			function matchCallback( text, offset ) {
				var left = text.slice( 0, offset ),
					match = left.match( new RegExp( '@\\w*$' ) );

				if ( !match ) {
					return null;
				}

				return { start: match.index, end: offset };
			}
		},

		getDataCallback: function( config ) {
			config = config || {};
			return function( query, range, callback ) {
				var data = DATA.filter( function( item ) {
					return item.name.indexOf( query.toLowerCase() ) == 0;
				} );

				setTimeout( function() {
					callback( data );
				}, config.async || 0 );
			};
		}
	};
} )();
