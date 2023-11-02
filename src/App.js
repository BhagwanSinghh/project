import './App.css';
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';

function App() {
  const [Textcopy, SetTextcopy] = useState()
  const [isCopied, setCopied] = useClipboard(Textcopy);
  const StartListening = () => SpeechRecognition.startListening({ continuous: true })
  const StopListening = () => SpeechRecognition.stopListening()
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div className='container'>

      <h1>Speech to Text Converter</h1>
      <br />
      <p>A React hook that converts speech from the microphone to text and makes it available to your React
        components.</p>

      <div className='main-content' onClick={()=> SetTextcopy(transcript)}>
        {transcript}
      </div>

      <div className='btn-style'>

        <button onClick={setCopied}>
           {isCopied ? 'Copied!' : 'Copy to ClipBoard'}
        </button>
        <button onClick={StartListening}>Start Listening</button>
        <button onClick={StopListening}>Stop Listening</button>

      </div>

    </div>
  );
}

export default App;

