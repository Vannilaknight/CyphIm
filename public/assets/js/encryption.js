class Encryption {
	constructor() {
		this.privateKey = [];
		this.publicKey = [];
		this.keyLength = 255;

		this.generateKeys();
	}
	generateKeys() {
		// Generates the unique key for each session
		for(var i = 0; i <= this.keyLength; i++) {
			var pushCode = Math.floor(Math.random() * (this.keyLength + 1)) + 1;
			this.privateKey.push(pushCode)
			this.publicKey.push(this.keyLength - pushCode);
		}
	}
	encrypt(message) {
		// Encrypts the message using the privateKey
		var encryptedMessage = '';

		for(var i = 0, len = message.length; i < len; i++) {
			var charCode = message[i].charCodeAt(0);

			charCode += this.privateKey[i];
			if(charCode > this.keyLength) { charCode -= this.keyLength; }

			encryptedMessage += String.fromCharCode(charCode);
		}

		console.log('Message: ' + message);
		console.log('Encrypted Message: ' + encryptedMessage);
		return encryptedMessage;
	}
	decrypt(message) {
		// Decrypts the message using the publicKey
		var decryptedMessage = '';

		for(var i = 0, len = message.length; i < len; i++) {
			var charCode = message[i].charCodeAt(0);

			charCode += this.publicKey[i];
			if(charCode > this.keyLength) { charCode -= this.keyLength; }

			decryptedMessage += String.fromCharCode(charCode);
		}

		return decryptedMessage;
	}
}

export default Encryption;