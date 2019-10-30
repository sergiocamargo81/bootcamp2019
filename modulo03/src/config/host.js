import os from 'os';

class Host {
  static getName() {
    return os.hostname() === 'ID' ? '192.168.99.100' : 'localhost';
  }
}

export default Host.getName();
