/**
 * @implements LocalTime
 */
export const LocalTimeImpl = (library) => {
  /**
   * @interface LocalTime
   */
  return {
    /**
     * Prints the current time to the console
     *
     * @function
     * @name Client.now
     */
    now() {
      library.LocalTime.Now();
    },
  };
};
