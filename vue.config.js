const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	baseUrl: isProd ? '/vue-github-buttons/' : '/'
};
