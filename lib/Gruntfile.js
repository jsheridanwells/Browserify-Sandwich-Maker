module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			'../dist/app.js' : ['../js/**/*.js']
		},
		connect: {
	      server: {
	        options: {
	          base: '../',
	          hostname: 'localhost',
	          port: 3000,
	          livereload: true,
	          open: true
	        }
	      }
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
			options: {
				livereload: true
			},
			index: {
				files: ['../index.html']
			},
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
	grunt.registerTask('default', ['jshint', 'browserify', 'connect', 'watch']);
};