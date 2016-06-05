/*

    todo
    -----
    Reset funcitonality
    "Are you sure?" modal

  */

//---------
// Global Data
//---------
var hitsRef  = new Firebase("https://vue-hit-counter.firebaseio.com/hits"),
    timersRef  = new Firebase("https://vue-hit-counter.firebaseio.com/timers"),

    newHit = {
      hitName: "",
      hitCounter: 0,
      currentTimestamp: "",
      timestampHistory: {},
      historyOrder: 1
    },

    newTimer = {
      timerName: "",
      timerCounter: 0,
      currentTimestamp: "",
      timestampHistory: {},
      historyOrder: 1,
      started: false
    },

    newUser = {
      username: "",
      online: true
    };

//---------
// Components
//---------
var hits = Vue.extend({
  template: '<h1 class="hero">Hit Counters</h1>' +
  '<div class="hitsWrapper">' +
  '<button class="newHit" @click="goToHitForm()">Create New Hit</button>' +
  '<div class="hitsFlexContainer">' +
  '<div class="hit" v-for="hit in hits" data-color="{{ hit.hitCounter | hitColor }}">' +
  '<div class="left">' +
  '<div class="upvote" @click="incrimentHit(hit[\'.key\'], hit[\'hitCounter\'], hit[\'currentTimestamp\'], hit[\'historyOrder\'])"></div>' +
  '<p class="hitCounter">{{ hit.hitCounter }}</p>' +
  '<div class="downvote" @click="decrementHit(hit[\'.key\'], hit[\'hitCounter\'], hit[\'currentTimestamp\'], hit[\'historyOrder\'])"></div>' +
  '</div>' +
  '<div class="right">' +
  '<h2>{{ hit.hitName }}</h2>' +
  '<div class="historyTitle">Last Modified</div>' +
  '<p>{{ hit.currentTimestamp }}</p>' +
  '<div class="removeHit" @click="removeHit(hit[\'.key\'])"></div>' +
  '<div class="historyTitle">History</div>' +
  '<div class="timestampHistoryWrapper">' +
  '<div class="timestampHistory" v-for="timestamp in hit.timestampHistory | orderBy \'order\' -1">' +
  '#{{timestamp.order}}: {{ timestamp.activity }}' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>',

  methods: {
    timestamp: function() {
      var date = new Date();

      function formatDate(date) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        var day         = date.getDate(),
            monthIndex  = date.getMonth(),
            year        = date.getFullYear();

        return monthNames[monthIndex] + " " + day + ", " +  year
      }

      function formatTime(date) {
        var hour    = date.getHours(),
            minute  = date.getMinutes(),
            amPM    = (hour > 11) ? "pm" : "am";

        if(hour > 12) {
          hour -= 12;
        } else if(hour == 0) {
          hour = "12";
        }
        if(minute < 10) {
          minute = "0" + minute;
        }

        return hour + ":" + minute + amPM;
      }

      return formatTime(date) + " " + formatDate(date)
    },

    removeHit: function(key) {
      hitsRef.child(key).remove();
    },

    incrimentHit: function(key, count, currentTimestamp, historyOrder) {
      var historyTimestamp = currentTimestamp;

      hitsRef.child(key).child("timestampHistory").push({
        activity: historyTimestamp,
        order: historyOrder
      });

      hitsRef.child(key).update({
        hitCounter: count + 1,
        currentTimestamp: "Incrimented " + this.timestamp(),
        historyOrder: historyOrder + 1
      });

    },

    decrementHit: function(key, count, currentTimestamp, historyOrder) {
      var historyTimestamp = currentTimestamp;

      if(count <= 0) {
        return;
      }

      hitsRef.child(key).child("timestampHistory").push({
        activity: historyTimestamp,
        order: historyOrder
      });


      hitsRef.child(key).update({
        hitCounter: count - 1,
        currentTimestamp: "Decremented " + this.timestamp(),
        historyOrder: historyOrder + 1
      });
    },

    goToHitForm: function() {
      router.go("/hitForm");
    }
  },

  filters: {
    hitColor: function(votes) {
      if(votes < 1) {
        votes = "red";
      } else if(votes === 0) {
        votes = "gray";
      } else if(votes >= 1 && votes <= 4) {
        votes = "yellow";
      } else if(votes >= 5) {
        votes = "green";
      }

      return votes;
    }
  },

  firebase: {
    hits: hitsRef.limitToLast(25)
  }
});

