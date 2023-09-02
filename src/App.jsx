import { useState} from 'react';
import AddDocument from "./components/AddDocument";

function App(props) {
  const [addFile, setAddFile] = useState()

  const onAddDocument = ({title, file}) => {
    console.log(file)
    //addDocument(formData)
  }

  const addDocument = async (formData) => {
    // const res = await fetch("http://localhost:8000/documents/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: formData,
    // })
    // const data = await res.json()
    // console.log(data)
  }

  return (
    <>
      <AddDocument onAdd={onAddDocument}/>
    </>
  );
}

export default App;
