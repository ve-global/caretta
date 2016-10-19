﻿'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        assemble: {
            options: {
                data: 'src/**/*.{json,yml}',
                assets: 'assets/**',
                partials: 'markup/includes/**/*.hbs',
                flatten: false,
                layout: 'default.hbs',
                layoutdir: 'markup/layouts'
            },
            default: {
                files: [{
                    cwd: 'markup/pages/',
                    dest: '',
                    expand: true,
                    src: ['**/*.hbs']
                }]
            }
        },

        watch: {
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass:dist']
            }
        },
        
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src:
                    ['assets/js/helpers.js',
                    'assets/js/accordion.js',
                    'assets/js/dropdown.js',
                    'assets/js/modals.js',
                    'assets/js/navigation.js',
                    'assets/js/tabs.js',
                    'assets/js/forms.js',
                    'assets/js/init.js'],
                dest: 'temp/js/scripts.concat.js'
            }
        },

        babel: {
            options: {
                presets: ['es2015']
            },
            dist: {
                files: {
                    'dist/js/scripts.js': 'temp/js/scripts.concat.js'
                }
            }
        },

        jasmine: {
            pivotal: {
                src: 'dist/js/scripts.js',
                options: {
                    specs: [
                        'tests/spec/**/*.spec.js'
                    ],
                    helpers: 'tests/spec/**/*.helper.js',
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
            buildBower: {
                src: 'dist/js/scripts.js',
                dest: 'dist/js/scripts.min.js'
            }
        },

        sass: {
            dist: {
                files: {
                    'dist/css/caretta.css': 'scss/caretta.scss'
                }
            }
        },

        csso: {
            dynamic_mappings: {
                expand: true,
                cwd: 'dist/css',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css',
                ext: '.min.css'
            }
        },

        clean: {
            temp: [
                'junit',
                '_tests',
                '.sass-cache',
                'temp',
                '.grunt'
            ]
        },

        sasslint: {
            all: 'dist/caretta.scss',
            options: {
                bundleExec: false,
                config: '.scss-lint.yml'
            }
        },

        eslint: {
            target: [
                'gruntfile.js',
                'assets/js/**/*.js',
                '!assets/js/libs/**/*.js'
            ]
        },

        copy: {
            materialFonts: {
                expand: true,
                flatten: true,
                src: 'fonts/Material-Design-Iconic-Font/**',
                dest: 'dist/fonts/',
                filter: 'isFile'
            },
            favicons: {
                expand: true,
                flatten: true,
                src: 'images/favicons/**',
                dest: 'dist/images/',
                filter: 'isFile'
            },
            colorpicker: {
                flatten: true,
                files: [
                    {
                        src: 'assets/js/libs/picker.min.js',
                        dest: 'public/js/libs/picker.min.js'
                    }
                ]
            },
            datepicker: {
                flatten: true,
                files: [
                    {
                        src: 'assets/js/libs/pikaday.js',
                        dest: 'public/js/libs/pikaday.js'
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', [
        'assemble',
        'copy',
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
