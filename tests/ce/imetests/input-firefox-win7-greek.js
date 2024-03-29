/*!
 * VisualEditor IME test for Firefox on Windows in Greek.
 *
 * @copyright See AUTHORS.txt
 */

ve.ce.imetests.push( [ 'input-firefox-win7-greek', [
	{ imeIdentifier: 'Greek', userAgent: 'Mozilla/5.0 (Windows NT 6.1; rv:19.0) Gecko/20100101 Firefox/19.0', startDom: '' },
	{ seq: 0, time: 7.083, action: 'sendEvent', args: [ 'keydown', { keyCode: 69 } ] },
	{ seq: 1, time: 7.085, action: 'sendEvent', args: [ 'keypress', { keyCode: 0 } ] },
	{ seq: 2, time: 7.088, action: 'changeText', args: [ 'ε' ] },
	{ seq: 3, time: 7.088, action: 'changeSel', args: [ 1, 1 ] },
	{ seq: 4, time: 7.088, action: 'sendEvent', args: [ 'input', {} ] },
	{ seq: 5, time: 7.092, action: 'endLoop', args: [] },
	{ seq: 6, time: 7.188, action: 'sendEvent', args: [ 'keyup', { keyCode: 69 } ] },
	{ seq: 7, time: 7.19, action: 'endLoop', args: [] },
	{ seq: 8, time: 7.665, action: 'sendEvent', args: [ 'keydown', { keyCode: 76 } ] },
	{ seq: 9, time: 7.667, action: 'sendEvent', args: [ 'keypress', { keyCode: 0 } ] },
	{ seq: 10, time: 7.669, action: 'changeText', args: [ 'ελ' ] },
	{ seq: 11, time: 7.669, action: 'changeSel', args: [ 2, 2 ] },
	{ seq: 12, time: 7.669, action: 'sendEvent', args: [ 'input', {} ] },
	{ seq: 13, time: 7.674, action: 'endLoop', args: [] },
	{ seq: 14, time: 7.754, action: 'sendEvent', args: [ 'keyup', { keyCode: 76 } ] },
	{ seq: 15, time: 7.756, action: 'endLoop', args: [] },
	{ seq: 16, time: 8.157, action: 'sendEvent', args: [ 'keydown', { keyCode: 76 } ] },
	{ seq: 17, time: 8.159, action: 'sendEvent', args: [ 'keypress', { keyCode: 0 } ] },
	{ seq: 18, time: 8.162, action: 'changeText', args: [ 'ελλ' ] },
	{ seq: 19, time: 8.162, action: 'changeSel', args: [ 3, 3 ] },
	{ seq: 20, time: 8.162, action: 'sendEvent', args: [ 'input', {} ] },
	{ seq: 21, time: 8.168, action: 'endLoop', args: [] },
	{ seq: 22, time: 8.256, action: 'sendEvent', args: [ 'keyup', { keyCode: 76 } ] },
	{ seq: 23, time: 8.259, action: 'endLoop', args: [] },
	{ seq: 24, time: 8.669, action: 'sendEvent', args: [ 'keydown', { keyCode: 72 } ] },
	{ seq: 25, time: 8.673, action: 'sendEvent', args: [ 'keypress', { keyCode: 0 } ] },
	{ seq: 26, time: 8.676, action: 'changeText', args: [ 'ελλη' ] },
	{ seq: 27, time: 8.676, action: 'changeSel', args: [ 4, 4 ] },
	{ seq: 28, time: 8.676, action: 'sendEvent', args: [ 'input', {} ] },
	{ seq: 29, time: 8.684, action: 'endLoop', args: [] },
	{ seq: 30, time: 8.788, action: 'sendEvent', args: [ 'keyup', { keyCode: 72 } ] },
	{ seq: 31, time: 8.792, action: 'endLoop', args: [] },
	{ seq: 32, time: 9.181, action: 'sendEvent', args: [ 'keydown', { keyCode: 78 } ] },
	{ seq: 33, time: 9.184, action: 'sendEvent', args: [ 'keypress', { keyCode: 0 } ] },
	{ seq: 34, time: 9.188, action: 'changeText', args: [ 'ελλην' ] },
	{ seq: 35, time: 9.188, action: 'changeSel', args: [ 5, 5 ] },
	{ seq: 36, time: 9.188, action: 'sendEvent', args: [ 'input', {} ] },
	{ seq: 37, time: 9.215, action: 'endLoop', args: [] },
	{ seq: 38, time: 9.315, action: 'sendEvent', args: [ 'keyup', { keyCode: 78 } ] },
	{ seq: 39, time: 9.319, action: 'endLoop', args: [] },
	{ seq: 40, time: 9.663, action: 'sendEvent', args: [ 'keydown', { keyCode: 73 } ] },
	{ seq: 41, time: 9.668, action: 'sendEvent', args: [ 'keypress', { keyCode: 0 } ] },
	{ seq: 42, time: 9.673, action: 'changeText', args: [ 'ελληνι' ] },
	{ seq: 43, time: 9.673, action: 'changeSel', args: [ 6, 6 ] },
	{ seq: 44, time: 9.673, action: 'sendEvent', args: [ 'input', {} ] },
	{ seq: 45, time: 9.7, action: 'endLoop', args: [] },
	{ seq: 46, time: 9.792, action: 'sendEvent', args: [ 'keyup', { keyCode: 73 } ] },
	{ seq: 47, time: 9.796, action: 'endLoop', args: [] },
	{ seq: 48, time: 10.18, action: 'sendEvent', args: [ 'keydown', { keyCode: 75 } ] },
	{ seq: 49, time: 10.184, action: 'sendEvent', args: [ 'keypress', { keyCode: 0 } ] },
	{ seq: 50, time: 10.189, action: 'changeText', args: [ 'ελληνικ' ] },
	{ seq: 51, time: 10.189, action: 'changeSel', args: [ 7, 7 ] },
	{ seq: 52, time: 10.189, action: 'sendEvent', args: [ 'input', {} ] },
	{ seq: 53, time: 10.217, action: 'endLoop', args: [] },
	{ seq: 54, time: 10.284, action: 'sendEvent', args: [ 'keyup', { keyCode: 75 } ] },
	{ seq: 55, time: 10.289, action: 'endLoop', args: [] },
	{ seq: 56, time: 10.687, action: 'sendEvent', args: [ 'keydown', { keyCode: 0 } ] },
	{ seq: 57, time: 10.692, action: 'endLoop', args: [] },
	{ seq: 58, time: 10.801, action: 'sendEvent', args: [ 'keyup', { keyCode: 0 } ] },
	{ seq: 59, time: 10.806, action: 'endLoop', args: [] },
	{ seq: 60, time: 11.219, action: 'sendEvent', args: [ 'keydown', { keyCode: 65 } ] },
	{ seq: 61, time: 11.224, action: 'sendEvent', args: [ 'keypress', { keyCode: 0 } ] },
	{ seq: 62, time: 11.229, action: 'changeText', args: [ 'ελληνικά' ] },
	{ seq: 63, time: 11.229, action: 'changeSel', args: [ 8, 8 ] },
	{ seq: 64, time: 11.229, action: 'sendEvent', args: [ 'input', {} ] },
	{ seq: 65, time: 11.27, action: 'endLoop', args: [] },
	{ seq: 66, time: 11.348, action: 'sendEvent', args: [ 'keyup', { keyCode: 65 } ] },
	{ seq: 67, time: 11.353, action: 'endLoop', args: [] }
] ] );
