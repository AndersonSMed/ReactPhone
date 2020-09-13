import JsSIP from 'jssip';
import {DEFAULT_CALL_OPTIONS} from '../../constants';

/** Store responsible for manage phone states */
class PhoneStore {
  isConnected = false;
  isCalling = false;
  _session = null;
  _userAgent = null;

  /**
   * Connects to an extension
   * @param {String} url URL of the server, ex: wss://sip.myhost.com
   * @param {String} extension Extension's name, ex: sip:3442@something.com
   * @param {String} password Extension's password
   */
  connect(url, extension, password) {
    const socket = new JsSIP.WebSocketInterface(url);
    const config = {
      sockets: [socket],
      uri: extension,
      password: password,
    };
    this._userAgent = new JsSIP.UA(config);
    this._userAgent.start();
  }

  /**
   * Starts a call to any given destination, using the registered extension
   * @param {String} destination Destination number, ex: sip:555@something.com
   */
  call(destination) {
    this.session = this._userAgent.call(
      destination,
      {
        eventHandlers: {},
        DEFAULT_CALL_OPTIONS,
      },
    );
  };
};

export default PhoneStore;
