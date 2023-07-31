function getCurrentMilitaryTime(): string {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: false }); // Returns time in HH:MM:SS format
  }
  

export {
    getCurrentMilitaryTime
}