document.onload(
    function(){
        currentNotes = getCurrentNotes();
        notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
        noteText = document.getElementById("noteText");


        function playNote(note, duration) {
            //create a synth and connect it to the main output (your speakers)
            const synth = new Tone.Synth().toDestination();

            //play a middle 'C' for the duration of an 8th note
            synth.triggerAttackRelease(note, duration);
        }
        function getCurrentNotes() {
            localStorage.getItem("currentNotes");
        }

        function increaseDifficulty() {
            if (currentNotes.length >= notes.length) return;
            note = currentNotes[0];
            while (currentNotes.includes(note)) {
                note = notes[Math.trunc(Math.random()*notes.length)];
            }
            currentNotes.push(note);
            localStorage.setItem("currentNotes", currentNotes);
        }

        function playRandomNote() {
            // picks a random note at a random Octave between C3 and C5
            note = currentNotes[Math.trunc(Math.random()*currentNotes.length)]+Math.trunc(Math.random()*3+3);
            // plays the note
            playNote(note, "2n");
            setTimeout(() => {
                noteText.innerText = note;
            }, 3000);
        }
    }
)
