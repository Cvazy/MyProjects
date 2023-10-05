const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const words = ['World', 'Love', 'Home', 'Study', 'Honey', 'Grow', 'Butterfly', 'Doctor', 'Street', 'Walk', 'Fly'];

function createMeteor() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const speed = 2;
    const angle = Math.random() * Math.PI * 2;
    const word = words[Math.floor(Math.random() * words.length)];
    const minFontSize = 0.1;
    const maxFontSize = 50;
    const fontWeight = 800;

    const initialDistance = canvas.width / 2;
    const maxDistance = canvas.width / 2;

    return {
        x: centerX,
        y: centerY,
        speed,
        angle,
        word,
        minFontSize,
        maxFontSize,
        fontWeight,
        initialDistance,
        maxDistance,
    };
}

const centerMeteors = [];
const randomMeteors = [];

function isWordOutsideCanvas(meteor) {
    const wordWidth = ctx.measureText(meteor.word).width;
    const wordHeight = meteor.fontSize;

    return (
        meteor.x + wordWidth < 0 ||
        meteor.x > canvas.width ||
        meteor.y + wordHeight < 0 ||
        meteor.y - wordHeight > canvas.height
    );
}

function createRandomMeteor(centerAngle) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x) + Math.PI;

    const speed = 2;
    const word = words[Math.floor(Math.random() * words.length)];
    const minFontSize = 0.1;
    const maxFontSize = 40;
    const fontWeight = 700;

    const maxDistance = canvas.width / 2;

    const opacity = 0;

    const start_x = x;
    const start_y = y;
    
    const koef = (y - canvas.height / 2 ) / (x - canvas.width/2);
    
    let x_peresech = 0;
    let y_peresech = 0;
    
    const x1 = canvas.width/2;
    const x2 = x;
    const y1 = canvas.height / 2 ;
    const y2 = y;
    let casew = 0;
    const m = canvas.height / 2 - koef * canvas.width/2;

    if((x1-x2)/(y1-y2) < (canvas.width/canvas.height) && (x1-x2)/(y1-y2) > -(canvas.width/canvas.height)){
    
    	if(y < canvas.height / 2){
    		x_peresech = (0 - y1)*(x2-x1)/(y2-y1)  + x1;
    		y_peresech = 0;
    		casew  = 1;
    	}else{
    		x_peresech = (canvas.height - y1)*(x2-x1)/(y2-y1)  + x1;
    		y_peresech = canvas.height;    
    		casew = 2;	
    	}
    
    }else{
        if(x < canvas.width / 2){
    		x_peresech = 0;
    		y_peresech = y1 + (0-x1)*(y2-y1)/(x2-x1);
    		casew = 3;
    	}else{
    		x_peresech = canvas.width;
    		y_peresech = y1 + (canvas.width-x1)*(y2-y1)/(x2-x1);  
    		casew = 4;	
    	}
    }
    

    

   const initialDistance = Math.sqrt(
            (x_peresech - canvas.width/2) ** 2 + (y_peresech - canvas.height / 2) ** 2
   );

    return {
        x,
        y,
        speed,
        angle,
        word,
        minFontSize,
        maxFontSize,
        fontWeight,
        initialDistance,
        maxDistance,
        opacity,
        start_x,
        start_y
    };
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const userX = canvas.width / 2;
    const userY = canvas.height / 2;

    const centerAngle = Math.random() * Math.PI * 2;

    for (let i = 0; i < centerMeteors.length; i++) {
        const meteor = centerMeteors[i];

        const distanceFromUser = Math.sqrt(
            (meteor.x - userX) ** 2 + (meteor.y - userY) ** 2
        );

        meteor.speed = 2 + (distanceFromUser / meteor.initialDistance) * 4;

        const speedX = Math.cos(meteor.angle) * meteor.speed;
        const speedY = Math.sin(meteor.angle) * meteor.speed;

        const t = distanceFromUser / meteor.initialDistance;

        meteor.x += speedX;
        meteor.y += speedY;

        meteor.fontSize = meteor.minFontSize + (meteor.maxFontSize - meteor.minFontSize) * t;

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, `rgba(164, 164, 164, 1)`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');

        meteor.opacity += 0.01;
        ctx.globalAlpha = meteor.opacity;

        ctx.font = `${meteor.fontWeight} ${meteor.fontSize}px "CoopBlack_Cyrillic_0"`;
        ctx.fillStyle = gradient;
        ctx.fillText(meteor.word, meteor.x, meteor.y);

        ctx.globalAlpha = 1;

        if (isWordOutsideCanvas(meteor)) {
            centerMeteors.splice(i, 1);
            i--;
        }
    }

    if (Math.random() < 0.9) {
        const randomMeteor = createRandomMeteor(centerAngle);
        randomMeteors.push(randomMeteor);
    }

    for (let i = 0; i < randomMeteors.length; i++) {
        const meteor = randomMeteors[i];

        const distanceFromUser = Math.sqrt(
            (meteor.x - userX) ** 2 + (meteor.y - userY) ** 2
        );

	const distanceFromStart = Math.sqrt(
            (meteor.x - meteor.start_x) ** 2 + (meteor.y - meteor.start_y) ** 2
        );

	const t = distanceFromStart / meteor.initialDistance;

        meteor.speed = 1 + t * 6;

        const speedX = Math.cos(meteor.angle) * meteor.speed;
        const speedY = Math.sin(meteor.angle) * meteor.speed;


        meteor.x += speedX;
        meteor.y += speedY;

        meteor.fontSize = meteor.minFontSize + (meteor.maxFontSize - meteor.minFontSize) * t;

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, `rgba(164, 164, 164, 1)`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');

        meteor.opacity += 0.01;
        ctx.globalAlpha = meteor.opacity;

        ctx.font = `${meteor.fontWeight} ${meteor.fontSize}px "CoopBlack_Cyrillic_0"`;
        ctx.fillStyle = gradient;
        ctx.fillText(meteor.word, meteor.x, meteor.y);

        ctx.globalAlpha = 1;

        if (isWordOutsideCanvas(meteor)) {
            randomMeteors.splice(i, 1);
            i--;
        }
    }

    requestAnimationFrame(animate);
}

animate();