var hitForm = Vue.extend({
  ready: function() {
    document.getElementsByClassName("hitInput")[0].focus();
  },

  data: function() {
    return {
      newHit: newHit
    }
  },

  template: '<div class="hitsWrapper">' +
  '<h2 class="name">Name your hit</h2>' + 
  '<p class="original">(Try to be original)</p>' +
  '<input class="hitInput" @keyup.enter="addHit()" v-model="newHit.hitName" placeholder="Hit Name"/>' +
  '<button @click="addHit()">Create</button>' +
  '<h3>Current hits: {{ hits.length }}</h3>' +
  '<span class="currentHits" v-for="hit in hits">' +
  '{{ hit.hitName }}: {{ hit.hitCounter }}' +
  '</span>' +
  '<button class="backToHits" @click="goToHits()">Go Back to Hits & Timers</button>' +
  '</div>',

  methods: {
    timestamp: function() {
      var date = new Date();

      function formatDate(date) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        var day         = date.getDate(),
            monthIndex  = date.getMonth(),
            year        = date.getFullYear();

        return monthNames[monthIndex] + " " + day + ", " +  year
      }

      function formatTime(date) {
        var hour    = date.getHours(),
            minute  = date.getMinutes(),
            amPM    = (hour > 11) ? "pm" : "am";

        if(hour > 12) {
          hour -= 12;
        } else if(hour == 0) {
          hour = "12";
        }
        if(minute < 10) {
          minute = "0" + minute;
        }

        return hour + ":" + minute + amPM;
      }

      return formatTime(date) + " " + formatDate(date)
    },

    addHit: function() {
      if (this.newHit.hitName.trim() != "") {
        hitsRef.push({
          hitName: this.newHit.hitName,
          hitCounter: 0,
          currentTimestamp: "Created " + this.timestamp(),
          timestampHistory: [],
          historyOrder: 1
        });

        this.newHit.hitName = "";
        this.newHit.timestamp = "";

        router.go("/");
      }
    },

    goToHits: function() {
      router.go("/");
    }
  },

  firebase: {
    hits: hitsRef.limitToLast(25)
  }
});

var timers = Vue.extend({
  template: '<h1 class="hero">Timers</h1>' +
  '<div class="timersWrapper">' +
  '<button class="newTimer" @click="goToTimerForm()">Create New Timer</button>' +
  '<div class="timersFlexContainer">' +
  '<div class="timer" v-for="timer in timers" data-color="{{ timer.timerCounter | timerColor }}">' +
  '<div class="left">' +
  '<button @click="startTimer(timer[\'.key\'], timer[\'timerCounter\'], timer[\'currentTimestamp\'], timer[\'historyOrder\'])" v-show="!timer.started">Start Timer</button>' +
  '<button @click="stopTimer(timer[\'.key\'], timer[\'currentTimestamp\'], timer[\'historyOrder\'])" v-show="timer.started">Stop Timer</button>' +
  '<h2>{{ timer.timerCounter | formatCounterTime }}</h2>' +
  '</div>' +
  '<div class="right">' +
  '<h2>{{ timer.timerName }}</h2>' +
  '<div class="historyTitle">Last Modified</div>' +
  '<p>{{ timer.currentTimestamp }}</p>' +
  '<div class="removeTimer" @click="removeTimer(timer[\'.key\'])"></div>' +
  '<div class="historyTitle">History</div>' +
  '<div class="timestampHistoryWrapper">' +
  '<div class="timestampHistory" v-for="timestamp in timer.timestampHistory | orderBy \'order\' -1">' +
  '#{{timestamp.order}}: {{ timestamp.activity }}' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>',

  methods: {
    timestamp: function() {
      var date = new Date();

      function formatDate(date) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        var day         = date.getDate(),
            monthIndex  = date.getMonth(),
            year        = date.getFullYear();

        return monthNames[monthIndex] + " " + day + ", " +  year
      }

      function formatTime(date) {
        var hour    = date.getHours(),
            minute  = date.getMinutes(),
            amPM    = (hour > 11) ? "pm" : "am";

        if(hour > 12) {
          hour -= 12;
        } else if(hour == 0) {
          hour = "12";
        }
        if(minute < 10) {
          minute = "0" + minute;
        }

        return hour + ":" + minute + amPM;
      }

      return formatTime(date) + " " + formatDate(date)
    },

    removeTimer: function(key) {
      var keyRecord = timersRef.child(key);
      clearInterval(this.timerInterval[key]);
      keyRecord.remove();
      keyRecord.onDisconnect().cancel();
    },

    startTimer: function(key, timerCounter, currentTimestamp, historyOrder) {
      var keyRecord = timersRef.child(key),
          historyTimestamp = currentTimestamp,
          self = this;

      keyRecord.child("timestampHistory").push({
        activity: historyTimestamp,
        order: historyOrder
      });

      keyRecord.update({
        started: true,
        currentTimestamp: "Started " + this.timestamp(),
        historyOrder: historyOrder + 1
      });

      keyRecord.onDisconnect().update({
        started: false
      });

      this.timerInterval[key] = setInterval(function() { 
        keyRecord.on("value", function(snapshot) {    
          if(snapshot.val()) {
            if(snapshot.val().started === false) {
              clearInterval(self.timerInterval[key]);
            }
          }
        });

        keyRecord.update({
          timerCounter: timerCounter + 1
        });

        timerCounter = timerCounter + 1;
      }, 1000);
    },

    stopTimer: function(key, currentTimestamp, historyOrder) {
      var keyRecord = timersRef.child(key),
          historyTimestamp = currentTimestamp;

      keyRecord.child("timestampHistory").push({
        activity: historyTimestamp,
        order: historyOrder
      });

      keyRecord.update({
        started: false,
        currentTimestamp: "Stopped " + this.timestamp(),
        historyOrder: historyOrder + 1
      });

      clearInterval(this.timerInterval[key]);
    },

    goToTimerForm: function() {
      router.go("/timerForm");
    }
  },

  filters: {
    timerColor: function(votes) {
      if(votes < 1) {
        votes = "red";
      } else if(votes === 0) {
        votes = "gray";
      } else if(votes >= 1 && votes <= 4) {
        votes = "yellow";
      } else if(votes >= 5) {
        votes = "green";
      }

      return votes;
    },

    formatCounterTime: function(timeInSeconds) {
      d = Number(timeInSeconds);
      var h = Math.floor(d / 3600);
      var m = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);
      return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
    }
  },

  data: function() {
    return {
      timerInterval: []
    }
  },

  firebase: {
    timers: timersRef.limitToLast(25)
  }
});

