'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: ['assets/scss/*.scss'],
                tasks: ['sass:dist']
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: 'assets/js/**/*.js',
                dest: 'assets/temp/js/scripts.concat.js'
            }
        },

        babel: {
            options: {
                presets: ['es2015']
            },
            dist: {
                files: {
                    'assets/temp/js/scripts.es2015.js': 'assets/temp/js/scripts.concat.js'
                }
            }
        },

        jasmine: {
            pivotal: {
                src: 'assets/temp/js/scripts.es2015.js',
                options: {
                    specs: [
                        'assets/tests/spec/**/*.spec.js'
                    ],
                    helpers: 'assets/tests/spec/**/*.helper.js',
                    summary: false,
                    junit: {
                        path: 'junit'
                    }
                }
            }
        },

        uglify: {
            options: {
                sourceMap: true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'assets/temp/js/scripts.es2015.js',
                dest: 'public/js/scripts.min.js'
            }
        },

        sass: {
            dist: {
                files: {
                    'assets/temp/css/caretta.css': 'assets/scss/caretta.scss'
                }
            }
        },

        csso: {
            dynamic_mappings: {
                expand: true,
                cwd: 'assets/temp/css',
                src: ['*.css', '!*.min.css'],
                dest: 'public/css',
                ext: '.min.css'
            }
        },

        clean: {
            temp: [
                'assets/junit',
                'assets/_tests',
                '.sass-cache',
                'assets/temp',
                '.grunt'
            ]
        },

        sasslint: {
            all: 'assets/scss/caretta.scss',
            options: {
                bundleExec: false,
                config: '.scss-lint.yml'
            }
        },

        eslint: {
            target: [
                'gruntfile.js',
                'assets/js/**/*.js'
            ]
        }
    });

    grunt.registerTask('default', [
        'eslint',
        'sasslint',
        'concat',
        'babel',
        'uglify',
        'sass',
        'csso',
        'clean:temp'
    ]);
};
