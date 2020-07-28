export default class Utils {

  /**
   * When the method is called it'll check if the parameter is null
   * @param args any - The Parameter can be of any types
   * @return boolean - If the params is null then the method will return {true} otherwise it'll return {false}
   */
  public static isNull(args: any): boolean {
    return args === null || args === undefined;
  }

  /**
   * When the method is called it'll check if the parameter is not null
   * @param args any - The Parameter can be of any types
   * @return boolean - If the params is not null then the method will return {true} otherwise it'll return {false}
   */
  public static isNotNull(args: any): boolean {
    return args !== null && args !== undefined;
  }

  /**
   * When the method is called it'll check if the array is empty
   * @param {Array} arr - The array can be of any types
   * @return boolean - If the array is empty then the method will return {true} otherwise it'll return {false}
   */
  public static isArrayEmpty(arr: any[]): boolean {
    return Utils.isNull(arr) || arr.length === 0;
  }

  /**
   * When the method is called it'll check if the array is not empty
   * @param {Array} arr - The array can be of any types
   * @return boolean - If the array is not empty then the method will return {true} otherwise it'll return {false}
   */
  public static isArrayNotEmpty(arr: any[]): boolean {
    return Utils.isNotNull(arr) || arr.length > 0;
  }

  /**
   *
   * @param firstArr
   * @param secondArr
   * @return boolean
   */
  public static isArraysEqual(firstArr: any[], secondArr: any[]): boolean {
    if (Utils.isArrayEmpty(firstArr) || Utils.isArrayEmpty(secondArr)) {
      return false
    }

    if (firstArr.length !== secondArr.length) {
      return  false;
    }

    // TODO Check the each item from the both arrays
    return  true
  }

  public static doDelay = (ms: number) => new Promise(res => setTimeout(res, ms))
}
