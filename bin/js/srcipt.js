(function ($global) { "use strict";
var Main = function() { };
Main.main = function() {
	var lastbgcolor = "#000000";
	var drawingcanvas = window.document.getElementById("drawingcanvas");
	var context = drawingcanvas.getContext("2d",null);
	context.fillStyle = "#000000";
	context.fillRect(0,0,512,512);
	context.stroke();
	var generatebutton = window.document.getElementById("generatebutton");
	generatebutton.onclick = function() {
		context.fillStyle = "#000000";
		context.fillRect(0,0,512,512);
		lastbgcolor = "#000000";
		var randomcolor = Std.random(16777216);
		var tmp = StringTools.hex(randomcolor,6);
		context.fillStyle = "#" + tmp;
		var _g = 0;
		while(_g < 8) {
			var y = _g++;
			var randn = Std.random(2);
			if(randn == 1) {
				context.fillRect(0,y * 64,64,64);
				context.fillRect(448,y * 64,64,64);
			}
			var randn1 = Std.random(2);
			if(randn1 == 1) {
				context.fillRect(64,y * 64,64,64);
				context.fillRect(384,y * 64,64,64);
			}
			var randn2 = Std.random(2);
			if(randn2 == 1) {
				context.fillRect(128,y * 64,64,64);
				context.fillRect(320,y * 64,64,64);
			}
			var randn3 = Std.random(2);
			if(randn3 == 1) {
				context.fillRect(192,y * 64,64,64);
				context.fillRect(256,y * 64,64,64);
			}
		}
		context.stroke();
	};
	var generatewithbgbutton = window.document.getElementById("generatewithbgbutton");
	generatewithbgbutton.onclick = function() {
		var bgcolor = Std.random(16777216);
		var tmp = StringTools.hex(bgcolor,6);
		context.fillStyle = "#" + tmp;
		context.fillRect(0,0,512,512);
		lastbgcolor = "#" + StringTools.hex(bgcolor,6);
		var randomcolor = Std.random(16777216);
		var tmp = StringTools.hex(randomcolor,6);
		context.fillStyle = "#" + tmp;
		var _g = 0;
		while(_g < 8) {
			var y = _g++;
			var randn = Std.random(2);
			if(randn == 1) {
				context.fillRect(0,y * 64,64,64);
				context.fillRect(448,y * 64,64,64);
			}
			var randn1 = Std.random(2);
			if(randn1 == 1) {
				context.fillRect(64,y * 64,64,64);
				context.fillRect(384,y * 64,64,64);
			}
			var randn2 = Std.random(2);
			if(randn2 == 1) {
				context.fillRect(128,y * 64,64,64);
				context.fillRect(320,y * 64,64,64);
			}
			var randn3 = Std.random(2);
			if(randn3 == 1) {
				context.fillRect(192,y * 64,64,64);
				context.fillRect(256,y * 64,64,64);
			}
		}
		context.stroke();
	};
	var changebgbutton = window.document.getElementById("changebgbutton");
	changebgbutton.onclick = function() {
		var randomcolor = Std.random(16777216);
		var tmp = StringTools.hex(randomcolor,6);
		context.fillStyle = "#" + tmp;
		var _g = 0;
		while(_g < 8) {
			var y = _g++;
			var _g1 = 0;
			while(_g1 < 4) {
				var x = _g1++;
				var pixeldata = context.getImageData(x * 64 + 1,y * 64 + 1,1,1).data;
				var red = StringTools.hex(pixeldata[0],2);
				var green = StringTools.hex(pixeldata[1],2);
				var blue = StringTools.hex(pixeldata[2],2);
				var colorstring = "#" + red + green + blue;
				if(colorstring == lastbgcolor) {
					context.fillRect(x * 64,y * 64,64,64);
					context.fillRect(448 - x * 64,y * 64,64,64);
				}
			}
		}
		context.stroke();
		lastbgcolor = "#" + StringTools.hex(randomcolor,6);
	};
	var downloadbutton = window.document.getElementById("downloadbutton");
	downloadbutton.onclick = function() {
		var data = drawingcanvas.toDataURL("image/png");
		window.location.href = StringTools.replace(data,"image/png","image/octet-stream");
	};
};
var Std = function() { };
Std.random = function(x) {
	if(x <= 0) {
		return 0;
	} else {
		return Math.floor(Math.random() * x);
	}
};
var StringTools = function() { };
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	while(true) {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
		if(!(n > 0)) {
			break;
		}
	}
	if(digits != null) {
		while(s.length < digits) s = "0" + s;
	}
	return s;
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
Main.main();
})({});
