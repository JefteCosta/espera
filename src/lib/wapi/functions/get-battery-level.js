export function getBatteryLevel() {
  if (window.Store.Conn.plugged) {
    return 100;
  }
  output = window.Store.Conn.battery;
  if (done !== undefined) {
    done(output);
  }
  return output;
}
