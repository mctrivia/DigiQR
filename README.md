# DigiQR
QR code generator for digibyte

## Generating static QR Code
`<img class="DigiQR" uri="HTTP://123AB" size="OPTIONAL_SIZE" logo="OPTIONAL_LOGO_VERSION" r="1">`

`<img class="DigiQR" address="DIGIBYTE_ADDRESS" amount="DIGIBYTE_AMOUNT_REQUESTED" size="OPTIONAL_SIZE" logo="OPTIONAL_LOGO_VERSION" r="1">`
 - DigiID logo will automatically be used if uri starts with `digiid://`
 - All fields but class are optional
 - You can plase a 'uri' field or a 'address' field to generate a qr.
 - If you use an 'address' field you can add an 'amount' field to request payment 
 - Will automatically be made clickable
 - Library file must be added at end of html to use in this way


## Generating changable QR Code
Place image tag in your html
	`<img id="qr">`
		
Set the img src pick one:
 - Encode anything into a qr code: `document.getElementById("qr").src = DigiQR.text(VALUE,OPTIONAL_SIZE,OPTIONAL_LOGO_VERSION);`
 - Encode payment request: `document.getElementById("qr").src = DigiQR.request(DIGIBYTE_ADDRESS,DIGIBYTE_AMOUNT_REQUESTED,OPTIONAL_SIZE,OPTIONAL_LOGO_VERSION);`
 - Encode digibyte address with link to explorer: `document.getElementById("qr").src = DigiQR.explorer(DIGIBYTE_ADDRESS,OPTIONAL_SIZE,OPTIONAL_LOGO_VERSION);`
 - Encode digibyte address.  Can encode private keys also: `document.getElementById("qr").src = DigiQR.address(DIGIBYTE_ADDRESS,OPTIONAL_SIZE,OPTIONAL_LOGO_VERSION);`
 - Encode digiID uri: `document.getElementById("qr").src = DigiQR.id(URI,OPTIONAL_SIZE,OPTIONAL_LOGO_VERSION);`

### Variable definitions:
	DIGIBYTE_ADDRESS:		(string) containing public address (private key can be used with address)
	DIGIBYTE_AMOUNT_REQUESTED:	(float) number of digibyte requesting
	OPTIONAL_SIZE:			defaults to 200 pixels
	OPTIONAL_LOGO_VERSION:		0,false,undefined	no logo
					1,true			logo with white box
					2			logo with white circle
					4			logo with no boarder
					5			large logo with white dots
					6			large logo with white squares


If you found this helpful please donate:
Digibyte: DLExRXZ4oXnEWEpP6bNYG4urNLnDr4jJ2n
