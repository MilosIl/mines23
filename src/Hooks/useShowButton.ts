import {useEffect, useState} from 'react'

type Props = {}

const useShowButton = (props: Props) => {
    const [isClick, setIsClick] = useState(false);
    const showButton = () => {
        if (window.innerWidth <= 769) {
          setIsClick(false);
        } else {
          setIsClick(true);
        }
      };
      useEffect(() => {
        showButton();
      }, []);
}

export default useShowButton