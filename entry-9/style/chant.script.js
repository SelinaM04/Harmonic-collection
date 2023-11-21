var mybutton = document.getElementById("backToTop");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    mybutton.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    };

    let mediaRecorder;
    let audioChunks = [];

    document.getElementById("startRecord").onclick = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = (e) => {
                    audioChunks.push(e.data);
                };
                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    document.getElementById("audioPlayback").src = audioUrl;
                };
                mediaRecorder.start();
                audioChunks = [];
                document.getElementById("stopRecord").disabled = false;
            });
    };

    document.getElementById("stopRecord").onclick = () => {
        mediaRecorder.stop();
        document.getElementById("stopRecord").disabled = true;
    };

    document.getElementById("submitRecord").onclick = () => {
       
    };