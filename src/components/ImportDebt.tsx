import axios from 'axios';
import { useState } from 'react';

const ImportDebt = () => {
  const [file, setFile] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const handleFileChange = (event: any) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setMensagem('');
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      setMensagem('Selecione um arquivo primeiro.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const uploadUrl = 'http://localhost:8000/api/v1/import_debts';

    try {
      await axios.post(uploadUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMensagem(`Sucesso`);
    } catch (error) {
        setMensagem(`Erro`);
    }
  };

  return (
    <div>
      <h2>Debitos</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};



export default ImportDebt;