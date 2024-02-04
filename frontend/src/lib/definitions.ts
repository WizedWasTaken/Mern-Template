/**
 * Error object
 * @date 2/4/2024 - 12:21:48 AM
 *
 * @export
 * @interface ErrorType
 * @typedef {ErrorType}
 */
export interface ErrorType {
  statusText: string;
}

/**
 * User object
 * @date 2/4/2024 - 12:21:48 AM
 *
 * @export
 * @interface UserType
 * @typedef {UserType}
 */
export interface UserType {
  _id: string;
  username: string;
  password: string;
  email: string;
  roles: string[];
}
