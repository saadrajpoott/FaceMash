var score1, score2, count1, count2, gameRunning;
start();



// For First Image
document.getElementById('vote-0').addEventListener('click', function()
{
    if( gameRunning )
    {
    count1=1;
    score1 += count1;
    if( score1 <10 )
    {
    document.getElementById('score-0').textContent = score1;
    }
    else
    {
        document.getElementById('winner-0').style.display = 'block';
        document.getElementById('score-0').textContent = '10';
        document.getElementById('play-again').style.display = 'inline-block';
        gameRunning = false;                                   
    }
    }
});


// For Second Image
document.getElementById('vote-1').addEventListener('click', function()
{   
    if( gameRunning )
       {
            count2=1;
            score2 += count2;
            if(score2 < 10)
            {
                document.getElementById('score-1').textContent = score2;
            }
            else
            {
                document.getElementById('winner-1').style.display = 'block';
                document.getElementById('score-1').textContent = '10';
                document.getElementById('play-again').style.display = 'inline-block';
                gameRunning = false;
            }
        }

});


// Play Again
document.getElementById('play-again').addEventListener('click', start );

// Start Function
function start()
{
    score1 = 0;
    score2 = 0;
    count1 = 0;
    count2 = 0;
    gameRunning = true;
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('winner-0').style.display = 'none';
    document.getElementById('winner-1').style.display = 'none';
    document.getElementById('play-again').style.display = 'none';
    var change1 = Math.floor(Math.random() * 10) + 1;
    var change2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('image-0').src = 'img' + change1 + '.jpg';
    document.getElementById('image-1').src = 'pic' + change2 + '.jpg';
    
}

















