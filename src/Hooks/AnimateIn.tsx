import { CSSProperties, PropsWithChildren, useRef } from 'react';
import useElementOnScreen from './useElementOnScreen';
const AnimateIn: React.FC<
  PropsWithChildren<{ from: CSSProperties; to: CSSProperties }>
> = ({ from, to, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition: '600ms ease-in-out',
  };
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to,
            }
          : {
              ...defaultStyles,
              ...from,
            }
      }>
      {children}
    </div>
  );
};

export default AnimateIn;
