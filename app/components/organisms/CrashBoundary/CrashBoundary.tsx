// components/util/CrashBoundary.tsx
import React from 'react';
import { CrashBoundaryProps, CrashBoundaryState } from './CrashBoundary.types';

export default class CrashBoundary extends React.Component<
  CrashBoundaryProps,
  CrashBoundaryState
> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.error('[CrashBoundary]', error, info.componentStack);
    this.props.onError?.(error, info);
  }

  render() {
    return this.props.children;
  }
}
