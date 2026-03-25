/**
 * Checks is Alpine is initialized, then creates a new Alpine component called "counter
 * "alpine:init" this is the event name
 */
document.addEventListener("alpine:init", () => {

    /**
     * Here we create the data. The first argument is the name of the component, in this case 
     * "counter". The second argument is a function that returns our data object.
     */
	Alpine.data("counter", () => ({
		count: 0,
		name: "Mario",

        /**
         * data in Alpine can store fuctions too.
         */
		logCount() {
			console.log("The count is currently", this.count);
		},
	}));
});
