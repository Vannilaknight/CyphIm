$(document).ready(function() {
	// JQuery Variable Declaration
	var $submit = $('#submit'),
		$outbound = $('#outbound');

	// Encryption Variable Declaration
	var privateKey = [],
		publicKey = [],
		keyLength = 256;

	$submit.on('click', function() {
		var stringToEncrypt = $outbound.val(),
			encryptedString = '',
			decryptedString = '';

		// Encrypts the string using the privateKey
		for(var i = 0, len = stringToEncrypt.length; i < len; i++) {
			var charCode = stringToEncrypt[i].charCodeAt(0);

			charCode += privateKey[i];

			if(charCode > 255) charCode -= 255;

			encryptedString += String.fromCharCode(charCode);
		}

		// Decrypts the string using the publicKey
		for(i = 0, len = encryptedString.length; i < len; i++) {
			charCode = encryptedString[i].charCodeAt(0);

			charCode += publicKey[i];

			if(charCode > 255) charCode -= 255;

			decryptedString += String.fromCharCode(charCode);
		}
	});

	function init() {
		// Generates the unique key for each session
		for(var i = 0; i < keyLength; i++) {
			var pushCode = Math.floor(Math.random() * 255) + 1;
			privateKey.push(pushCode)
			publicKey.push(255 - pushCode);
		}
	}
	init();
});