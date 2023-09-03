import { useState, useEffect} from 'react';
import AddDocument from "./components/AddDocument";

function App() {
  //const [addForm, setAddForm] = useState()

  const onAddDocument = ({formData}) => {
    console.log(formData)
    //setAddForm(formData)
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
      
    }
    addDocument(formData)
  }
 //Look into it
  // useEffect(() => {
  //   console.log(addForm)
  //   for(let key of addForm) {
  //     console.log(key[0], key[1])
  //   }

  // }, [addForm])

  const addDocument = async (formData) => {
    const res = await fetch("http://localhost:8000/documents", {
      method: "POST",
      body: formData,
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <>
      <AddDocument onAdd={onAddDocument}/>
    </>
  );
}

export default App;
