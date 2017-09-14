// blog factory
App.factory('blogFactory', function ($http) {
    var extractData = function (res) {
        return res.data;
    };

    return {
        getSinglePost: function (postId) {
            return $http.get('/blog/single/post/' + postId)
                .then(extractData)
        },
        getAllPosts: function () {
            return $http.get('/blog/all/posts')
                .then(extractData)
        },
        getAllPublicPosts: function () {
            return $http.get('/blog/all/public/posts')
                .then(extractData)
        },
        createPost: function (post) {
            return $http.post('/blog/create/post', post)
                .then(extractData)
        },
        updatePost: function (post) {
            return $http.put('/blog/update/post', post)
                .then(extractData)
        },
        deletePost: function (postId) {
            return $http.delete('/blog/delete/post/' + postId)
                .then(extractData)
        }
    }
});

App.factory('mailchimpFactory', function ($http) {
    var extractData = function (res) {
        return res.data;
    };

    return {
        newSignup: function (newUser) {
            return $http.post('/mailchimp/free-coupon', newUser)
                .then(extractData)
        }
    }
});

// tutorial factory
App.factory('tutorialFactory', function ($http) {
    var extractData = function (res) {
        return res.data;
    };

    return {
        getSingleTutorial: function (postId) {
            return $http.get('/tutorial/single/post/' + postId)
                .then(extractData)
        },
        getAllTutorials: function () {
            return $http.get('/tutorial/all/posts')
                .then(extractData)
        },
        getAllPublicTutorials: function () {
            return $http.get('/tutorial/all/public/posts')
                .then(extractData)
        },
        createTutorial: function (post) {
            return $http.post('/tutorial/create/post', post)
                .then(extractData)
        },
        updateTutorial: function (post) {
            return $http.put('/tutorial/update/post', post)
                .then(extractData)
        },
        deleteTutorial: function (postId) {
            return $http.delete('/tutorial/delete/post/' + postId)
                .then(extractData)
        }
    }
});

// user factory
App.factory('userFactory', function ($http, $localStorage) {
    var extractData = function (res) {
        return res.data;
    };
    var setCurrentUser = function(user){
  		$localStorage.user = user.user;
  		return user;
  	}

    return {
      login: function (user) {
          return $http.post('/auth/login/', user)
              .then(extractData)
              .then(setCurrentUser)
      },
      isLoggedIn: function(){
        return $localStorage.user
      },
      getSessionData: function(){
			return $http.get('/auth/profile')
			.then(extractData)
			.then(setCurrentUser)
    },
      logout: function(){
        return $http.get('/auth/logout')
        .then(extractData)
        .then(setCurrentUser)
      },
      getSingleUser: function (userId) {
          return $http.get('/user/single/' + userId)
              .then(extractData)
      },
      getAllUsers: function () {
          return $http.get('/user/all/users')
              .then(extractData)
      },
      getAllSalesReps: function () {
          return $http.get('/user/all/salesReps')
              .then(extractData)
      },
      createUser: function (user) {
          return $http.post('/auth/signup', user)
              .then(extractData)
              .then(setCurrentUser)
      },
      updateUser: function (user) {
          return $http.put('/user/update', user)
              .then(extractData)
      },
      deleteUser: function (userId) {
          return $http.delete('/user/delete/' + userId)
              .then(extractData)
      }
  }
});

// book factory
App.factory('bookFactory', function ($http) {
    var extractData = function (res) {
        return res.data;
    };

    return {
        getSingleBook: function (bookId) {
            return $http.get('/book/single/' + bookId)
                .then(extractData)
        },
        getAllBooks: function () {
            return $http.get('/book/all/books')
                .then(extractData)
        },
        createBook: function (book) {
            return $http.post('/book/create', book)
                .then(extractData)
        },
        updateBook: function (book) {
            return $http.put('/book/update', book)
                .then(extractData)
        },
        deleteBook: function (bookId) {
            return $http.delete('/book/delete/' + bookId)
                .then(extractData)
        }
    }
});

App.factory('storeFactory', function ($http) {
    var extractData = function (res) {
        return res.data;
    };

    return {
        getSingleStore: function (storeId) {
            return $http.get('/store/single/' + storeId)
                .then(extractData)
        },
        getAllStores: function () {
            return $http.get('/store/all/stores')
                .then(extractData)
        },
        createStore: function (store) {
            return $http.post('/store/create', store)
                .then(extractData)
        },
        updateStore: function (store) {
            return $http.put('/store/update', store)
                .then(extractData)
        },
        deleteStore: function (storeId) {
            return $http.delete('/store/delete/' + storeId)
                .then(extractData)
        }
    }
});

App.factory('routeFactory', function ($http) {
    var extractData = function (res) {
        return res.data;
    };

    return {
        getSingleRoute: function (routeId) {
            return $http.get('/route/single/' + routeId)
                .then(extractData)
        },
        getAllRoutes: function () {
            return $http.get('/route/all/routes')
                .then(extractData)
        },
        createRoute: function (route) {
            return $http.post('/route/create', route)
                .then(extractData)
        },
        updateRoute: function (route) {
            return $http.put('/route/update', route)
                .then(extractData)
        },
        deleteRoute: function (routeId) {
            return $http.delete('/route/delete/' + routeId)
                .then(extractData)
        }
    }
});

