module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
                nonull: true
            },
            footer: {
                src: [
                    'assets/js/jquery.js',
                    'assets/js/bootstrap/bootstrap.min.js',
                    'assets/js/plugins/jquery.easing.min.js',
                    'assets/js/plugins/classie.js',
                    'assets/js/plugins/cbpAnimatedHeader.js',
                    'assets/js/plugins/owl-carousel/owl.carousel.js',
                    'assets/js/plugins/jquery.magnific-popup/jquery.magnific-popup.min.js',
                    'assets/js/plugins/jquery.fs.wallpaper.js',
                    'assets/js/plugins/jquery.mixitup.js',
                    'assets/js/plugins/wow/wow.min.js',
                    'assets/js/plugins/jqBootstrapValidation.js',
                    'assets/js/vitality.js'
                ],
                dest: 'assets/js/min/wtf.js'
            },
            IEheader: {
                src: [
                    'assets/js/html5shiv.js',
                    'assets/js/respond.min.js'
                ],
                dest: 'assets/js/min/ieheader.js'
            }
        },
        uglify: {
            my_target: {
                files: {
                    '<%= concat.footer.dest %>': ['<%= concat.footer.dest %>'],
                    '<%= concat.IEheader.dest %>': ['<%= concat.IEheader.dest %>']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'assets/css/min/styles.css': [
                        'assets/css/bootstrap/bootstrap.min.css',
                        'assets/css/plugins/owl-carousel/owl.carousel.css',
                        'assets/css/plugins/owl-carousel/owl.theme.css',
                        'assets/css/plugins/owl-carousel/owl.transitions.css',
                        'assets/css/plugins/magnific-popup.css',
                        'assets/css/plugins/jquery.fs.wallpaper.css',
                        'assets/css/plugins/animate.css',
                        'assets/css/vitality-red.css',
                        'assets/css/wtf.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat','cssmin']);
    grunt.registerTask('min', ['concat', 'uglify', 'cssmin']);

};