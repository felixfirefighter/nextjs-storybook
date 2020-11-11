import React, { FC } from "react";

import { Wrapper, styles } from './test-component'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  pin: number;
}

export const TestComponent: FC<Props> = ({ pin, className }) => {
  return (
    <>
      <Wrapper className={className}>
          a special wrapper~
      </Wrapper>
      <div className="wrapping">
        This is normal styled-jsx styles, nested styles also working
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default TestComponent;
