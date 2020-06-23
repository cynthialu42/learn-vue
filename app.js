var vm1 = new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            signUpText: "Add your name to the guest list for <em>exclusive offers:</em>",
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        },
        newNameText: '',
        guestName: [],
        // formSubmitClass: "",
        eventCapacity: 5,
        eventCapacityPercentage: 0
    },
    methods: {
        formSubmitted: function() {
            if (this.newNameText.length && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText);
                this.newNameText = '';
                // this.formSubmitClass = "submitted"
                this.eventCapacityPercentage = (this.guestName.length / this.eventCapacity) * 100
            }        
        },
        keyPressed: function() {
            console.log('key pressed');
        }
    },
    computed: {
        // computed can't do async funcs
        sortNames: function() {
            return this.guestName.sort()
        }
    },
    watch: {
        // must match an existing data object
        // this func will execute when guestName changes, it will pass in paramters
        // keep this in computed for efficiency
        // use watch for APIs instead
        guestName: function(data) {
            // it's being called twice bc it's changed in a mthod and in a computed function.
            console.log('data', data);
        }
    },
    filters: {
        toUpper: function(name) {
            return name.toUpperCase();
        },
        formatName: function(name) {
            return name + '!'
        }
    }
});

var vm2 = new Vue({
    el: '#navigation',
    data: {
        appName: 'Guest List',
        navLinks: [
            {
                name: "Home",
                id: 1,
                url: 'https://www.google.com'
            },
            {
                name: "Upcoming Events",
                id: 2,
                url: 'https://www.google.com'
            },
            {
                name: "Guest Benefits",
                id: 3,
                url: 'https://www.google.com'
            },
            {
                name: "Latest News",
                id: 4,
                url: 'https://www.google.com'
            }
        ]
    },
    methods: {
        capacityChanged: function() {
            vm1.eventCapacity = 15;
        },
        changeTitle: function() {
            this.$refs.name.innerText = 'New Title'
        }
    }
})