import React, { useEffect, useState } from 'react';
import Search from 'components/Search/Search';
import useGetUser from 'hooks/useGetUser';
import { useModal } from 'components/ModalProvider/ModalProvider';

function App() {
  const { openModal } = useModal();
  const { data, error, makeRequest } = useGetUser();
  const [search, setSearch] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    makeRequest(search);
  };

  useEffect(() => {
    if (data) {
      openModal({ type: 'modal', content: { userData: data } });
    }
    if (error) {
      openModal({ type: 'error', content: { error: error?.message } });
    }
  }, [data, error]);

  return (
    <div className="App">
      <Search onSubmit={handleSubmit} onChange={handleChange} value={search} />
    </div>
  );
}

export default App;
