import { useState } from "react";

export function useAudioURL() {
    const [audio, setAudio] = useState(null);
    const [audioURL, setAudioURL] = useState(null);

    const handleAudio = (e) => {
        const newAudio= e.target.files[0]
        setAudio(newAudio)
    }

    if(audio){
        const renderAudio = new FileReader();
        renderAudio.onload = () => {
            const audioURL = renderAudio.result
            setAudioURL(audioURL)
        }
        renderAudio.readAsDataURL(audio)
    }

    return { audioURL , handleAudio }
}