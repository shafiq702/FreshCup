/*
 *  Document   : app.js
 *  Author     : pixelcave
 *  Description: Setting up and vital functionality for our App
 *
 */

// Create our angular module
var App = angular.module('app', [
    'ngStorage',
    'ui.router',
    'yaru22.md',
    'ui.bootstrap',
    'oc.lazyLoad',
    'gavruk.card'
]);

// Router configuration
App.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('login');
        $stateProvider
            // .state('home', {
            //     url: '/',
            //     templateUrl: 'assets/views/home.html',
            //     data: {
            //       restricted: false
            //     },
            //     controller: 'homeCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //       posts: function(blogFactory){
            //         return blogFactory.getAllPublicPosts()
            //         .then(function(posts){
            //           return posts.slice(0,3)
            //         })
            //       },
            //       courses: function(courseFactory){
            //         return courseFactory.getAllCourses()
            //         .then(function(courses){
            //           return courses.slice(0,3)
            //         })
            //       }
            //     }
            // })
            // .state('aboutUs', {
            //     url: '/aboutUs',
            //     templateUrl: 'assets/views/about_us.html',
            //     controller: 'aboutUsCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('newMemberRegistration', {
            //     url: '/new-member-registration',
            //     templateUrl: 'assets/views/resources.html',
            //     controller: 'newMemberRegistrationCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('courses', {
            //     url: '/courses',
            //     templateUrl: 'assets/views/frontend_elearning_courses.html',
            //     controller: 'CoursesCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         courses: function(courseFactory){
            //           return courseFactory.getAllCourses()
            //           .then(function(courses){
            //             return courses
            //           })
            //         }
            //     }
            // })
            // .state('singleCourse', {
            //     url: '/course/:courseId',
            //     templateUrl: 'assets/views/frontend_elearning_course.html',
            //     controller: 'SingleCourseCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         course: function(courseFactory, $stateParams){
            //           return courseFactory.getSingleCourse($stateParams.courseId)
            //           .then(function(course){
            //             return course[0]
            //           })
            //         },
            //         units: function(courseFactory, $stateParams){
            //           return courseFactory.getAllUnits($stateParams.courseId)
            //           .then(function(units){
            //             return units
            //           })
            //         }
            //     }
            // })
            // .state('books', {
            //     url: '/books',
            //     templateUrl: 'assets/views/frontend_ecom_home.html',
            //     controller: 'BooksCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         books: function(bookFactory){
            //           return bookFactory.getAllBooks()
            //           .then(function(books){
            //             return books
            //           })
            //         }
            //     }
            // })
            // .state('bookDetail', {
            //     url: '/book/detail/:bookId',
            //     templateUrl: 'assets/views/frontend_ecom_product.html',
            //     controller: 'BookDetailCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         book: function(bookFactory, $stateParams){
            //           return bookFactory.getSingleBook($stateParams.bookId)
            //           .then(function(book){
            //             return book[0]
            //           })
            //         }
            //     }
            // })
            // .state('checkout', {
            //     url: '/checkout',
            //     templateUrl: 'assets/views/frontend_ecom_checkout.html',
            //     controller: 'CheckoutCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('tutorials', {
            //     url: '/tutorials',
            //     templateUrl: 'assets/views/tutorial_list.html',
            //     controller: 'TutorialsCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         posts: function(tutorialFactory){
            //           return tutorialFactory.getAllPublicTutorials()
            //           .then(function(posts){
            //             return posts
            //           })
            //           .catch(function(err){
            //             console.log(err)
            //           })
            //         }
            //     }
            // })
            // .state('blog', {
            //     url: '/blog',
            //     templateUrl: 'assets/views/ready_angularjs.html',
            //     controller: 'BlogCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         posts: function(blogFactory){
            //           return blogFactory.getAllPublicPosts()
            //           .then(function(posts){
            //             return posts
            //           })
            //         }
            //     }
            // })
            .state('signup', {
                url: '/signup',
                templateUrl: 'assets/views/frontend_signup.html',
                controller: 'SignupCtrl',
                data: {
                  restricted: true
                },
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/slick/slick.min.css',
                                'assets/js/plugins/slick/slick-theme.min.css',
                                'assets/js/plugins/slick/slick.min.js',
                                'assets/js/plugins/chartjs/Chart.min.js'
                            ]
                        });
                    }],
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'assets/views/frontend_login.html',
                controller: 'LoginCtrl',
                data: {
                  restricted: false
                },
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/slick/slick.min.css',
                                'assets/js/plugins/slick/slick-theme.min.css',
                                'assets/js/plugins/slick/slick.min.js',
                                'assets/js/plugins/chartjs/Chart.min.js'
                            ]
                        });
                    }],
                }
            })
            // .state('singlePost', {
            //     url: '/blog/:postId',
            //     templateUrl: 'assets/views/single-post.html',
            //     controller: 'SinglePostCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         post: function(blogFactory, $stateParams){
            //           return blogFactory.getSinglePost($stateParams.postId)
            //           .then(function(post){
            //             return post[0]
            //           })
            //         }
            //     }
            // })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'assets/views/base_pages_dashboard_v2.html',
                controller: 'DashboardCtrl',
                data: {
                  restricted: true
                },
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/slick/slick.min.css',
                                'assets/js/plugins/slick/slick-theme.min.css',
                                'assets/js/plugins/slick/slick.min.js',
                                'assets/js/plugins/chartjs/Chart.min.js'
                            ]
                        });
                    }]
                }
            })
            // .state('bmform', {
            //     url: '/form/:formID',
            //     templateUrl: 'assets/views/bm_form.html',
            //     controller: 'BMFormCtrl',
            //     data: {
            //       restricted: true
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('adminCourses', {
            //     url: '/admin/courses',
            //     templateUrl: 'assets/views/bd_courses.html',
            //     controller: 'AdminCoursesCtrl',
            //     data: {
            //       restricted: true
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         courses: function(courseFactory){
            //           return courseFactory.getAllCourses()
            //           .then(function(courses){
            //             return courses
            //           })
            //         }
            //     }
            // })
            // .state('adminUnits', {
            //     url: '/admin/units/:courseId',
            //     templateUrl: 'assets/views/units_table.html',
            //     controller: 'AdminUnitsCtrl',
            //     data: {
            //       restricted: true
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         units: function(courseFactory, $stateParams){
            //           return courseFactory.getAllUnits($stateParams.courseId)
            //           .then(function(units){
            //             return units
            //           })
            //           .catch(function(err){
            //             console.log(err)
            //           })
            //         }
            //     }
            // })
            // .state('adminLessons', {
            //     url: '/admin/lessons/:unitId',
            //     templateUrl: 'assets/views/lessons_table.html',
            //     controller: 'AdminLessonsCtrl',
            //     data: {
            //       restricted: true
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         lessons: function(courseFactory, $stateParams){
            //           return courseFactory.getAllLessons($stateParams.unitId)
            //           .then(function(lessons){
            //             return lessons
            //           })
            //           .catch(function(err){
            //             console.log(err)
            //           })
            //         }
            //     }
            // })
            // .state('adminProducts', {
            //     url: '/admin/products',
            //     templateUrl: 'assets/views/bd_products.html',
            //     controller: 'AdminProductsCtrl',
            //     data: {
            //       restricted: true
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         books: function(bookFactory){
            //           return bookFactory.getAllBooks()
            //           .then(function(books){
            //             return books
            //           })
            //         }
            //     }
            // })
            // .state('adminCustomers', {
            //     url: '/admin/customers',
            //     templateUrl: 'assets/views/bd_customers.html',
            //     controller: 'AdminCustomersCtrl',
            //     data: {
            //       restricted: true
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            .state('userSettings', {
                url: '/user/settings',
                templateUrl: 'assets/views/bd_settings.html',
                controller: 'UserSettingsCtrl',
                data: {
                  restricted: true
                },
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/slick/slick.min.css',
                                'assets/js/plugins/slick/slick-theme.min.css',
                                'assets/js/plugins/slick/slick.min.js',
                                'assets/js/plugins/chartjs/Chart.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('userSettings.general', {
                url: '/general',
                templateUrl: 'assets/views/bd_settings_general.html',
                controller: 'UserSettingsCtrl',
                data: {
                  restricted: true
                },
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/slick/slick.min.css',
                                'assets/js/plugins/slick/slick-theme.min.css',
                                'assets/js/plugins/slick/slick.min.js',
                                'assets/js/plugins/chartjs/Chart.min.js'
                            ]
                        });
                    }]
                }
            })
            .state('userSettings.password', {
                url: '/password',
                templateUrl: 'assets/views/bd_settings_password.html',
                controller: 'UserSettingsCtrl',
                data: {
                  restricted: true
                },
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/slick/slick.min.css',
                                'assets/js/plugins/slick/slick-theme.min.css',
                                'assets/js/plugins/slick/slick.min.js',
                                'assets/js/plugins/chartjs/Chart.min.js'
                            ]
                        });
                    }]
                }
            })
            // .state('userSettings.purchases', {
            //     url: '/purchases',
            //     templateUrl: 'assets/views/bd_settings_purchases.html',
            //     controller: 'UserSettingsCtrl',
            //     data: {
            //       restricted: true
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('adminAddCourses', {
            //     url: '/admin/add/courses',
            //     templateUrl: 'assets/views/admin_course_add.html',
            //     controller: 'AdminAddCoursesCtrl',
            //     data: {
            //       restricted: true
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('adminAddUnits', {
            //     url: '/admin/add/units/:courseId',
            //     templateUrl: 'assets/views/admin_unit_add.html',
            //     controller: 'AdminAddUnitsCtrl',
            //     data: {
            //       restricted: true
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('adminAddLessons', {
            //     url: '/admin/add/lessons/:unitId',
            //     templateUrl: 'assets/views/admin_lesson_add.html',
            //     controller: 'AdminAddLessonsCtrl',
            //     data: {
            //       restricted: true
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('adminUpdateUnits', {
            //     url: '/admin/update/units/:unitId',
            //     templateUrl: 'assets/views/admin_unit_update.html',
            //     controller: 'AdminUpdateUnitsCtrl',
            //     data: {
            //       restricted: true
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         unit: function(courseFactory, $stateParams){
            //           return courseFactory.getSingleUnit($stateParams.unitId)
            //           .then(function(unit){
            //             return unit[0]
            //           })
            //         }
            //     }
            // })
            // .state('adminUpdateLessons', {
            //     url: '/admin/update/lessons/:lessonId',
            //     templateUrl: 'assets/views/admin_lesson_update.html',
            //     controller: 'AdminUpdateLessonsCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }],
            //         lesson: function(courseFactory, $stateParams){
            //           return courseFactory.getSingleLesson($stateParams.lessonId)
            //           .then(function(lesson){
            //             console.log(lesson)
            //             return lesson[0]
            //           })
            //         }
            //     }
            // })
            // .state('adminAddBooks', {
            //     url: '/admin/add/books',
            //     templateUrl: 'assets/views/admin_book_add.html',
            //     controller: 'AdminAddBooksCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            .state('uiActivity', {
                url: '/ui/activity',
                templateUrl: 'assets/views/ui_activity.html',
                controller: 'UiActivityCtrl',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/sweetalert2/sweetalert2.min.css',
                                'assets/js/plugins/bootstrap-notify/bootstrap-notify.min.js',
                                'assets/js/plugins/sweetalert2/es6-promise.auto.min.js',
                                'assets/js/plugins/sweetalert2/sweetalert2.min.js'
                            ]
                        });
                    }]
                }
            })
            // .state('uiTabs', {
            //     url: '/ui/tabs',
            //     templateUrl: 'assets/views/ui_tabs.html'
            // })
            // .state('uiModalsTooltips', {
            //     url: '/ui/modals-tooltips',
            //     templateUrl: 'assets/views/ui_modals_tooltips.html'
            // })
            // .state('uiColorThemes', {
            //     url: '/ui/color-themes',
            //     templateUrl: 'assets/views/ui_color_themes.html'
            // })
            // .state('uiBlocksDraggable', {
            //     url: '/ui/blocks-draggable',
            //     templateUrl: 'assets/views/ui_blocks_draggable.html',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/jquery-ui/jquery-ui.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('uiChatFull', {
            //     url: '/ui/chat/full',
            //     templateUrl: 'assets/views/ui_chat_full.html',
            //     controller: 'UiChatCtrl'
            // })
            // .state('uiChatFixed', {
            //     url: '/ui/chat/fixed',
            //     templateUrl: 'assets/views/ui_chat_fixed.html',
            //     controller: 'UiChatCtrl'
            // })
            // .state('uiChatPopup', {
            //     url: '/ui/chat/popup',
            //     templateUrl: 'assets/views/ui_chat_popup.html',
            //     controller: 'UiChatCtrl'
            // })
            // .state('tutorialTables', {
            //     url: '/admin/tutorials/table',
            //     templateUrl: 'assets/views/tutorial_tables.html',
            //     controller: 'TutorialTablesCtrl',
            //     data: {restricted: true},
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/datatables/jquery.dataTables.min.css',
            //                     'assets/js/plugins/datatables/jquery.dataTables.min.js'
            //                 ]
            //             });
            //         }],
            //         posts: function(tutorialFactory){
            //           return tutorialFactory.getAllTutorials()
            //           .then(function(data){
            //             return data
            //           })
            //         }
            //     }
            // })
            .state('usersTable', {
                url: '/users',
                templateUrl: 'assets/views/tables_datatables.html',
                controller: 'UserTableCtrl',
                data: {restricted: true},
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            insertBefore: '#css-bootstrap',
                            serie: true,
                            files: [
                                'assets/js/plugins/datatables/jquery.dataTables.min.css',
                                'assets/js/plugins/datatables/jquery.dataTables.min.js',
                                'assets/js/plugins/sweetalert2/es6-promise.auto.min.js',
                                'assets/js/plugins/sweetalert2/sweetalert2.min.js'
                            ]
                        });
                    }],
                    users: function(userFactory){
                      return userFactory.getAllUsers()
                      .then(function(data){
                        return data
                      })
                    }
                }
            })
            // .state('formsPickersMore', {
            //     url: '/forms/pickers-more',
            //     templateUrl: 'assets/views/forms_pickers_more.html',
            //     controller: 'FormsPickersMoreCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/bootstrap-datepicker/bootstrap-datepicker3.min.css',
            //                     'assets/js/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css',
            //                     'assets/js/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css',
            //                     'assets/js/plugins/select2/select2.min.css',
            //                     'assets/js/plugins/select2/select2-bootstrap.min.css',
            //                     'assets/js/plugins/jquery-auto-complete/jquery.auto-complete.min.css',
            //                     'assets/js/plugins/ion-rangeslider/css/ion.rangeSlider.min.css',
            //                     'assets/js/plugins/ion-rangeslider/css/ion.rangeSlider.skinHTML5.min.css',
            //                     'assets/js/plugins/dropzonejs/dropzone.min.css',
            //                     'assets/js/plugins/jquery-tags-input/jquery.tagsinput.min.css',
            //                     'assets/js/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js',
            //                     'assets/js/plugins/bootstrap-datetimepicker/moment.min.js',
            //                     'assets/js/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js',
            //                     'assets/js/plugins/bootstrap-colorpicker/bootstrap-colorpicker.min.js',
            //                     'assets/js/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
            //                     'assets/js/plugins/select2/select2.full.min.js',
            //                     'assets/js/plugins/masked-inputs/jquery.maskedinput.min.js',
            //                     'assets/js/plugins/jquery-auto-complete/jquery.auto-complete.min.js',
            //                     'assets/js/plugins/ion-rangeslider/js/ion.rangeSlider.min.js',
            //                     'assets/js/plugins/dropzonejs/dropzone.min.js',
            //                     'assets/js/plugins/jquery-tags-input/jquery.tagsinput.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('formsEditors', {
            //     url: '/forms/editors',
            //     templateUrl: 'assets/views/forms_editors.html',
            //     controller: 'FormsEditorsCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/summernote/summernote.min.css',
            //                     'assets/js/plugins/summernote/summernote.min.js',
            //                     'assets/js/plugins/ckeditor/ckeditor.js',
            //                     'assets/js/plugins/simplemde/simplemde.min.css',
            //                     'assets/js/plugins/simplemde/simplemde.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('formsEditorsUpdate', {
            //     url: '/forms/editors/:postId',
            //     templateUrl: 'assets/views/forms_editors_update.html',
            //     controller: 'FormsEditorsUpdateCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/summernote/summernote.min.css',
            //                     'assets/js/plugins/summernote/summernote.min.js',
            //                     'assets/js/plugins/ckeditor/ckeditor.js',
            //                     'assets/js/plugins/simplemde/simplemde.min.css',
            //                     'assets/js/plugins/simplemde/simplemde.min.js'
            //                 ]
            //             });
            //         }],
            //         post: function(blogFactory,$stateParams){
            //           return blogFactory.getSinglePost($stateParams.postId)
            //           .then(function(post){
            //             return post[0]
            //           })
            //         }
            //     }
            // })
            // .state('adminUpdateCourses', {
            //     url: '/admin/courses/update/:courseId',
            //     templateUrl: 'assets/views/admin_course_update.html',
            //     controller: 'AdminUpdateCoursesCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/summernote/summernote.min.css',
            //                     'assets/js/plugins/summernote/summernote.min.js',
            //                     'assets/js/plugins/ckeditor/ckeditor.js',
            //                     'assets/js/plugins/simplemde/simplemde.min.css',
            //                     'assets/js/plugins/simplemde/simplemde.min.js'
            //                 ]
            //             });
            //         }],
            //         course: function(courseFactory,$stateParams){
            //           return courseFactory.getSingleCourse($stateParams.courseId)
            //           .then(function(course){
            //             return course[0]
            //           })
            //         }
            //     }
            // })
            // .state('adminUpdateBooks', {
            //     url: '/admin/books/update/:bookId',
            //     templateUrl: 'assets/views/admin_book_update.html',
            //     controller: 'AdminUpdateBooksCtrl',
            //     data: {
            //       restricted: false
            //     },
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/summernote/summernote.min.css',
            //                     'assets/js/plugins/summernote/summernote.min.js',
            //                     'assets/js/plugins/ckeditor/ckeditor.js',
            //                     'assets/js/plugins/simplemde/simplemde.min.css',
            //                     'assets/js/plugins/simplemde/simplemde.min.js'
            //                 ]
            //             });
            //         }],
            //         book: function(bookFactory,$stateParams){
            //           return bookFactory.getSingleBook($stateParams.bookId)
            //           .then(function(book){
            //             return book[0]
            //           })
            //         }
            //     }
            // })
            // .state('formsValidation', {
            //     url: '/forms/validation',
            //     templateUrl: 'assets/views/forms_validation.html',
            //     controller: 'FormsValidationCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/select2/select2.min.css',
            //                     'assets/js/plugins/select2/select2-bootstrap.min.css',
            //                     'assets/js/plugins/select2/select2.full.min.js',
            //                     'assets/js/plugins/jquery-validation/jquery.validate.min.js',
            //                     'assets/js/plugins/jquery-validation/additional-methods.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('formsWizard', {
            //     url: '/forms/wizard',
            //     templateUrl: 'assets/views/forms_wizard.html',
            //     controller: 'FormsWizardCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js',
            //                     'assets/js/plugins/jquery-validation/jquery.validate.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('compCharts', {
            //     url: '/components/charts',
            //     templateUrl: 'assets/views/comp_charts.html',
            //     controller: 'CompChartsCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/sparkline/jquery.sparkline.min.js',
            //                     'assets/js/plugins/easy-pie-chart/jquery.easypiechart.min.js',
            //                     'assets/js/plugins/chartjs/Chart.min.js',
            //                     'assets/js/plugins/flot/jquery.flot.min.js',
            //                     'assets/js/plugins/flot/jquery.flot.pie.min.js',
            //                     'assets/js/plugins/flot/jquery.flot.stack.min.js',
            //                     'assets/js/plugins/flot/jquery.flot.resize.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('serviceCalendar', {
            //     url: '/calendar',
            //     templateUrl: 'assets/views/comp_calendar.html',
            //     controller: 'CompCalendarCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/fullcalendar/fullcalendar.min.css',
            //                     'assets/js/plugins/jquery-ui/jquery-ui.min.js',
            //                     'assets/js/plugins/fullcalendar/moment.min.js',
            //                     'assets/js/plugins/fullcalendar/fullcalendar.min.js',
            //                     'assets/js/plugins/fullcalendar/gcal.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('compSliders', {
            //     url: '/components/sliders',
            //     templateUrl: 'assets/views/comp_sliders.html',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/slick/slick.min.css',
            //                     'assets/js/plugins/slick/slick-theme.min.css',
            //                     'assets/js/plugins/slick/slick.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('compScrolling', {
            //     url: '/components/scrolling',
            //     templateUrl: 'assets/views/comp_scrolling.html'
            // })
            // .state('compSyntaxHighlighting', {
            //     url: '/components/syntax-highlighting',
            //     templateUrl: 'assets/views/comp_syntax_highlighting.html',
            //     controller: 'CompSyntaxHighlightingCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/highlightjs/github-gist.min.css',
            //                     'assets/js/plugins/highlightjs/highlight.pack.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('compRating', {
            //     url: '/components/rating',
            //     templateUrl: 'assets/views/comp_rating.html',
            //     controller: 'CompRatingCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/jquery-raty/jquery.raty.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('compTreeview', {
            //     url: '/components/treeview',
            //     templateUrl: 'assets/views/comp_treeview.html',
            //     controller: 'CompTreeviewCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/bootstrap-treeview/bootstrap-treeview.min.css',
            //                     'assets/js/plugins/bootstrap-treeview/bootstrap-treeview.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('compMapsGoogle', {
            //     url: '/components/maps/google',
            //     templateUrl: 'assets/views/comp_maps.html',
            //     controller: 'CompMapsGoogleCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     /*
            //                      * Google Maps API Key (you will have to obtain a Google Maps API key to use Google Maps)
            //                      * For more info please have a look at https://developers.google.com/maps/documentation/javascript/get-api-key#key
            //                      */
            //                     { type: 'js', path: '//maps.googleapis.com/maps/api/js?key=' },
            //                     'assets/js/plugins/gmapsjs/gmaps.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('compMapsGoogleFull', {
            //     url: '/components/maps/google-full',
            //     templateUrl: 'assets/views/comp_maps_full.html',
            //     controller: 'CompMapsGoogleFullCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     /*
            //                      * Google Maps API Key (you will have to obtain a Google Maps API key to use Google Maps)
            //                      * For more info please have a look at https://developers.google.com/maps/documentation/javascript/get-api-key#key
            //                      */
            //                     { type: 'js', path: '//maps.googleapis.com/maps/api/js?key=' },
            //                     'assets/js/plugins/gmapsjs/gmaps.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('compMapsVector', {
            //     url: '/components/maps/vector',
            //     templateUrl: 'assets/views/comp_maps_vector.html',
            //     controller: 'CompMapsVectorCtrl',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/jquery-jvectormap/jquery-jvectormap.min.css',
            //                     'assets/js/plugins/jquery-jvectormap/jquery-jvectormap.min.js',
            //                     'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-au-mill-en.js',
            //                     'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-cn-mill-en.js',
            //                     'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-de-mill-en.js',
            //                     'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-europe-mill-en.js',
            //                     'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-fr-mill-en.js',
            //                     'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-in-mill-en.js',
            //                     'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-us-aea-en.js',
            //                     'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-world-mill-en.js',
            //                     'assets/js/plugins/jquery-jvectormap/maps/jquery-jvectormap-za-mill-en.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('compGallerySimple', {
            //     url: '/components/gallery/simple',
            //     templateUrl: 'assets/views/comp_gallery_simple.html',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                     'assets/js/plugins/magnific-popup/magnific-popup.min.css',
            //                     'assets/js/plugins/magnific-popup/magnific-popup.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('compGalleryAdvanced', {
            //     url: '/components/gallery/advanced',
            //     templateUrl: 'assets/views/comp_gallery_advanced.html',
            //     resolve: {
            //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
            //             return $ocLazyLoad.load({
            //                 insertBefore: '#css-bootstrap',
            //                 serie: true,
            //                 files: [
            //                    'assets/js/plugins/magnific-popup/magnific-popup.min.css',
            //                     'assets/js/plugins/magnific-popup/magnific-popup.min.js'
            //                 ]
            //             });
            //         }]
            //     }
            // })
            // .state('blocks', {
            //     url: '/blocks',
            //     templateUrl: 'assets/views/api_blocks.html'
            // })
            // .state('layout', {
            //     url: '/layout',
            //     templateUrl: 'assets/views/api_layout.html'
            // })
            // .state('create', {
            //     url: '/create',
            //     templateUrl: 'assets/views/ready_create.html'
            // });
    }
]);

