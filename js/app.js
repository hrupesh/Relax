const container =  document.querySelector('.container');
const text =  document.querySelector('#text');

const totalTime  = 10000
const breathTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breathAnimation()

function breathAnimation(){
    text.innerText = 'Breath In.........'
    // console.log('Breath In.........');
    // document.body.style.background = 'linear-gradient(135deg,red 5%,green 75%)';
    container.className = 'container grow'
    
    setTimeout(() => {
        text.innerText = 'Hoolllllld!'
        // console.log('Hoollllllld!');
        // document.body.style.background = 'linear-gradient(135deg,green 5%,red 75%)';
        
        setTimeout(() => {
            text.innerText = 'Breathe Out.........'
            // console.log('Breathe Out........');
            // document.body.style.background = 'linear-gradient(135deg,blue 5%,purple 75%)';
            container.className = 'container shrink'
        }, holdTime)

    },breathTime)
}

setInterval(breathAnimation,totalTime)