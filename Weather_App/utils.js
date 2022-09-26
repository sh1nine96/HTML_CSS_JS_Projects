class Utils {
  static formatDate() {
    let currentDate = new Date();
    let dateString = currentDate.toLocaleDateString("en-us", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return dateString;
  }
}

export { Utils };
