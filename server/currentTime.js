
class CurrentTime {
  constructor() {
    const date = new Date(Date.now());

    this.hour = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }

  toXML () {
    let xml = '<?xml version="1.0" encoding="UTF-8"?><time>';

    xml += `<hour>${this.hour}</hour>`;
    xml += `<minutes>${this.minutes}</minutes>`;
    xml += `<seconds>${this.seconds}</seconds>`;
    xml += '</time>';

    return xml;
  }
}

module.exports = CurrentTime;
