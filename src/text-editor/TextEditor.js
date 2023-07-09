import React, {useState} from "react"

const TextEditor = () =>{
    const[text, setText] = useState("")

    const upCase = () =>{
        const textUp = text.toUpperCase()
        setText(textUp)
    }
     const lowCase = () =>{
        const textlw = text.toLocaleLowerCase()
        setText(textlw)
    } 

    const clear = ()=>{
        const clear = ""
        setText(clear)
    }

    const capitlize = () =>{
        for(let i = 0; i >= text.split(" "); i++){  
        const cap = text[i].toUpperCase()
        setText(cap)
    }
    }

    const handleOnChange = (e) =>{
        setText(e.target.value)
    }

    return(
        
        <div className=" ">
            <h1 className="text-5xl text-green-600 font-bold font-mono my-5 flex justify-center bg-orange-200" >Text Editor</h1>
            <div className="flex justify-center font-bold text-lg p-3">
                    <button onClick={upCase} value={text} className="mx-[10px]  text-slate-700 rounded hover:text-orange-500  hover:bg-red-100 bg-red-100">UpperCase</button>

                    <button onClick={lowCase} value={text} className="bg-red-100 mx-[30px] text-slate-700 rounded  hover:text-orange-500  hover:bg-red-100 md:flex hidden">LowerCase</button>

                    <button onClick={clear} value={text} className="mx-[30px] text-slate-700 rounded bg-red-100   hover:text-orange-500  hover:bg-red-100">Clear</button>

                    <button onClick={capitlize} value={text} className="mx-[30px] text-slate-700 rounded bg-red-100   hover:text-orange-500  hover:bg-red-100">capitalize</button>


            </div>
            <textarea onChange={handleOnChange} value={text} className=" dark:bg-slate-200 text-slate-700 flex justify-center my-10 container mx-auto border-orange-500 border-4 h-96 rounded bg-orange-100 w-96 hover:border-green-500 outline-none">
            </textarea>

            <p className="content-center font-bold flex justify-center text-red-500">{text.split(" ").length-1} words and {text.length}characters</p>

        </div>
    )
}
export default TextEditor;