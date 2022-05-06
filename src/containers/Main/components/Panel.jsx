import { memo } from 'react'
import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import { CardPanelContentStyled, LeftSidePanelStyled, RightSidePanelStyled, ItemStyled } from './style';
import { numberWithCommas } from '../../../commons/utils/regexReplace';
import COUNTRIES from '../../../commons/constants/countries';

function Panel({ updateAt, onChange, data, country }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  let countryFormated = '';
  COUNTRIES.forEach(obj => {
    if (obj.value === country) {
      countryFormated = obj.label;
    }
  }); 

  const textCovid19 = `${countryFormated} - Dados atualizados sobre o Coronavírus:\n`
  + `Óbitos hoje: ${numberWithCommas(todayDeaths)}\n`
  + `Casos hoje: ${numberWithCommas(todayCases)}\n`
  + `Total de casos: ${numberWithCommas(cases)}\n`
  + `Total de mortos: ${numberWithCommas(deaths)}\n`
  + `Total de recuperados: ${numberWithCommas(recovered)}` 

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  }

  return (
    <Card>
      <CardPanelContentStyled>
        <LeftSidePanelStyled>
          <Typography variant="h5" component="span" color="primary">Dados da Covid-19</Typography>
          <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
          <div className='pt-2'>
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </LeftSidePanelStyled>
        <RightSidePanelStyled>
          <Button variant="contained" color="primary" onClick={copyInfo}>
            Copiar
          </Button>
        </RightSidePanelStyled>
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel);