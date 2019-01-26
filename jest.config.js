const { defaults } = require('jest-config');
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
	transform: {
		...tsjPreset.transform,
		'^.+\\.vue$': 'vue-jest'
	},
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'vue'],
	moduleNameMapper: {
		'\\.scss$': '<rootDir>/__mocks__/styleMock.ts'
	},
	setupFiles: ['<rootDir>/__setup__/fetch.ts', 'mock-local-storage'],
	globals: {
		GH_TOKEN: ''
	}
};
