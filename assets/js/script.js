// this is date code 
function updateDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerText = today.toLocaleDateString('en-US', options);
}
updateDate();



// this is nav live clock 

function updateClock() {
      let now = new Date();
      let hours = now.getHours().toString().padStart(2, '0');
      let minutes = now.getMinutes().toString().padStart(2, '0');
      let seconds = now.getSeconds().toString().padStart(2, '0');
      
      let timeString = `${hours}:${minutes}:${seconds}`;
      document.getElementById("liveClock").textContent = timeString;
  }

  setInterval(updateClock, 1000);
  updateClock(); // পেজ লোড হওয়ার সাথে সাথে সময় দেখাবে


//   this is popup 

function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function submitHTML() {
    let htmlContent = document.getElementById('htmlContent').value;
    console.log("Submitted HTML: ", htmlContent);
    // এখানে AJAX ব্যবহার করে PHP-তে পাঠানো যাবে
    closePopup();
}

// this is popup start,end time 

function calculateMinutes() {
    let startTime = document.getElementById("startTime").value;
    let endTime = document.getElementById("endTime").value;

    if (startTime && endTime) {
        let start = new Date("1970-01-01T" + startTime + "Z");
        let end = new Date("1970-01-01T" + endTime + "Z");

        if (end < start) {
            alert("End Time অবশ্যই Start Time এর পর হতে হবে!");
            return;
        }

        let diffInMinutes = (end - start) / (1000 * 60); // মিলিসেকেন্ড থেকে মিনিটে রূপান্তর
        document.getElementById("totalMinutes").innerText = diffInMinutes;
    } else {
        alert("দয়া করে Start Time এবং End Time নির্বাচন করুন!");
    }
}

// time validation calculate 
function validateTime() {
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let errorMessage = document.getElementById("errorMessage");

    if (hours === "" || minutes === "") {
        errorMessage.textContent = "Both fields are required!";
        return;
    }

    hours = parseInt(hours);
    minutes = parseInt(minutes);

    if (isNaN(hours) || isNaN(minutes)) {
        errorMessage.textContent = "Please enter valid numbers!";
        return;
    }

    if (hours < 0 || hours > 23) {
        errorMessage.textContent = "Hours must be between 0 and 23!";
        return;
    }

    if (minutes < 0 || minutes > 59) {
        errorMessage.textContent = "Minutes must be between 0 and 59!";
        return;
    }

    errorMessage.textContent = "";  // Clear error if everything is valid
    alert(`Time entered: ${hours} hour(s) and ${minutes} minute(s)`);
}