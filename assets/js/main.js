let slide_time = 1200; // The time it takes to complete an entire transition
let change_point = slide_time / 2; // Calculates when the slide should change
let right_arrow = $('.navigation_right'); // Element that trigger move right
let left_arrow = $('.navigation_left'); // Element that trigger move left
let slide_amount = $('.transition_wrap section').length; // How many slides
let current_slide = 1; // Starting slide
let on = 1;

// for popup to select darkmode 
window.onload = function () {
  let popup = document.getElementById('popup');
  popup.innerHTML = 'Toggle for dark mode! <img id="rightImage" src="./assets/images/giphy.gif" />';
  this.setTimeout(() => {
    popup.style.opacity = '0';
  }, 5000)
  this.setTimeout(() => {
    popup.style.display = 'none';
  }, 7000)
}
// on click action for right arrow click
right_arrow.click(function () {
  let active_slide = $('.active_slide').next()

  if (on == 1) {
    on = 0;
    if (current_slide < slide_amount) {
      current_slide++;
      set_transition(active_slide);
      setTimeout(function () {
        $('.active_slide').hide().removeClass('active_slide').next().addClass('active_slide').show();
      }, change_point);
      setTimeout(function () {
        on = 1;
      }, slide_time);
    } else {
      // End
      return;
    }
  }
  setBar();
  checkRightBtn();
});

// on click action for left arrow click
left_arrow.click(function () {
  let active_slide = $('.active_slide').prev()

  if (on == 1) {
    on = 0;
    if (current_slide > 1) {
      current_slide--;
      set_transition(active_slide);
      setTimeout(function () {
        $('.active_slide').hide().removeClass('active_slide').prev().addClass('active_slide').show();
      }, change_point);
      setTimeout(function () {
        on = 1;
      }, slide_time);
    } else if (current_slide <= 1) {
      // Start
      return;
    }
  }
  setBar();
  checkLeftBtn();
});

// Set transition type
function set_transition(tran) {
  let transition_type = tran.data('transition')
  $('.part_wrap div').each(function () {
    $(this).removeClass(this.className.split(' ').pop());
    setTimeout(function () {
      $('.part_wrap div').addClass(transition_type)
    }, 100)

  })
}

// setting progress bar
function setBar() {
  const progressBar = document.getElementById('progressBar');
  switch (current_slide) {
    case 1:
      progressBar.style.width = `0%`;
      break;
    case 2:
      progressBar.style.width = `25%`;
      break;
    case 3:
      progressBar.style.width = `50%`;
      break;
    case 4:
      progressBar.style.width = `75%`;
      break;
    case 5:
      progressBar.style.width = `100%`;
      break;
    default: return;
  }
}

// on right btn click checking for when button needs to disappear!
function checkRightBtn() {
  const rightBtn = document.getElementById('rightBtn');
  const leftBtn = document.getElementById('leftBtn');
  const leftBtnText = document.getElementById('leftBtnText');
  const rightBtnText = document.getElementById('rightBtnText');

  switch (current_slide) {
    case 1:
      leftBtn.style.display = 'none';
      rightBtnText.innerHTML = 'Projects  <img id="rightImage" alt="arrow" src="./assets/images/giphy.gif" />';
      break;
    case 2:
      leftBtn.style.display = 'block';
      rightBtnText.innerHTML = 'About  <img id="rightImage" alt="arrow" src="./assets/images/giphy.gif" />'
      leftBtnText.innerHTML = '<img id="leftImage" alt="arrow" src="./assets/images/giphy.gif" /> Home'
      break;
    case 3:
      leftBtn.style.display = 'block';
      leftBtnText.innerHTML = '<img id="leftImage" src="./assets/images/giphy.gif" alt="arrow" /> Projects'
      rightBtnText.innerHTML = 'Services  <img id="rightImage" alt="arrow" src="./assets/images/giphy.gif" />'
      break;
    case 4:
      rightBtn.style.display = 'block';
      leftBtnText.innerHTML = '<img id="leftImage" src="./assets/images/giphy.gif" alt="arrow" /> About'
      rightBtnText.innerHTML = 'Contact  <img id="rightImage" src="./assets/images/giphy.gif" alt="arrow" />'
      break;
    case 5:
      leftBtn.style.display = 'block';
      rightBtn.style.display = 'none';
      leftBtnText.innerHTML = '<img id="leftImage" src="./assets/images/giphy.gif" alt="arrow" /> Services'
      break;
    default:
      return;
  }
}

// on left btn click checking for when button needs to disappear!
function checkLeftBtn() {
  let rightBtn = document.getElementById('rightBtn');
  let leftBtn = document.getElementById('leftBtn');
  const leftBtnText = document.getElementById('leftBtnText');
  const rightBtnText = document.getElementById('rightBtnText');
  switch (current_slide) {
    case 1:
      leftBtn.style.display = 'none';
      rightBtnText.innerHTML = 'Projects  <img id="rightImage" src="./assets/images/giphy.gif" alt="arrow" />';
      break;
    case 2:
      rightBtnText.innerHTML = 'About  <img id="rightImage" src="./assets/images/giphy.gif" alt="arrow" />'
      leftBtn.style.display = 'block';
      leftBtnText.innerHTML = '<img id="leftImage" src="./assets/images/giphy.gif" alt="arrow" /> Home'
      break;
    case 3:
      leftBtn.style.display = 'block';
      leftBtnText.innerHTML = '<img id="leftImage" src="./assets/images/giphy.gif" alt="arrow" /> Projects'
      rightBtnText.innerHTML = 'Services  <img id="rightImage" src="./assets/images/giphy.gif"alt="arrow"  />'
      break;
    case 4:
      rightBtn.style.display = 'block';
      leftBtnText.innerHTML = '<img id="leftImage" src="./assets/images/giphy.gif"alt="arrow"  /> About'
      rightBtnText.innerHTML = 'Contact  <img id="rightImage" src="./assets/images/giphy.gif" alt="arrow" />'
      break;
    case 5:
      leftBtn.style.display = 'block';
      rightBtn.style.display = 'none';
      leftBtnText.innerHTML = '<img id="leftImage" src="./assets/images/giphy.gif" alt="arrow" /> Services'
      break;
    default:
      return;
  }
}

// checking what slide we are on on page load
function checkPage() {
  if (current_slide === 1) {
    document.getElementById('leftBtn').style.display = 'none';
    document.getElementById('rightBtnText').innerHTML = 'Projects  <img id="rightImage" alt="arrow" src="./assets/images/giphy.gif" />';
  }
  else if (current_slide === 5) {
    document.getElementById('rightBtn').style.display = 'none';
  }
}
checkPage();

// on click show email address

function showEmail() {
  let email = document.getElementById('email_text');
  email.innerHTML = '<a id="email_text" target="_blank" href="mailto:vh.webdesign19@gmail.com">vh.webdesign19@gmail.com</a>';
};

function setSVG() {
  let windowWidth = window.innerWidth;
  let svg = document.getElementById('svg');

  if (windowWidth === 1920) {
    svg.setAttribute('viewBox', '0 0 1920 300')
  }
  else if (windowWidth === 1600) {
    svg.setAttribute('viewBox', '0 0 1920 300')
  }
  else if (windowWidth === 768) {
    svg.setAttribute('viewBox', '0 0 1320 300')
  }
  else if (windowWidth < 768) {
    svg.setAttribute('viewBox', '0 0 1320 300')
  }
}

setSVG();