var timerForm = Vue.extend({
  ready: function() {
    document.getElementsByClassName("timerInput")[0].focus();  
  },

  data: function() {
    return {
      newTimer: newTimer
    }
  },

  template: '<div class="timersWrapper">' +
  '<h2 class="name">Name your timer</h2>' + 
  '<p class="original">(Try to be original)</p>' +
  '<input class="timerInput" @keyup.enter="addTimer()" v-model="newTimer.timerName" placeholder="Timer Name"/>' +
  '<button @click="addTimer()">Create</button>' +
  '<h3>Current timers: {{ timers.length }}</h3>' +
  '<span class="currentTimers" v-for="timer in timers">' +
  '{{ timer.timerName }}: {{ timer.timerCounter | formatCounterTime }}' +
  '</span>' +
  '<button class="backToTimers" @click="goToTimers()">Go Back to Hits & Timers</button>' +
  '</div>'
  // '<pre>{{ newHit | json }}</pre>'
  ,

  methods: {
    timestamp: function() {
      var date = new Date();

      function formatDate(date) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        var day         = date.getDate(),
            monthIndex  = date.getMonth(),
            year        = date.getFullYear();

        return monthNames[monthIndex] + " " + day + ", " +  year
      }

      function formatTime(date) {
        var hour    = date.getHours(),
            minute  = date.getMinutes(),
            amPM    = (hour > 11) ? "pm" : "am";

        if(hour > 12) {
          hour -= 12;
        } else if(hour == 0) {
          hour = "12";
        }
        if(minute < 10) {
          minute = "0" + minute;
        }

        return hour + ":" + minute + amPM;
      }

      return formatTime(date) + " " + formatDate(date)
    },

    addTimer: function() {
      if (this.newTimer.timerName.trim() != "") {
        timersRef.push({
          timerName: this.newTimer.timerName,
          timerCounter: 0,
          currentTimestamp: "Created " + this.timestamp(),
          timestampHistory: [],
          historyOrder: 1,
          started: false
        });

        this.newTimer.timerName = "";
        this.newTimer.timestamp = "";

        router.go("/");
      }
    },

    goToTimers: function() {
      router.go("/");
    }
  },

  filters: {
    formatCounterTime: function(timeInSeconds) {
      d = Number(timeInSeconds);
      var h = Math.floor(d / 3600);
      var m = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);
      return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
    }
  },

  firebase: {
    timers: timersRef.limitToLast(25)
  }
});

Vue.component('hits', hits);
Vue.component('timers', timers);
var homepage = Vue.extend({
  template: "<hits></hits>" +
  "<timers></timers>"
});

//---------
// Router
//---------
var router = new VueRouter();
router.map({
  '/': {
    component: homepage
  },

  '/timerForm': {
    component: timerForm
  },

  '/hitForm': {
    component: hitForm
  }
})
router.start(Vue, '#vue');