App.factory('commentFactory', function ($http) {
    var extractData = function (res) {
        return res.data;
    };

    return {
        getSingleComment: function (commentId) {
            return $http.get('/comment/single/' + commentId)
                .then(extractData)
        },
        getAllComments: function (storeId) {
            return $http.get('/comment/all/' + storeId)
                .then(extractData)
        },
        createComment: function (comment) {
            return $http.post('/comment/create', comment)
                .then(extractData)
        },
        updateComment: function (comment) {
            return $http.put('/comment/update', comment)
                .then(extractData)
        },
        deleteComment: function (commentId) {
            return $http.delete('/comment/delete/' + commentId)
                .then(extractData)
        }
    }
});

// book factory
App.factory('orderFactory', function ($http) {
    var extractData = function (res) {
        return res.data;
    };

    return {
        getSingleOrder: function (orderId) {
            return $http.get('/order/single/' + orderId)
                .then(extractData)
        },
        getSingleUserOrder: function (userId) {
            return $http.get('/order/single/user/' + userId)
                .then(extractData)
        },
        getAllOrders: function () {
            return $http.get('/order/all/orders')
                .then(extractData)
        },
        createOrder: function (order) {
            return $http.post('/order/create', order)
                .then(extractData)
        },
        updateOrder: function (order) {
            return $http.put('/order/update', order)
                .then(extractData)
        },
        deleteOrder: function (orderId) {
            return $http.delete('/order/delete/' + orderId)
                .then(extractData)
        }
    }
});

//course factory
App.factory('courseFactory', function ($http) {
    var extractData = function (res) {
        return res.data;
    };

    return {
        getSingleCourse: function (courseId) {
            return $http.get('/course/single/' + courseId)
                .then(extractData)
        },
        getAllCourses: function () {
            return $http.get('/course/all/courses')
                .then(extractData)
        },
        createCourse: function (course) {
            return $http.post('/course/create', course)
                .then(extractData)
        },
        updateCourse: function (course) {
            return $http.put('/course/update', course)
                .then(extractData)
        },
        deleteCourse: function (courseId) {
            return $http.delete('/course/delete/' + courseId)
                .then(extractData)
        },
        getSingleUnit: function (unitId) {
          console.log(unitId)
            return $http.get('/course/unit/single/' + unitId)
                .then(extractData)
        },
        getAllUnits: function (courseId) {
            return $http.get('/course/unit/all/' + courseId)
                .then(extractData)
        },
        createUnit: function (unit) {
            return $http.post('/course/unit/create', unit)
                .then(extractData)
        },
        updateUnit: function (unit) {
            return $http.put('/course/unit/update', unit)
                .then(extractData)
        },
        deleteUnit: function (unitId) {
            return $http.delete('/course/unit/delete/' + unitId)
                .then(extractData)
        },
        getSingleLesson: function (lessonId) {
            return $http.get('/course/lesson/single/' + lessonId)
                .then(extractData)
        },
        getAllLessons: function (unitId) {
            return $http.get('/course/lesson/all/' + unitId)
                .then(extractData)
        },
        createLesson: function (lesson) {
            return $http.post('/course/lesson/create', lesson)
                .then(extractData)
        },
        updateLesson: function (lesson) {
            return $http.put('/course/lesson/update', lesson)
                .then(extractData)
        },
        deleteLesson: function (unitId, lessonId) {
            return $http.delete('/course/lesson/delete/' + unitId + '/' + lessonId)
                .then(extractData)
        }
    }
});


App.factory('cartFactory', function ($http, $localStorage) {
    function getCart (){
      return $localStorage.cartItems
    }

    function findByName(inArr, name, exists){
        for (i = 0; i < inArr.length; i++ ){
            if (inArr[i].title == name){
                inArr[i].quantity+=1
                return $localStorage.cartItems
            }
        }
    }

    function addItem(arr, name){
        for (i = 0; i < arr.length; i++ ){
            if (arr[i].title == name){
                arr[i].quantity+=1
                return $localStorage.cartItems
            }
        }
    }

    function minusItem(arr, name){
        for (i = 0; i < arr.length; i++ ){
            if (arr[i].title == name){
              if(arr[i].quantity > 1){
                arr[i].quantity-=1
              }
                return $localStorage.cartItems
            }
        }
    }

    function removeItem(arr, name){
        for (i = 0; i < arr.length; i++ ){
            if (arr[i].title == name){
              arr.splice(i, 1);
              console.log($localStorage.cartItems)
              return $localStorage.cartItems
            }
        }
    }

    function findtotalPrice(arr){
      var totalPrice = 0;
      for (i = 0; i < arr.length; i++ ){
          var productPrice = arr[i].price * arr[i].quantity
          totalPrice+=productPrice
      }
      return totalPrice
    }

    return {
        addToCart: function (product) {
          //items: Name, Quantity, Price
          var itemExists = findByName($localStorage.cartItems, product.title)
          if(!itemExists){
            $localStorage.cartItems.push(product)
          }
        },
        totalPrice:function(){
          var total = findtotalPrice($localStorage.cartItems)
          return total
        },
        increaseQuantity:function(product){
          return addItem($localStorage.cartItems, product.title)
        },
        decreaseQuantity:function(product){
          return minusItem($localStorage.cartItems, product.title)
        },
        removeItem:function(product){
          return removeItem($localStorage.cartItems, product.title)
        },
        getCart: function(){
          return getCart()
        }
    }
});
