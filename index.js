document.addEventListener('alpine:init', () => {
    Alpine.data('signupForm', () => ({
        username: '',
        password: '',
        passwordConfirm: '',
        belt: '',
        bio: '',
        newsletter: true,
        showPass: false,

        /**
         * We collect here the validation errors.
         */
        errors: {},

        /**
         * This is a function inside data. 
         */
        validateForm() {


            this.errors = {}

            if (this.username.length < 3) {
                this.errors.username = 'Username must be at least 3 characters.'
            }
            if (this.password.length < 6) {
                this.errors.password = 'Password must be at least 6 characters.'
            }
            if (this.password !== this.passwordConfirm) {
                this.errors.passwordConfirm = 'Passwords do not match.'
            }
            if (!this.belt) {
                this.errors.belt = 'Please select a belt color.'
            }
            if (this.bio.length < 10) {
                this.errors.bio = 'Bio must be at least 10 characters.'
            }
        },

        /**
         * Alpine gives us the $event object inside any event handler function. We can use this, we
         * do not have to. If we want to use it, the we must do submitForm($event)...
         */
        submitForm($event) {

            //Before submitting, we trigger the validation function.
            this.validateForm();
            console.log(this.errors)

            /**
             * After successful submission, we reset the form fields. If... there are no errors.
             * Aka, no errors in the this.errors object. In this case, the $event is the submit event,
             * and we can use $event.target.reset() to reset the form. 
             */
            if (Object.keys(this.errors).length === 0) {
                console.log(this.username, this.password, this.belt, this.bio, this.newsletter)

                $event.target.reset()
            }
        }
    }))
})