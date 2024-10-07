function displayDateTime() {
    // Array to hold the day names
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get the current date
    const now = new Date();
    
    // Get the day of the week
    const day = days[now.getDay()];
    
    // Get the hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    
    // Format minutes and seconds to be two digits
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Display the day and time
    console.log(`Today is : ${day}.`);
    console.log(`Current time is : ${hours} ${ampm} : ${formattedMinutes} : ${formattedSeconds}`);
}

// Call the function to display date and time
displayDateTime();
