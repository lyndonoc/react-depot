import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import styled from '@emotion/styled';
import { Scrollbars } from 'react-custom-scrollbars';

const StyleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  .react-scroll-dragger {
    &__btn {
      background-color: #fff;
      background-position: center center;
      background-repeat: no-repeat;
      border: 1px solid #e6e6e6;
      cursor: pointer;
      display: block;
      height: 50px !important;
      padding: 0;
      transition: opacity .3s;
      width: 50px !important;
      &--prev {
        background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z'/%3E%3C/svg%3E");
      }
      &--next {
        background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z'/%3E%3C/svg%3E");
        transform: rotate(180deg) !important;
      }
    }
    &__container {
      ${(props) => {
        return props.height
          ? {
            height: `${props.height}px !important`,
          }
          : {};
      }}
      > div {
        &:first-of-type {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          * {
            -webkit-user-drag: none;
            -khtml-user-drag: none;
            -moz-user-drag: none;
            -o-user-drag: none;
            user-drag: none;
          }
        }
      }
      @media screen and (max-width: 768px) {
        margin-right: 5px;
      }
    }
  }
`;

class DragScrollContainer extends PureComponent {
  static propTypes = {
    height: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    componentOrder: PropTypes.arrayOf(PropTypes.oneOf([
      'prev_button',
      'children',
      'next_button',
    ])),
  };

  static defaultProps = {
    componentOrder: [
      'prev_button',
      'children',
      'next_button',
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      isAtBeginning: true,
      isAtEnd: false,
      isDragging: false,
      needScroll: false,
    };
    this.lastXPosition = 0;
    this.lastScrollPosition = 0;

    this.scrollContainerElem = null;

    this.getComponentMap = this.getComponentMap.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleClickCapture = this.handleClickCapture.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseDrag = this.handleMouseDrag.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleContainerScroll = this.handleContainerScroll.bind(this);
    this.handleRef = this.handleRef.bind(this);
    this.registerLastScrollPosition = this.registerLastScrollPosition.bind(this);
    this.updateScrollStatus = this.updateScrollStatus.bind(this);

    window.addEventListener('mousemove', this.handleMouseDrag);
    window.addEventListener('resize', this.updateScrollStatus);

    smoothscroll.polyfill();
  }

  componentDidMount() {
    this.updateScrollStatus();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.updateScrollStatus();
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseDrag);
    window.removeEventListener('resize', this.updateScrollStatus);
  }

  getComponentMap() {
    const {
      props: {
        children,
      },
      state: {
        isAtBeginning,
        isAtEnd,
        needScroll,
      },
    } = this;

    const horizontalTrackStyle = {
      display: 'none',
    };

    const HorizontalTack = () => <div style={horizontalTrackStyle} />;

    return {
      prev_button: needScroll ? (
        <button
          key="react-scroll-dragger__prev-btn"
          className={ClassNames('react-scroll-dragger__btn', {
            'react-scroll-dragger__btn--prev': true,
            'react-scroll-dragger__btn--active': !isAtBeginning,
            'react-scroll-dragger__btn--inactive': isAtBeginning,
          })}
          onClick={this.handleBtnClick.bind(null, true)}
        />
      ) : null,
      next_button: needScroll ? (
        <button
          key="react-scroll-dragger__next-btn"
          className={ClassNames('react-scroll-dragger__btn', {
            'react-scroll-dragger__btn--next': true,
            'react-scroll-dragger__btn--active': !isAtEnd,
            'react-scroll-dragger__btn--inactive': isAtEnd,
          })}
          onClick={this.handleBtnClick.bind(null, false)}
        />
      ) : null,
      children: (
        <Scrollbars
          key="react-scroll-dragger__children"
          autoHide
          className="react-scroll-dragger__container"
          onClickCapture={this.handleClickCapture}
          onScroll={this.handleContainerScroll}
          ref={this.handleRef}
          renderTrackHorizontal={HorizontalTack}
          renderTrackVertical={HorizontalTack}
        >
          {children}
        </Scrollbars>
      ),
    };
  }

  handleBtnClick(isLeft) {
    const container = this.scrollContainerElem;

    if (container) {
      const scrollOffset = container.offsetWidth;
      const scrollAmt = isLeft
        ? Math.max(container.scrollLeft - scrollOffset, 0)
        : container.scrollLeft + scrollOffset;

      container.scrollTo({
        behavior: 'smooth',
        left: scrollAmt,
      });
    }
  }

  handleClickCapture(event) {
    if (this.lastXPosition !== event.pageX) {
      event.stopPropagation();
    }
  }

  handleContainerScroll() {
    const container = this.scrollContainerElem;

    if (container) {
      const {
        offsetWidth,
        scrollLeft,
        scrollWidth,
      } = container;

      this.setState({
        isAtBeginning: scrollLeft < 30,
        isAtEnd: scrollWidth <= (scrollLeft + offsetWidth),
      });
    }
  }

  handleMouseDown(event) {
    this.lastXPosition = event.pageX;
    this.registerLastScrollPosition();

    this.setState({
      isDragging: true,
    });
  }

  handleMouseUp() {
    this.registerLastScrollPosition();

    this.setState({
      isDragging: false,
    });
  }

  handleMouseDrag(event) {
    if (this.state.isDragging) {
      const scrollAmt = this.lastXPosition - event.pageX;
      const container = this.scrollContainerElem;

      if (container) {
        container.scrollLeft = (this.lastScrollPosition || 0) + scrollAmt;
      }
    }
  }

  handleRef(node) {
    if (node && node.container && node.container.childNodes) {
      this.scrollContainerElem = node.container.childNodes[0];
    }
  }

  registerLastScrollPosition() {
    const container = this.scrollContainerElem;

    if (container) {
      this.lastScrollPosition = container.scrollLeft;
    }
  }

  updateScrollStatus() {
    const container = this.scrollContainerElem;

    if (container) {
      const {
        offsetWidth,
        scrollLeft,
        scrollWidth,
      } = container;

      this.setState({
        isAtEnd: scrollWidth <= (scrollLeft + offsetWidth),
        needScroll: offsetWidth < scrollWidth,
      });
    }
  }

  render() {
    const {
      props: {
        componentOrder,
        height,
      },
    } = this;
    const componentMap = this.getComponentMap();
    console.log({
      componentOrder,
      height,
      height,
    });

    return (
      <StyleWrapper
        className="react-scroll-dragger"
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        {...height && {
          height,
        }}
      >
        {componentOrder.map((name) => {
          return componentMap[name] || null;
        })}
      </StyleWrapper>
    );
  }
}

export default DragScrollContainer;
