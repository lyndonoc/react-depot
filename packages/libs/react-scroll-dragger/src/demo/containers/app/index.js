import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import DragScroll from '../../../lib/scroll-dragger';
import Octocat from '../../components/octocat';
import dragItems from '../../constants/demo-data';

import './style.scss';

const App = () => {

  return (
    <div className="drag-scroll-demo__container">
      <div className="drag-scroll-demo__header__wrapper">
        <div className="drag-scroll-demo__header">
          <h1 className="drag-scroll-demo__title">
            react-scroll-dragger
          </h1>
        </div>
        <Octocat/>
      </div>
      <div className="drag-scroll-demo">
        {dragItems.map((items, itemsIndex) => {
          return (
            <section
              className="drag-scroll-demo__section"
              key={itemsIndex}
            >
              <h3 className="drag-scroll-demo__section--title">
                {items.title}
              </h3>
              {items.codes.map((code, codeIndex) => {
                return (
                  <SyntaxHighlighter
                    key={`${code.language}+${codeIndex}`}
                    language={code.language}
                  >
                    {code.code}
                  </SyntaxHighlighter>
                );
              })}
              <DragScroll {...(items.props || {})}>
                {items.images.map((item, itemIndex) => {
                  return (
                    <div
                      key={`${item}+${itemIndex}`}
                      className="drag-scroll-demo__img__container"
                    >
                      <img
                        alt=""
                        className="drag-scroll-demo__img"
                        src={item}
                      />
                    </div>
                  );
                })}
              </DragScroll>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default App;
