new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            signUpText: "Add your name to the guest list for <em>exclusive offers:</em>",
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        },
        newNameText: '',
        guestName: ['Cynthia', 'Buddy', 'Kiwi'],
        formSubmitClass: "",
        appStyles: {
            marginTop: '25px'
        }
    },
    methods: {
        formSubmitted: function() {
            if (this.newNameText.length) {
                this.guestName.push(this.newNameText);
                this.newNameText = '';
                this.formSubmitClass = "submitted"
            }        
        }
    }
});