// Tooltips and Popovers configuration
App.config(['$uibTooltipProvider',
    function ($uibTooltipProvider) {
        $uibTooltipProvider.options({
            appendToBody: true
        });
    }
]);

// Custom UI helper functions
App.factory('uiHelpers', function () {
    return {
        // Handles active color theme
        uiHandleColorTheme: function (themeName) {
            var colorTheme = jQuery('#css-theme');

            if (themeName) {
                if (colorTheme.length && (colorTheme.prop('href') !== 'assets/css/themes/' + themeName + '.min.css')) {
                    jQuery('#css-theme').prop('href', 'assets/css/themes/' + themeName + '.min.css');
                } else if (!colorTheme.length) {
                    jQuery('#css-main').after('<link rel="stylesheet" id="css-theme" href="assets/css/themes/' + themeName + '.min.css">');
                }
            } else {
                if (colorTheme.length) {
                    colorTheme.remove();
                }
            }
        },
        // Handles #main-container height resize to push footer to the bottom of the page
        uiHandleMain: function () {
            var lMain       = jQuery('#main-container');
            var hWindow     = jQuery(window).height();
            var hHeader     = jQuery('#header-navbar').outerHeight();
            var hFooter     = jQuery('#page-footer').outerHeight();

            if (jQuery('#page-container').hasClass('header-navbar-fixed')) {
                lMain.css('min-height', hWindow - hFooter);
            } else {
                lMain.css('min-height', hWindow - (hHeader + hFooter));
            }
        },
        // Handles transparent header functionality (solid on scroll - used in frontend pages)
        uiHandleHeader: function () {
            var lPage = jQuery('#page-container');

            if (lPage.hasClass('header-navbar-fixed') && lPage.hasClass('header-navbar-transparent')) {
                jQuery(window).on('scroll', function(){
                    if (jQuery(this).scrollTop() > 20) {
                        lPage.addClass('header-navbar-scroll');
                    } else {
                        lPage.removeClass('header-navbar-scroll');
                    }
                });
            }
        },
        // Handles sidebar and side overlay custom scrolling functionality
        uiHandleScroll: function(mode) {
            var windowW            = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var lPage              = jQuery('#page-container');
            var lSidebar           = jQuery('#sidebar');
            var lSidebarScroll     = jQuery('#sidebar-scroll');
            var lSideOverlay       = jQuery('#side-overlay');
            var lSideOverlayScroll = jQuery('#side-overlay-scroll');

            // Init scrolling
            if (mode === 'init') {
                // Init scrolling only if required the first time
                uiHandleScroll();
            } else {
                // If screen width is greater than 991 pixels and .side-scroll is added to #page-container
                if (windowW > 991 && lPage.hasClass('side-scroll') && (lSidebar.length || lSideOverlay.length)) {
                    // If sidebar exists
                    if (lSidebar.length) {
                        // Turn sidebar's scroll lock off (slimScroll will take care of it)
                        jQuery(lSidebar).scrollLock('disable');

                        // If sidebar scrolling does not exist init it..
                        if (lSidebarScroll.length && (!lSidebarScroll.parent('.slimScrollDiv').length)) {
                            lSidebarScroll.slimScroll({
                                height: lSidebar.outerHeight(),
                                color: '#fff',
                                size: '5px',
                                opacity : .35,
                                wheelStep : 15,
                                distance : '2px',
                                railVisible: false,
                                railOpacity: 1
                            });
                        }
                        else { // ..else resize scrolling height
                            lSidebarScroll
                                .add(lSidebarScroll.parent())
                                .css('height', lSidebar.outerHeight());
                        }
                    }

                    // If side overlay exists
                    if (lSideOverlay.length) {
                        // Turn side overlay's scroll lock off (slimScroll will take care of it)
                        jQuery(lSideOverlay).scrollLock('disable');

                        // If side overlay scrolling does not exist init it..
                        if (lSideOverlayScroll.length && (!lSideOverlayScroll.parent('.slimScrollDiv').length)) {
                            lSideOverlayScroll.slimScroll({
                                height: lSideOverlay.outerHeight(),
                                color: '#000',
                                size: '5px',
                                opacity : .35,
                                wheelStep : 15,
                                distance : '2px',
                                railVisible: false,
                                railOpacity: 1
                            });
                        }
                        else { // ..else resize scrolling height
                            lSideOverlayScroll
                                .add(lSideOverlayScroll.parent())
                                .css('height', lSideOverlay.outerHeight());
                        }
                    }
                } else {
                    // If sidebar exists
                    if (lSidebar.length) {
                        // If sidebar scrolling exists destroy it..
                        if (lSidebarScroll.length && lSidebarScroll.parent('.slimScrollDiv').length) {
                            lSidebarScroll
                                .slimScroll({destroy: true});
                            lSidebarScroll
                                .attr('style', '');
                        }

                        // Turn sidebars's scroll lock on
                        jQuery(lSidebar).scrollLock('enable');
                    }

                    // If side overlay exists
                    if (lSideOverlay.length) {
                        // If side overlay scrolling exists destroy it..
                        if (lSideOverlayScroll.length && lSideOverlayScroll.parent('.slimScrollDiv').length) {
                            lSideOverlayScroll
                                .slimScroll({destroy: true});
                            lSideOverlayScroll
                                .attr('style', '');
                        }

                        // Turn side overlay's scroll lock on
                        jQuery(lSideOverlay).scrollLock('enable');
                    }
                }
            }
        },
        // Handles page loader functionality
        uiLoader: function (mode) {
            var lBody       = jQuery('body');
            var lpageLoader = jQuery('#page-loader');

            if (mode === 'show') {
                if (lpageLoader.length) {
                    lpageLoader.fadeIn(250);
                } else {
                    lBody.prepend('<div id="page-loader"></div>');
                }
            } else if (mode === 'hide') {
                if (lpageLoader.length) {
                    lpageLoader.fadeOut(250);
                }
            }
        },
        // Handles blocks API functionality
        uiBlocks: function (block, mode, button) {
            // Set default icons for fullscreen and content toggle buttons
            var iconFullscreen         = 'si si-size-fullscreen';
            var iconFullscreenActive   = 'si si-size-actual';
            var iconContent            = 'si si-arrow-up';
            var iconContentActive      = 'si si-arrow-down';

            if (mode === 'init') {
                // Auto add the default toggle icons
                switch(button.data('action')) {
                    case 'fullscreen_toggle':
                        button.html('<i class="' + (button.closest('.block').hasClass('block-opt-fullscreen') ? iconFullscreenActive : iconFullscreen) + '"></i>');
                        break;
                    case 'content_toggle':
                        button.html('<i class="' + (button.closest('.block').hasClass('block-opt-hidden') ? iconContentActive : iconContent) + '"></i>');
                        break;
                    default:
                        return false;
                }
            } else {
                // Get block element
                var elBlock = (block instanceof jQuery) ? block : jQuery(block);

                // If element exists, procceed with blocks functionality
                if (elBlock.length) {
                    // Get block option buttons if exist (need them to update their icons)
                    var btnFullscreen  = jQuery('[data-js-block-option][data-action="fullscreen_toggle"]', elBlock);
                    var btnToggle      = jQuery('[data-js-block-option][data-action="content_toggle"]', elBlock);

                    // Mode selection
                    switch(mode) {
                        case 'fullscreen_toggle':
                            elBlock.toggleClass('block-opt-fullscreen');

                            // Enable/disable scroll lock to block
                            if (elBlock.hasClass('block-opt-fullscreen')) {
                                jQuery(elBlock).scrollLock('enable');
                            } else {
                                jQuery(elBlock).scrollLock('disable');
                            }

                            // Update block option icon
                            if (btnFullscreen.length) {
                                if (elBlock.hasClass('block-opt-fullscreen')) {
                                    jQuery('i', btnFullscreen)
                                        .removeClass(iconFullscreen)
                                        .addClass(iconFullscreenActive);
                                } else {
                                    jQuery('i', btnFullscreen)
                                        .removeClass(iconFullscreenActive)
                                        .addClass(iconFullscreen);
                                }
                            }
                            break;
                        case 'fullscreen_on':
                            elBlock.addClass('block-opt-fullscreen');

                            // Enable scroll lock to block
                            jQuery(elBlock).scrollLock('enable');

                            // Update block option icon
                            if (btnFullscreen.length) {
                                jQuery('i', btnFullscreen)
                                    .removeClass(iconFullscreen)
                                    .addClass(iconFullscreenActive);
                            }
                            break;
                        case 'fullscreen_off':
                            elBlock.removeClass('block-opt-fullscreen');

                            // Disable scroll lock to block
                            jQuery(elBlock).scrollLock('disable');

                            // Update block option icon
                            if (btnFullscreen.length) {
                                jQuery('i', btnFullscreen)
                                    .removeClass(iconFullscreenActive)
                                    .addClass(iconFullscreen);
                            }
                            break;
                        case 'content_toggle':
                            elBlock.toggleClass('block-opt-hidden');

                            // Update block option icon
                            if (btnToggle.length) {
                                if (elBlock.hasClass('block-opt-hidden')) {
                                    jQuery('i', btnToggle)
                                        .removeClass(iconContent)
                                        .addClass(iconContentActive);
                                } else {
                                    jQuery('i', btnToggle)
                                        .removeClass(iconContentActive)
                                        .addClass(iconContent);
                                }
                            }
                            break;
                        case 'content_hide':
                            elBlock.addClass('block-opt-hidden');

                            // Update block option icon
                            if (btnToggle.length) {
                                jQuery('i', btnToggle)
                                    .removeClass(iconContent)
                                    .addClass(iconContentActive);
                            }
                            break;
                        case 'content_show':
                            elBlock.removeClass('block-opt-hidden');

                            // Update block option icon
                            if (btnToggle.length) {
                                jQuery('i', btnToggle)
                                    .removeClass(iconContentActive)
                                    .addClass(iconContent);
                            }
                            break;
                        case 'refresh_toggle':
                            elBlock.toggleClass('block-opt-refresh');

                            // Return block to normal state if the demostration mode is on in the refresh option button - data-action-mode="demo"
                            if (jQuery('[data-js-block-option][data-action="refresh_toggle"][data-action-mode="demo"]', elBlock).length) {
                                setTimeout(function(){
                                    elBlock.removeClass('block-opt-refresh');
                                }, 2000);
                            }
                            break;
                        case 'state_loading':
                            elBlock.addClass('block-opt-refresh');
                            break;
                        case 'state_normal':
                            elBlock.removeClass('block-opt-refresh');
                            break;
                        case 'close':
                            elBlock.hide();
                            break;
                        case 'open':
                            elBlock.show();
                            break;
                        default:
                            return false;
                    }
                }
            }
        }
    };
});

