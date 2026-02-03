const images = document.querySelectorAll('.carousel img');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        let currentIndex = 0;
        let intervalId = null;
        
        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }
        
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }
        
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }
        
        function startAutoPlay() {
            intervalId = setInterval(nextImage, 1000);
        }
        
        function stopAutoPlay() {
            clearInterval(intervalId);
        }
        
        prevBtn.addEventListener('click', function() {
            stopAutoPlay();
            prevImage();
        });
        
        nextBtn.addEventListener('click', function() {
            stopAutoPlay();
            nextImage();
        });
        
        startAutoPlay();