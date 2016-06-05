//---------
//templates & components
//---------
var home = Vue.extend({
  template: '<h2>Home</h2>' + 
  '<h3>{{ message }}</h3>' +
  '<div class="dummyText"><br><p>{{ dummyText }}</p><br><p>{{ dummyText }}</p></div>' +
  '<div v-bind:style="{background: backgroundImage}" class="headerImage"></div>',

  data: function() {
    return {
      message: 'Welcome to the homepage!',
      dummyText: 'My name is Rod, and I like to party. So I galloped into a wooded glen, and after punch-dancing out my rage and suffering an extremely long and very painful fall, I realized what has to be done. The safe word is WHiskey. Oh, man, he hit his ass with a parking cone! Nice. Prepare to be dazzled! The dog walked itself home, ate a pizza and took a nap. I used to be legit. I was too legit. I was too legit to quit. but now I\'m not legit. I\'m unlegit. And for that reason, I must quit. The dog walked itself home, ate a pizza and took a nap. What\'s going on? Is this some sort of interactive theatre art piece? It\'s bouncing around the Web like a beachball at a Nickelback concert. Hey, Rod, what\'s that song about a grandma getting run over by a reindeer? All great men have mustaches! I\'m freakin pumped! I\'ve been drinking green tea all goddamn day! Mom, have you seen my hip pads? What\'s going on? Is this some sort of interactive theatre art piece? I used to be legit. I was too legit. I was too legit to quit. but now I\'m not legit. I\'m unlegit. And for that reason, I must quit. My name is Rod, and I like to party. Who wants to see me do a big-ass stunt? I\'m going in for a Vitamin Water, should I make that dos? Now I don\'t want to say that kiss was hot, but if the boner police are here, I want a lawyer! Hey, Rod, what\'s that song about a grandma getting run over by a reindeer? The safe word is WHiskey. Funky Fresh. My name is Rod, and I like to party. This is my hat now! This is totally my hat!',
      backgroundImage: "url(https://pixabay.com/static/uploads/photo/2014/02/25/22/06/staircase-274614_960_720.jpg)"
    }
  }
});

//keep data persistent on routing to new pages
//NOTE: all data passed to and from vue must be in an object
var todoData = [
  { todo: 'Learn Vue.js' },
  { todo: '...????...' },
  { todo: 'Profit!' }
], 
    toDo = Vue.extend({
      template: '<h2>To Do</h2>' + 
      '<div><b>Todo text:</b> {{ newTodo }}</div>' + 
      '<input v-model="newTodo" v-on:keyup.enter="addTodo"><button v-model="newTodo" v-on:click="addTodo">Add Todo</button>' + 
      '<div class="flexwrap" v-for="todo in todos">' + 
      '<div class="cell">{{ todo.todo }}</div>' + 
      '<div class="cell"><button v-on:click="removeTodo($index)">X</button></div>' + 
      '</div>' +   
      '</div>' +
      '<div v-bind:style="{background: backgroundImage}" class="headerImage"></div>',

      data: function() {
        return {
          newTodo: '',
          todos: todoData,
          backgroundImage: "url(https://pixabay.com/static/uploads/photo/2014/04/09/12/09/sunrise-320079_960_720.jpg)"
        }
      },

      methods: {
        addTodo: function () {
          var todo = this.newTodo.trim();

          if(todo) {
            this.todos.push({ todo: todo });
            this.newTodo = '';
          }
        },

        removeTodo: function (index) {
          this.todos.splice(index, 1)
        }
      }
    });

var welvin = Vue.extend({
  template: '<h2>Welvin Da Great</h2>' + 
  '<img v-for="img in images" src="{{ img }}"/>' +
  '<div v-bind:style="{background: backgroundImage}" class="headerImage"></div>',

  data: function() {
    return {
      images: [
        'http://www.fammtv.com/uploads/5/1/4/5/51453877/9368230_orig.jpg',
        'http://media.galaxant.com/000/168/938/desktop-1429726901.jpg',
        'http://www.rippdemup.com/wp-content/uploads/2015/05/welven-da-great-imstagram_940x.jpg',
        'http://huzlers.com/wp-content/uploads/2015/11/IMG_1868.jpg'
      ],
      backgroundImage: "url(https://pixabay.com/static/uploads/photo/2015/04/26/17/45/moss-740735_960_720.jpg)"
    }
  }
});

//keep data persistent on routing to new pages
//NOTE: all data passed to and from vue must be in an object
var ajaxResponseData = {people: []},
    pageIteratorData = {page: 1},
    ajaxRequest = Vue.extend({
      ready: function() {        
        if(this.pageIterator.page === 1) {
          this.ajaxCall();
        }
      },

      template: '<h2>Ajax Request</h2>' +
      '<button v-model="ajaxRequest" v-on:click="loadMore">Load More People</button>' +
      '<input placeholder="Search a Name" v-model="search" v-on:keyup="inputChange"/>' +
      '<button v-model="ajaxRequest" v-on:click="resetInput">Reset</button>' +
      '<h3>AJAX response:</h3>' + 
      '<div class="people">' +
      '<div class="person" v-for="person in ajaxResponse.people" data-info="{{ person.name.toLowerCase() }}">' + 
      '<div class="name">{{ person.name }}</div>' + 
      '<div class="hidden">' +
      '<div>{{ person.weight }}KG</div>' +   
      '<div>{{ person.height }}CM</div>' + 
      '<div>{{ person.eyes }} eyes</div>' + 
      '<div>{{ person.hair }} hair</div>' + 
      '<div>{{ person.hair }} skin</div>' + 
      '</div>' +
      '</div>' +
      '</div>' +
      '<div v-bind:style="{background: backgroundImage}" class="headerImage"></div>',

      data: function() {
        return {
          pageIterator: pageIteratorData,
          ajaxResponse: ajaxResponseData,
          search: "",
          backgroundImage: "url(https://pixabay.com/static/uploads/photo/2013/08/17/14/32/sunrise-173392_960_720.jpg)"
        }
      },

      methods: {
        ajaxCall: function() {
          var self = this;

          $.ajax({
            url: "http://swapi.co/api/people?page="+ self.pageIterator.page++, //iterate here becuase 'fancy'
            complete: function(response) {
              //console.log(response);
              self.parseAjax(response);              
              //console.log(self.pageIterator.page);
            }
          })
        },

        parseAjax: function(response) {
          var self = this;

          $.each(response.responseJSON.results, function(i, result) {
            console.log(result);

            self.ajaxResponse.people.push({
              name: result.name,
              height: result.height,
              weight: result.mass,
              eyes: result.eye_color,
              hair: result.hair_color,
              skin: result.skin_color
            });
          })      
        },

        loadMore: function() {
          this.ajaxCall();
        },

        resetInput: function() {
          this.search = "";
          $(".person").show();
        },

        inputChange: function() {  
          if(this.search != "") {
            $(".person").hide();
            $('[data-info*="' + this.search.toLowerCase() + '"]').show();

          } else {
            $(".person").show();
          }
        }
      }
    });

//---------
//base vue stuff
//---------
Vue.config.debug = true;
var app = new Vue({});

//---------
//Router
//---------
Vue.use(VueRouter);
var router = new VueRouter();

router.map({
  '/': {
    component: home
  },
  '/home': {
    component: home
  },
  '/toDo': {
    component: toDo
  },
  '/welvin': {
    component: welvin
  },
  '/ajaxRequest': {
    component: ajaxRequest
  }
});

//start vue app with router
router.start(app, "#vueApp");