// Run our App
App.run(function($rootScope, uiHelpers, $state, userFactory, $localStorage, $window) {
    $rootScope.$on('$stateChangeStart', function (event, next, current) {
        if (!next.data.restricted) {
            return;
        }

        if (userFactory.isLoggedIn()) {
            $rootScope.$broadcast('loginSuccess');
            return;
        }

        userFactory.getSessionData()
        .then(function (user) {

            if (!user) {
                event.preventDefault()
                $state.go('login');
                return;
            }

            $localStorage.user = user.user;
        })
        .catch(function (err) {
            $state.go('login');
            return;
        })
    });
    // Access uiHelpers easily from all controllers
    $rootScope.helpers = uiHelpers;

    // On window resize or orientation change resize #main-container & Handle scrolling
    var resizeTimeout;

    jQuery(window).on('resize orientationchange', function () {
        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(function(){
            $rootScope.helpers.uiHandleScroll();
            $rootScope.helpers.uiHandleMain();
        }, 150);
    });
});

// Application Main Controller
App.controller('AppCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // Template Settings
        $scope.oneui = {
            version: '3.1', // Template version
            localStorage: true, // Enable/Disable local storage
            settings: {
                activeColorTheme: false, // Set a color theme of your choice, available: 'amethyst', 'city, 'flat', 'modern' and 'smooth'
                sidebarLeft: true, // true: Left Sidebar and right Side Overlay, false: Right Sidebar and left Side Overlay
                sidebarOpen: true, // Visible Sidebar by default (> 991px)
                sidebarOpenXs: false, // Visible Sidebar by default (< 992px)
                sidebarMini: true, // Mini hoverable Sidebar (> 991px)
                sideOverlayOpen: false, // Visible Side Overlay by default (> 991px)
                sideOverlayHover: true, // Hoverable Side Overlay (> 991px)
                sideScroll: true, // Enables custom scrolling on Sidebar and Side Overlay instead of native scrolling (> 991px)
                headerFixed: true // Enables fixed header
            }
        };

        // If local storage setting is enabled
        if ($scope.oneui.localStorage) {
            // Save/Restore local storage settings
            if ($scope.oneui.localStorage) {
                if (angular.isDefined($localStorage.oneuiSettings)) {
                    $scope.oneui.settings = $localStorage.oneuiSettings;
                } else {
                    $localStorage.oneuiSettings = $scope.oneui.settings;
                }
            }

            // Watch for settings changes
            $scope.$watch('oneui.settings', function () {
                // If settings are changed then save them to localstorage
                $localStorage.oneuiSettings = $scope.oneui.settings;
            }, true);
        }

        // Watch for activeColorTheme variable update
        $scope.$watch('oneui.settings.activeColorTheme', function () {
            // Handle Color Theme
            $scope.helpers.uiHandleColorTheme($scope.oneui.settings.activeColorTheme);
        }, true);

        // Watch for sideScroll variable update
        $scope.$watch('oneui.settings.sideScroll', function () {
            // Handle Scrolling
            setTimeout(function () {
                $scope.helpers.uiHandleScroll();
            }, 150);
        }, true);

        // When view content is loaded
        $scope.$on('$viewContentLoaded', function () {
            // Hide page loader
            $scope.helpers.uiLoader('hide');

            // Resize #main-container
            $scope.helpers.uiHandleMain();
        });
    }
]);


