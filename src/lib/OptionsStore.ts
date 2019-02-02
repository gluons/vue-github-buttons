import Options from '../types/Options';

/**
 * Vue GitHub buttons options store.
 *
 * @export
 * @class OptionsStore
 */
export class OptionsStore {
	private _options: Options;

	constructor() {
		this._options = {
			useCache: true
		};
	}

	/**
	 * Options value
	 *
	 * @type {Options}
	 * @memberof OptionsStore
	 */
	get value(): Options {
		return this._options;
	}
	set value(options: Options) {
		this._options = options;
	}

	/**
	 * Get an option value.
	 *
	 * @template K Type of option
	 * @param {K} optionName Option name
	 * @returns {Options[K]}
	 * @memberof OptionsStore
	 */
	getOption<K extends keyof Options>(optionName: K): Options[K] {
		return this._options[optionName];
	}
	/**
	 * Set an option value.
	 *
	 * @template K Type of option
	 * @param {K} optionName Option name
	 * @param {Options[K]} optionValue New option value
	 * @memberof OptionsStore
	 */
	setOption<K extends keyof Options>(optionName: K, optionValue: Options[K]) {
		this._options[optionName] = optionValue;
	}
}

/**
 * Vue GitHub buttons global options store.
 */
const optionsStore = new OptionsStore();

export default optionsStore;
