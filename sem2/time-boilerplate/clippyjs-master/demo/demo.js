$(document).ready(function() {

// Global Vars
  var oddSecond = ' ';
  var oddMinute = ' ';
  var halfSecond = ' ';
  var halfMinute = ' ';

// Update time
  function update() {
    var quarter = moment().quarter();
    var momentSecond = moment().second();
    var momentMinute = moment().minute();
    var momentHour= moment().format('h').toLowerCase();
    var momentDay = moment().format('dddd').toLowerCase();
    var momentMonth = moment().format('MMMM').toLowerCase();
    var momentYear = moment().format('YYYY').toLowerCase();
    var momentAMPM = moment().format('A').toLowerCase();

    function oddOrEvenS(momentSecond){
      if(momentSecond % 2 === 0) {oddSecond = 'oddS';}
      else {oddSecond = 'evenS';}
    }

    function oddOrEvenM(momentMinute){
      if(momentMinute % 2 === 0) {oddMinute = 'evenM';}
      else {oddMinute = 'oddM';}
    }

    function checkHalfSecond(momentSecond){
      if(momentSecond < 30) {halfSecond = 'halfM';}
      else {halfSecond = 'fullM';}
    }

    function checkHalfMinute(momentMinute){
      if(momentMinute < 15) {halfMinute = 'quarterH';}
      else if(momentMinute < 30){halfMinute = 'halfH';}
      else if(momentMinute < 45){halfMinute = 'threequarterH';}
      else {halfMinute = 'fullH';}
    }

    function checkHalfHour(momentHour){
      if(momentHour < 15) {halfHour = 'quarterH';}
      else if(momentHour < 30){halfHour = 'halfH';}
      else if(momentHour < 45){halfHour = 'threequarterH';}
      else {halfHour = 'fullH';}
    }

  
    // Check if odd, even, quaterpast
    oddOrEvenS(momentSecond);
    checkHalfSecond(momentSecond);
    oddOrEvenM(momentMinute);
    checkHalfMinute(momentMinute);

    var timeAll = ['s' + momentSecond, 'm' + momentMinute, 'h' + momentHour, momentAMPM, momentDay, momentMonth, 'y' + momentYear, oddSecond, oddMinute, halfSecond, halfMinute];
    var timeClass = timeAll.join(' ');

    // Add classes
    $('body').attr('class', timeClass);

    // Add format
    $('.time').html(moment().format('dddd D MMMM YYYY h:mm:ss:SS A'));
  };

  var intervalId = setInterval(update, 100);
  intervalId

// Add pause
  $('button#pause').click(function(){
    clearInterval(intervalId);
    $('textarea#timeClasses').show();
  });

});

var availableAgents = ['Bonzi', 'Clippy', 'F1', 'Genie', 'Genius', 'Links', 'Merlin', 'Peedy', 'Rocky', 'Rover']

var talks = [
    'How can i help you?',
    'Nice day!',
    'Glad to meet you.',
    'At your service',
    'Helloo'
]

const randPos = () => .2 + Math.random() * .6

function nextAgent () {
    let agentName = availableAgents.pop()
    if (!agentName) return;

    clippy.load(agentName, agent => {
        window[agentName] = agent

        const move = () => {
            agent.moveTo($(document).width() * randPos(), $(document).height() * randPos())
        }

        move()

        agent.show();

        // Speak on click and start
        const speak = () => {
            agent.speak('I am ' + agentName + ', ' + talks[~~(Math.random() * talks.length)])
            agent.animate()
        }
        $(agent._el).click(() => speak())
        speak()

        // Animate randomly
        setInterval(() => {
            agent.animate()
        }, 3000 + (Math.random() * 4000))

        // Move randomly
        setInterval(() => {
            move()
        }, 3000 + (Math.random() * 4000))

        setTimeout(nextAgent, 2000)
    });
}

nextAgent()
