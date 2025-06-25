<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terros</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            overflow-x: hidden;
            background: #000;
        }

        .hero-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }

        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, 
                #2c1810 0%, 
                #3d2818 20%, 
                #4a3420 40%, 
                #2d1f15 60%, 
                #1a1208 80%, 
                #0f0905 100%);
            opacity: 0.9;
        }

        .flowing-shapes {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .shape {
            position: absolute;
            border-radius: 50%;
            filter: blur(60px);
            opacity: 0.6;
            animation: float 20s infinite ease-in-out;
        }

        .shape1 {
            width: 800px;
            height: 800px;
            background: radial-gradient(circle, rgba(139, 104, 71, 0.4) 0%, transparent 70%);
            top: -20%;
            right: -10%;
            animation-delay: 0s;
        }

        .shape2 {
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(160, 120, 80, 0.3) 0%, transparent 70%);
            bottom: -15%;
            left: -5%;
            animation-delay: -7s;
        }

        .shape3 {
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(200, 150, 100, 0.2) 0%, transparent 70%);
            top: 30%;
            left: 20%;
            animation-delay: -14s;
        }

        @keyframes float {
            0%, 100% { 
                transform: translate(0, 0) rotate(0deg) scale(1);
            }
            25% { 
                transform: translate(30px, -50px) rotate(90deg) scale(1.1);
            }
            50% { 
                transform: translate(-20px, 30px) rotate(180deg) scale(0.9);
            }
            75% { 
                transform: translate(40px, 20px) rotate(270deg) scale(1.05);
            }
        }

        .header {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            padding: 2rem 3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            color: white;
            font-size: 1.2rem;
            font-weight: 300;
            letter-spacing: 2px;
        }

        .nav {
            display: flex;
            gap: 2rem;
            align-items: center;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
            align-items: center;
        }

        .nav-links a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 300;
            transition: color 0.3s ease;
            white-space: nowrap;
        }

        .nav-links a:hover {
            color: white;
        }

        .main-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 50;
        }

        .hero-text {
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 300;
            color: white;
            line-height: 1.2;
            letter-spacing: 0.02em;
            margin-bottom: 2rem;
        }

        .typing-text {
            overflow: hidden;
            border-right: 2px solid white;
            white-space: nowrap;
            animation: typing 3s steps(20, end), blink-caret 0.75s step-end infinite;
            display: inline-block;
        }

        @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
        }

        @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: white; }
        }

        .scroll-indicator {
            position: absolute;
            bottom: 3rem;
            left: 3rem;
            z-index: 100;
        }

        .scroll-circle {
            width: 60px;
            height: 60px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
        }

        .scroll-circle:hover {
            border-color: white;
            transform: scale(1.1);
        }

        .scroll-arrow {
            width: 12px;
            height: 12px;
            border-right: 1px solid rgba(255, 255, 255, 0.7);
            border-bottom: 1px solid rgba(255, 255, 255, 0.7);
            transform: rotate(45deg);
            margin-top: -3px;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .side-nav {
            position: absolute;
            right: 3rem;
            top: 50%;
            transform: translateY(-50%);
            z-index: 100;
        }

        .side-nav ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .side-nav a {
            color: rgba(255, 255, 255, 0.5);
            text-decoration: none;
            font-size: 0.8rem;
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transition: color 0.3s ease;
        }

        .side-nav a:hover {
            color: white;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .header {
                padding: 1.5rem 2rem;
                flex-direction: column;
                gap: 1rem;
            }
            
            .nav-links {
                flex-wrap: wrap;
                gap: 1rem;
                justify-content: center;
            }
            
            .nav-links a {
                font-size: 0.8rem;
            }
            
            .hero-text {
                font-size: clamp(2rem, 10vw, 4rem);
                padding: 0 2rem;
            }
            
            .side-nav {
                display: none;
            }
            
            .scroll-indicator {
                bottom: 2rem;
                left: 2rem;
            }
        }

        @media (max-width: 1024px) {
            .nav-links {
                gap: 1.5rem;
            }
            
            .nav-links a {
                font-size: 0.8rem;
            }
        }
    </style>
</head>
<body>
    <div class="hero-container">
        <div class="background"></div>
        
        <div class="flowing-shapes">
            <div class="shape shape1"></div>
            <div class="shape shape2"></div>
            <div class="shape shape3"></div>
        </div>

        <header class="header">
            <div class="logo">monopo saigon</div>
            <nav class="nav">
                <ul class="nav-links">
                    <li><a href="#">Méthode</a></li>
                    <li><a href="#">Agence</a></li>
                    <li><a href="#">Cas Client</a></li>
                    <li><a href="#">Intégration</a></li>
                    <li><a href="#">Leo, Premier développeur IA</a></li>
                    <li><a href="#">EN</a></li>
                </ul>
            </nav>
        </header>

        <div class="main-content">
            <h1 class="hero-text">
                <span class="typing-text">Développez votre projet<br>Web Mobile Data sur mesure</span>
            </h1>
        </div>

        <div class="scroll-indicator">
            <div class="scroll-circle">
                <div class="scroll-arrow"></div>
            </div>
        </div>

        <nav class="side-nav">
            <ul>
                <!-- Side nav removed as requested -->
            </ul>
        </nav>
    </div>

    <script>
        // Enhanced typing animation
        function typeText(element, text, speed = 100) {
            element.style.borderRight = '2px solid white';
            element.innerHTML = '';
            let i = 0;
            
            function type() {
                if (i < text.length) {
                    if (text.charAt(i) === '\n') {
                        element.innerHTML += '<br>';
                    } else {
                        element.innerHTML += text.charAt(i);
                    }
                    i++;
                    setTimeout(type, speed);
                } else {
                    // Keep blinking cursor for a moment, then remove it
                    setTimeout(() => {
                        element.style.borderRight = 'none';
                    }, 2000);
                }
            }
            
            type();
        }

        // Start typing animation when page loads
        window.addEventListener('load', () => {
            const typingElement = document.querySelector('.typing-text');
            const text = 'Développez votre projet\nWeb Mobile Data sur mesure';
            
            setTimeout(() => {
                typeText(typingElement, text, 100);
            }, 500);
        });

        // Smooth scroll for scroll indicator
        document.querySelector('.scroll-circle').addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });

        // Add subtle mouse parallax effect
        document.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const x = (mouseX - 0.5) * speed * 20;
                const y = (mouseY - 0.5) * speed * 20;
                
                shape.style.transform += ` translate(${x}px, ${y}px)`;
            });
        });
    </script>
</body>
</html>
