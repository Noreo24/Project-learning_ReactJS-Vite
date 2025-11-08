(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.flatten = factory());
})(this, (function () { 'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var flatUtil;
	var hasRequiredFlatUtil;

	function requireFlatUtil () {
		if (hasRequiredFlatUtil) return flatUtil;
		hasRequiredFlatUtil = 1;
		const shallowProperty = key => obj => obj == null ? undefined : obj[key];

		const getLength = shallowProperty('length');

		const isArrayLike = collection => {
			const length = getLength(collection);

			return typeof length === 'number' && length >= 0 && length <= Number.MAX_SAFE_INTEGER;
		};

		const isArguments = obj => Object.prototype.toString.call(obj) === '[object Arguments]';

		const isObject = obj => {
			const type = typeof obj;

			return type === 'function' || (type === 'object' && !!obj);
		};

		const getKeys = obj => isObject(obj) ? Object.keys(obj) : [];

		const optimizeCb = (func, context, argCount) => {
			return func;
		};

		const forEach = (obj, iteratee, context) => {
			iteratee = optimizeCb(iteratee);
			if (isArrayLike(obj)) {
				let i = 0;

				for (const item of obj) {
					iteratee(item, i++, obj);
				}
			} else {
				const keys = getKeys(obj);

				for (const key of keys) {
					iteratee(obj[key], key, obj);
				}
			}

			return obj;
		};

		const flatten = (input, shallow, strict, output = []) => {
			if (input == null) return [];

			let idx = output.length;

			forEach(input, value => {
				if (isArrayLike(value) && (Array.isArray(value) || isArguments(value))) {
					if (shallow) {
						let j = 0;
						const len = value.length;

						while (j < len) output[idx++] = value[j++];
					} else {
						flatten(value, shallow, strict, output);
						idx = output.length;
					}
				} else {
					output[idx++] = value;
				}
			});

			return output;
		};

		flatUtil = (array, shallow) => flatten(array, shallow, false);
		return flatUtil;
	}

	var flatUtilExports = requireFlatUtil();
	var index = /*@__PURE__*/getDefaultExportFromCjs(flatUtilExports);

	return index;

}));
