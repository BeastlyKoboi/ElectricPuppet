import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const runPup = async () => {
    console.log(window.api)
    await window.api.openPupWindow()
  }
  const openDialog = async () => {
    await window.api.openDialogBox()
  }

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
        <button
          onClick={runPup}
          className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
        >
          Open Brainly
        </button>
        <button onClick={openDialog} className="text-xl font-bold underline">
          Open Dialog Box
        </button>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
