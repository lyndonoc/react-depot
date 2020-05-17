import * as React from 'react';

export interface ReactScrollDraggerProps {
  children: React.ReactNode | React.ReactNodeArray
  componentOrder?: string[]
  height?: number
}

declare class ReactScrollDragger extends React.Component<ReactScrollDraggerProps, any> {}

export default ReactScrollDragger
