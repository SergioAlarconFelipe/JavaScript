
function createElement(options) {
	options = options || {};
	
	var element;
	if(options.element) {
		element = document.createElement(options.element);
	} else {
		element = document.createElement("div");
	}
	
	if(options.attr) {
		for(var prop in options.attr) {
			element.setAttribute(prop, options.attr[prop]);
		}
	}
	
	if(options.text) {
		element.appendChild( document.createTextNode(options.text) );
	}
	
	if(options.children) {
		var length = options.children.length;
		for(var i = 0; i < length; i++) {
			if(options.children[i] instanceof HTMLElement) element.appendChild(options.children[i]);
            		else element.appendChild( createElement(options.children[i]) );
		}
	}
	
	if(options.parent) {
		options.parent.appendChild(element);
	}
	
	if(options.style) {
		for(var style in options.style) {
			element.style[style] = options.style[style];
		}
	}

	if(options.event) {
		for(var name in options.event) {
			element.addEventListener(name, options.event[name]);
		}
	}
	
	return element;
}
