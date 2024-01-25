function attachGradientEvents() {

    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {

        let gradientBox = event.target.clientWidth;
        let position = event.offsetX / (gradientBox - 1);
        let percent = Math.trunc(position * 100);
        document.getElementById('result').textContent = percent + '%';

    }

    function gradientOut() {

        document.getElementById('result').textContent = '';

    }
}