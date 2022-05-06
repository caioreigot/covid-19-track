import { memo, useState, useCallback, useEffect } from 'react'
import { ContainerStyled } from './style';
import Api from '../../api';
import Board from './components/Board';
import Panel from './components/Panel';

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('brazil');
  
  const updateAt = new Date().toLocaleString(); 

  const getCovidData = useCallback(async (country) => {
    await Api.getCountry(country)
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    (async function() {
      await getCovidData(country);
    })();
  }, [getCovidData, country]);

  /* Quando houver alteração no select, pegar os dados
  da API novamente e exibi-los */
  const handleChange = ({ target }) => {
    setData({});
    
    const country = target.value;
    setCountry(country);
  };

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
        />
      </div>
      <Board data={data}/>
    </ContainerStyled>
  );
}

export default memo(Main);