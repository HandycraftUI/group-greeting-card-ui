import React, {useState, useEffect} from 'react'
import {fabric} from 'fabric'
import styled from 'styled-components'

const EditorWrapper = styled.canvas`
  border: 2px solid black;
  width: 90vw;
  height: 100vh;
`

const Editor = () => {
    const [canvas, setCanvas] = useState('')
    const [text, setText] = useState('')
    useEffect(() => {
        setCanvas(initCanvas())
    }, [])
    const initCanvas = () => {
        return new fabric.Canvas('canvas', {
            height: window.innerHeight - 200,
            width: window.innerWidth,
            backgroundColor: 'white',
            isDrawingMode: true
        })
    }

    const onToggleDrawingMode = () => {
        canvas.isDrawingMode = !canvas.isDrawingMode
    }

    const onAddText = () => {
        const textElement = new fabric.Text(text)
        canvas.add(textElement)
    }

    const onDelete = () => {
        const selection = canvas.getActiveObjects()
        selection.forEach((obj) => {
            canvas.remove(obj)
        })
    }

    const onAddImage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onload = function (f) {
            const data = f.target.result
            fabric.Image.fromURL(data, function (img) {
                const oImg = img.set({left: 0, top: 0, angle: 0}).scale(0.9)
                oImg.scaleToWidth(200)
                oImg.selectable = true
                canvas.add(oImg).renderAll()
            })
        }
        reader.readAsDataURL(file)
    }
    
    return (
        <div>
            <EditorWrapper id="canvas"/>
            <button onClick={() => onToggleDrawingMode()}>Toggle is Drawing mode</button>
            <input type="text" onChange={(event) => setText(event.target.value)}/>
            <button onClick={onAddText}>Add Text</button>
            <button onClick={onDelete}>Delete selected</button>
            <input type="file" onChange={onAddImage}/>
        </div>
    )
}

export default Editor

