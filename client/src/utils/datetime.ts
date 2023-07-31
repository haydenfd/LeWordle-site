function getCurrentMilitaryTime(): string {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: false }); // Returns time in HH:MM:SS format
  }
  
  function getCurrentDate(): string {
    const now = new Date();
    return now.toISOString().split('T')[0]; // Returns date in yyyy-mm-dd format
  }
  

export {
    getCurrentDate, 
    getCurrentMilitaryTime
}