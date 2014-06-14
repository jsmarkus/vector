(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.Vector = factory();
	}
}(this, function() {

	function Vector(x, y) {
		this.x = +x || 0;
		this.y = +y || 0;
	}

	Vector.prototype.clone = function() {
		return new this.constructor(this.x, this.y);
	};

	Vector.prototype.add = function( /*vectors*/ ) {
		var vectors = arguments;
		for (var i = 0; i < vectors.length; i++) {
			this.x += vectors[i].x;
			this.y += vectors[i].y;
		}
		return this;
	};

	Vector.prototype.len = function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	};

	Vector.prototype.scale = function(scalar) {
		this.x *= scalar;
		this.y *= scalar;
		return this;
	};

	Vector.prototype.normal = function() {
		this.scale(1 / this.len());
		return this;
	};

	return Vector;
}));