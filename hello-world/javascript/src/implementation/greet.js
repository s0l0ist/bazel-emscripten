/**
 * @implements Greet
 */
export const GreetImpl = (library) => {
  /**
   * @interface Greet
   */
  return {
    /**
     * Greet a name
     *
     * @function
     * @name Greet.sayHello
     * @param {String} name Name of the person to greet
     * @returns {String} The greet phrase
     */
    sayHello(name = "World") {
      return library.Greet.SayHello(name);
    },
  };
};
