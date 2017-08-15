module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			'../dist/app.js' : ['../js/**/*.js']
		},
		jshint: {
			options: {
				predef: ['document', 'console'],
				esnext: true,
				strict: 'global',
				globals: {'$': true, 'Sandwich': true},
				browserify: true,
				reporter: require('jshint-stylish')
			},
			files: ['../js/**/*.js']
		},
		watch: {
			js: {
				files: ['../js/**/*.js'],
				tasks: ['jshint']
			},
			browserify: {
				files: ['../js/**/*.js'],
				tasks: ['browserify']
			}
		}
	});
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};