import React from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function Point(props: { color?: string; checked?: boolean }) {
  const elm = useRef<HTMLDivElement>(null);
  const handleMouseEnter = useCallback((evn) => {
    if (evn.target && evn.target.style) {
      evn.target.style['transform'] = 'scale(1.2)';
    }
  }, []);

  const handleMouseLeave = useCallback((evn) => {
    if (evn.target && evn.target.style) {
      evn.target.style['transform'] = 'scale(1)';
    }
  }, []);

  useEffect(() => {
    if (elm.current && elm.current.parentElement) {
      elm.current.parentElement.addEventListener('mouseenter', handleMouseEnter);
      elm.current.parentElement.addEventListener('mouseleave', handleMouseLeave);
      elm.current.parentElement.style['transition'] = 'transform 100ms ease 0s, box-shadow 100ms ease 0s';
    }
    return () => {
      if (elm.current && elm.current.parentElement) {
        elm.current.parentElement.removeEventListener('mouseenter', handleMouseEnter);
        elm.current.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useMemo(() => {
    if (elm.current && elm.current.parentElement) {
      elm.current.parentElement.style['boxShadow'] = `${props.color} 0px 0px ${props.checked ? 5 : 0}px`;
    }
  }, [props.checked]);

  return (
    <div
      ref={elm}
      style={{
        height: props.checked ? 20 : 0,
        width: props.checked ? 20 : 0,
        borderRadius: '50%',
        backgroundColor: '#fff',
        transform: 'scale(1)',
        transition: 'height 100ms ease 0s, width 100ms ease 0s',
      }}
    />
  );
}
