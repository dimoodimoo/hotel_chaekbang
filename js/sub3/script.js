// slide
var currentIndex = 0;
    
setInterval(function(){
    if(currentIndex < 2) {
        currentIndex ++;
    } else {
        currentIndex = 0;
    } 
    
    $(".slideImg").eq(currentIndex).siblings().fadeOut();
    $(".slideImg").eq(currentIndex).fadeIn();
    
},2000);
// tab
$("#board li a").click(function(){
    $(this).parent().addClass("on").siblings().removeClass("on")
});


function createCalendar(month, year) {
    const calendar = document.querySelector('.calendar');
    const monthName = document.querySelector('.month-name');
    const weekdays = document.querySelector('.weekdays');
    const days = document.querySelector('.days');
  
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const lastDateOfMonth = lastDayOfMonth.getDate();
  
    monthName.innerHTML = `${monthNames[month]} ${year}`;
  
    for (let i = 0; i < daysOfWeek.length; i++) {
      const weekday = document.createElement('div');
      weekday.innerHTML = daysOfWeek[i];
      weekdays.appendChild(weekday);
    }
  
    for (let i = 0; i < firstDayOfWeek; i++) {
      const blank = document.createElement('div');
      blank.classList.add('blank');
      days.appendChild(blank);
    }
  
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const day = document.createElement('div');
      day.innerHTML = i;
      day.classList.add('day');
      days.appendChild(day);
    }
  
    const blanks = document.querySelectorAll('.blank');
    if (blanks.length === 7) {
      blanks.forEach(blank => blank.style.display = 'none');
    }
  }
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  createCalendar(currentMonth, currentYear);
