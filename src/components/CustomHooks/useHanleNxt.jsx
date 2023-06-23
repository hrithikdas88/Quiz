import { useContext } from 'react';
import QuesContext from '../../components/context/Context';

export const useHandleNxt = () => {
  const {  setState } = useContext(QuesContext);

  const handleNxt = () => {
    setState(prevState => ({
      ...prevState,
      index: prevState.index + 1,

      disabled: false,
      selectedOption: null
    }));
  };

  return {
   
    handleNxt
  };
};
