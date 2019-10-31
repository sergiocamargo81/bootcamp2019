import os from 'os';

class Host {
  static getName() {
    return os.hostname() === 'ID' ? '192.168.99.100' : '127.0.0.1';
  }
}

export default Host.getName();
