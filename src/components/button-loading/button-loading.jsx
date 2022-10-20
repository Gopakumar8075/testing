import React from 'react';
import ButtonLoadingStyles from './button-loading.module.scss';

const ButtonLoading = () => {
  return (
    <div className="">
      <div className={ButtonLoadingStyles.loaderfirstdiv}>
        <div className={ButtonLoadingStyles.loaderseconddiv}>
          <div></div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonLoading;