/*
 * Partial views controllers
 *
 */

// Side Overlay Controller
App.controller('SideOverlayCtrl', ['$scope', '$localStorage', '$window',
    function ($scope, $localStorage, $window) {
        // When view content is loaded
        $scope.$on('$includeContentLoaded', function () {
            // Handle Scrolling
            $scope.helpers.uiHandleScroll();
        });
    }
]);

// Sidebar Controller
App.controller('SidebarCtrl', ['$scope', '$localStorage', '$window', '$location',
    function ($scope, $localStorage, $window, $location) {
        // When view content is loaded
        $scope.$on('$includeContentLoaded', function () {
            // Handle Scrolling
            $scope.helpers.uiHandleScroll();

            // Get current path to use it for adding active classes to our submenus
            $scope.path = $location.path();
        });
    }
]);

// Header Controller
App.controller('HeaderCtrl', ['$rootScope', '$scope', '$localStorage', 'userFactory', '$state',
    function ($rootScope, $scope, $localStorage, userFactory, $state) {
        // When view content is loaded
        $scope.$on('$includeContentLoaded', function () {
            // Transparent header functionality
            $scope.helpers.uiHandleHeader();

            var setUser = function () {
                $scope.user = $localStorage.user;
            };

            $scope.isLoggedIn = function(){
                return Boolean(userFactory.isLoggedIn())
            };

            $scope.submitLogout = function(){
                return userFactory.logout()
                    .then(function(result){
                        delete $localStorage.user;
                        $state.go('login');
                    })
            };
            $rootScope.$on('loginSuccess', setUser)
        });
    }
]);
