'use strict';

var request = require( 'request' ),
	parse = require( './../lib' );

function onResponse( error, response, body ) {
	var out;
	if ( error ) {
		return done( error );
	}
	out = parse( body );
	if ( out instanceof Error ) {
		return done( out );
	}
	return done( null, out );
}

function done( error, data ) {
	if ( error ) {
		return console.error( error.message );
	}
	console.log( data );
}

request({
	'method': 'GET',
	'url': 'http://example.com'
}, onResponse );

