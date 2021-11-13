import React, { PureComponent } from 'react';
import style from './appLoader.module.scss';

export default class AppLoader extends PureComponent {
  render() {
    return (
        <div>
          <div className={style.loader} />
        </div>
    )
  }
}
