var mybutton = document.getElementById("backToTop");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    mybutton.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
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
        // Implement the code to submit the recording
        // This will require a server-side endpoint to handle the submission
    };