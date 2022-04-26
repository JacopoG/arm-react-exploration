import React from 'react';
import { Value } from './Value';
import './index.css';

export default {
  title: 'Value',
  component: Value
}

export const Plain = () => <Value>8</Value>;

export const WithLabel = () => <Value label="Label">8</Value>;
